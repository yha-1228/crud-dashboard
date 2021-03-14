import { useEffect, useState } from 'react'
import UserAPI from '../../api/UserAPI'
import { Users } from '../../types'
import { mapUsersDataFromApi } from './functions'

/**
 * 不使用
 * TODO: これを使ってみる
 */
export function useUsers({ offset, limit }: { offset: number; limit: number }) {
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [pageCount, setPageCount] = useState<number>(0)

  const loadUsersFromServer = ({ offset, limit }: { offset: number; limit: number }) => {
    const params = { _start: String(offset), _limit: String(limit) }

    UserAPI.fetchUsersRequestOfGet(params)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        const totalCount = Number(res.headers.get('X-Total-Count'))
        setTotalCount(totalCount)
        setPageCount(Math.ceil(totalCount / limit))
        return res.json()
      })
      .then((result) => {
        setIsLoaded(true)
        setUsers(result.map(mapUsersDataFromApi))
      })
      .catch((error) => {
        console.log('error :>> ', error.message)
      })
  }

  useEffect(() => {
    loadUsersFromServer({ offset, limit })
  }, [offset, limit])

  return {
    users,
    isLoaded,
    totalCount,
    pageCount,
  }
}
