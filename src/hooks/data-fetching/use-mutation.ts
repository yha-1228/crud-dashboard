import { useReducer } from 'react';
import { FSA } from '../../types';

type State = {
  isLoading: boolean;
  error: Error | null;
};

type Action = FSA<'init'> | FSA<'done'> | FSA<'error', Error>;

const reducer = (state: State, action: Action): State => {
  if (action.type === 'init') {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === 'done') {
    return {
      isLoading: false,
      error: null,
    };
  }

  if (action.type === 'error') {
    return {
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};

const initialState: State = {
  isLoading: false,
  error: null,
};

export type Callbacks = {
  onSuccess?: () => void;
  onError?: () => void;
};

type MutateFn = (arg?: any) => Promise<any>;

type UseMutationHook = {
  mutate: (arg?: any) => void;
  isLoading: boolean;
  error: Error | null;
};

export function useMutation(
  mutateFn: MutateFn,
  { onSuccess, onError }: Callbacks,
): UseMutationHook {
  const [state, dispatch] = useReducer(reducer, initialState);

  const mutate = (arg?: any) => {
    dispatch({ type: 'init' });

    mutateFn(arg)
      .then(() => {
        dispatch({ type: 'done' });
        onSuccess?.();
      })
      .catch((error) => {
        dispatch({ type: 'error', payload: error });
        onError?.();
      });
  };

  return { mutate, ...state };
}
