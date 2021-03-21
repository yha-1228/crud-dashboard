import React, { useEffect, useState } from 'react'
import UserAPI from '../../api/UserAPI'
import { Users } from '../../types'
import Header from './Header'
import UserTable from './UserTable'
import Footer from './Footer'
import { mapUsersDataFromApi } from './functions'
import { useScroll } from '../../hooks'

export function UserList() {
  const { ref, scroll } = useScroll<HTMLDivElement>()
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [pageCount, setPageCount] = useState<number>(0)
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)
  const [limit, setLimit] = useState<number>(20)

  const loadUsersFromServer = ({ offset, limit }: { offset: number; limit: number }) => {
    const params = {
      _start: offset.toString(),
      _limit: limit.toString(),
    }

    UserAPI.fetchUsersRequestOfGet(params)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        const totalCount = Number(res.headers.get('X-Total-Count'))
        setTotalCount(totalCount)
        setPageCount(Math.ceil(totalCount / limit))
        return res.json()
      })
      .then(async (result) => {
        setIsLoaded(true)
        setUsers(result.map(mapUsersDataFromApi))
      })
      .catch((error) => {
        console.log('error :>> ', error.message)
      })
  }

  const handleDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset

    const isConfirm = window.confirm(`Delete ${username}?`)
    if (!isConfirm) return

    setIsLoaded(false)

    UserAPI.fetchUsersRequestOfDelete(id)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        return res.json()
      })
      .then(() => {
        loadUsersFromServer({ offset, limit })
      })
      .catch((error) => {
        console.log('error :>> ', error.message)
      })
  }

  const handlePageChange = (data: { selected: number }) => {
    const { selected } = data
    setCurrentPageIndex(selected)
    setOffset(Math.ceil(selected * limit))
    scroll({ top: 0, left: 0 })
  }

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPageIndex(0)
    setOffset(0)
    setLimit(Number(event.target.value))
  }

  useEffect(() => {
    loadUsersFromServer({ offset, limit })
  }, [offset, limit])

  return (
    <div>
      <Header isLoaded={isLoaded} />
      <UserTable isLoaded={isLoaded} users={users} onDeleteClick={handleDeleteClick} ref={ref} />
      <Footer
        isLoaded={isLoaded}
        totalCount={totalCount}
        pageCount={pageCount}
        currentPageIndex={currentPageIndex}
        limit={limit}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
      />
    </div>
  )
}
