import {
  useState,
  useEffect,
  useReducer,
  DependencyList,
  Reducer,
  useRef,
  useCallback,
} from 'react';
import { FSA } from '../../types';

type State<T = unknown> = {
  data: T | undefined;
  isFetching: boolean;
  totalCount: number;
  error: Error | null;
};

type UseQueryHook<T> = State<T> & {
  isLoading: boolean;
  refetch: () => void;
};

type Action<T> =
  | FSA<'init'>
  | FSA<'done', { data: T; totalCount: number }>
  | FSA<'error', Error>;

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case 'init':
      return { ...state, isFetching: true };

    case 'done':
      return {
        data: action.payload.data,
        isFetching: false,
        totalCount: action.payload.totalCount,
        error: null,
      };

    case 'error':
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

type Fetcher<T> = () => Promise<{ data: T; totalCount: number }>;

const stateToHookValue = <T>(
  state: State<T>,
  refetch: () => void,
): UseQueryHook<T> => ({
  ...state,
  isLoading: !state.data && !state.error,
  refetch,
});

export type UseQueryProps<T = unknown> = {
  fetcher: Fetcher<T>;
  deps: DependencyList;
  onSuccess?: () => void;
};

export function useQuery<T>(props: UseQueryProps<T>) {
  const { fetcher, deps, onSuccess } = props;

  const fetcherRef = useRef<Fetcher<T>>(fetcher);

  useEffect(() => {
    fetcherRef.current = fetcher;
  }, [fetcher]);

  const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(reducer, {
    data: undefined,
    isFetching: false,
    totalCount: 0,
    error: null,
  });

  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      dispatch({ type: 'init' });

      try {
        const { data, totalCount } = await fetcherRef.current();
        if (!ignore) {
          dispatch({ type: 'done', payload: { data, totalCount } });
          onSuccess?.();
        }
      } catch (error) {
        if (error instanceof Error) {
          if (!ignore) {
            dispatch({ type: 'error', payload: error });
          }
        } else {
          throw error;
        }
      }
    };

    loadData();

    return () => {
      ignore = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCount, ...deps]);

  const refetch = useCallback(() => {
    setFetchCount((prev) => prev + 1);
  }, []);

  return stateToHookValue(state, refetch);
}
