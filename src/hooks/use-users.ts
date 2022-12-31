import { useState, useEffect } from 'react'
import UserAPI, { UserGetParams } from '../api/UserAPI'
import { mapUsersDataFromApi } from '../components/UserList/utils'
import { User } from '../types'

export function useUsers(params: UserGetParams) {
  const [data, setData] = useState<User[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  // TODO: add error state

  const [fetchCount, setFetchCount] = useState(0)

  useEffect(() => {
    UserAPI.fetchUsersRequestOfGet({ _start: params._start, _limit: params._limit })
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        const totalCount = Number(res.headers.get('X-Total-Count'))
        setTotalCount(totalCount)
        return res.json()
      })
      .then((result) => {
        setIsLoaded(true)
        setData(result.map(mapUsersDataFromApi))
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
