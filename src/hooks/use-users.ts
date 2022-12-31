import { useState, useEffect } from 'react'
import UserAPI, { UserGetParams } from '../api/UserAPI'
import { User } from '../types'

export function useUsers(params: UserGetParams) {
  const [data, setData] = useState<User[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  // TODO: add error state

  const [fetchCount, setFetchCount] = useState(0)

  useEffect(() => {
    UserAPI.findMany({ _start: params._start, _limit: params._limit })
      .then((response) => {
        setIsLoaded(true)
        setData(response.data)
        setTotalCount(response.totalCount)
      })
      .catch((error) => {
        console.log('error :>> ', error.message)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCount, params._start, params._limit])

  const refetch = () => {
    setFetchCount((prev) => prev + 1)
  }

  return {
    data,
    totalCount,
    isLoaded,
    refetch,
  }
}
