import { useState, useEffect, useReducer, useRef, DependencyList, Reducer } from 'react'

type State<T extends any = any> = {
  data: T
  totalCount: number
  isLoaded: boolean
  error: Error | null
}

type UseQueryHook<T> = State<T> & {
  refetch: () => void
}

type Action<T> =
  | { type: 'init' }
  | { type: 'done'; payload: { data: T; totalCount: number } }
  | { type: 'error'; payload: Error }

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
      error: action.payload,
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

export function useQuery<T>(fetcher: Fetcher<T>, deps: DependencyList) {
  const fetcherRef = useRef(fetcher)

  useEffect(() => {
    fetcherRef.current = fetcher
  }, [fetcher])

  const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(reducer, initialState)

  const [fetchCount, setFetchCount] = useState(0)

  useEffect(() => {
    let ignore = false

    fetcherRef
      .current()
      .then((response) => {
        if (!ignore) {
          dispatch({
            type: 'done',
            payload: { data: response.data, totalCount: response.totalCount },
          })
        }
      })
      .catch((error) => {
        if (!ignore) {
          dispatch({
            type: 'error',
            payload: error,
          })
        }
      })

    return () => {
      ignore = true
    }

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
