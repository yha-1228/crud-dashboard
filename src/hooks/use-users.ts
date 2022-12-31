import { useState, useEffect, useReducer } from 'react'
import UserAPI, { UserGetParams } from '../api/UserAPI'
import { User } from '../types'

type State = {
  data: User[]
  totalCount: number
  isLoaded: boolean
  error: Error | null
}

type Action =
  | { type: 'init' }
  | { type: 'done'; payload: { data: User[]; totalCount: number } }
  | { type: 'error'; error: Error }

const reducer = (state: State, action: Action): State => {
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

export function useUsers(params: UserGetParams) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [fetchCount, setFetchCount] = useState(0)

  useEffect(() => {
    UserAPI.findMany({ _start: params._start, _limit: params._limit })
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
  }, [fetchCount, params._start, params._limit])

  const refetch = () => {
    setFetchCount((prev) => prev + 1)
  }

  return {
    ...state,
    refetch,
  }
}
