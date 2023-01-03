import { useState, useEffect, useReducer, useRef, DependencyList } from 'react'

type UseQueryHook<T> = {
  refetch: () => void
  data: T
  totalCount: number
  isLoaded: boolean
  error: Error | null
}

type State<T extends any = any> = {
  data: T
  totalCount: number
  isLoaded: boolean
  error: Error | null
}

type Action<T> =
  | { type: 'init' }
  | { type: 'done'; payload: { data: T; totalCount: number } }
  | { type: 'error'; error: Error }

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  if (action.type === 'init') {
    return state
  }

  if (action.type === 'done') {
    return {
      data: action.payload.data,
      totalCount: action.payload.totalCount,
      isLoaded: true,
      error: null,
    }
  }

  if (action.type === 'error') {
    return {
      ...state,
      isLoaded: true,
      error: action.error,
    }
  }

  return state
}

const initialState: State = {
  data: [],
  totalCount: 0,
  isLoaded: false,
  error: null,
}

type Fetcher<T> = () => Promise<{ data: T; totalCount: number }>

export function useQuery<T extends any = any>(fetcher: Fetcher<T>, deps: DependencyList) {
  const fetcherRef = useRef(fetcher)

  useEffect(() => {
    fetcherRef.current = fetcher
  }, [fetcher])

  const [_state, dispatch] = useReducer(reducer, initialState)
  const state = _state as State<T>

  const [fetchCount, setFetchCount] = useState(0)

  useEffect(() => {
    fetcherRef
      .current()
      .then((response) => {
        dispatch({
          type: 'done',
          payload: { data: response.data, totalCount: response.totalCount },
        })
      })
      .catch((error) => {
        dispatch({
          type: 'error',
          error,
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCount, ...deps])

  const refetch = () => {
    setFetchCount((prev) => prev + 1)
  }

  return {
    ...state,
    refetch,
  } as UseQueryHook<T>
}
