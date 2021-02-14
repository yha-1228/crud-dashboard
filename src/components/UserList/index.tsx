import React, { useEffect, useRef, useState } from 'react'
import UsersAPI from '../../api/UsersAPI'
import { Users } from '../../types'
import { mapUsersDataFromApi } from './functions'
import Header from './Header'
import UserTable, { UserTable02 } from './UserTable'
import Footer from './Footer'

export function UserList() {
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [pageCount, setPageCount] = useState<number>(0)
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)
  const [limit, setLimit] = useState<number>(20)
  const userTableRef = useRef<HTMLDivElement>(null)

  const loadUsersFromServer = ({ offset, limit }: { offset: number; limit: number }) => {
    const params = {
      _start: offset.toString(),
      _limit: limit.toString(),
    }

    UsersAPI.get(params)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`)
        }
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

  const onDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset

    const isConfirm = window.confirm(`Delete ${username}?`)
    if (!isConfirm) return

    setIsLoaded(false)

    UsersAPI.deleteBy(id).then(() => {
      loadUsersFromServer({ offset, limit })
    })
  }

  const onPageChange = (data: { selected: number }) => {
    const { selected } = data
    setCurrentPageIndex(selected)
    setOffset(Math.ceil(selected * limit))
  }

  const onLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPageIndex(0)
    setOffset(0)
    setLimit(Number(event.target.value))
  }

  useEffect(() => {
    console.log('offset, limit updated!')
    loadUsersFromServer({ offset, limit })
    const userTableElement = userTableRef.current as HTMLDivElement
    userTableElement.scrollTo(0, 0)
  }, [offset, limit])

  return (
    <>
      <Header isLoaded={isLoaded} />
      <UserTable02
        isLoaded={isLoaded}
        users={users}
        onDeleteClick={onDeleteClick}
        ref={userTableRef}
      />
      <Footer
        isLoaded={isLoaded}
        pageCount={pageCount}
        limit={limit}
        onPageChange={onPageChange}
        onLimitChange={onLimitChange}
      />
    </>
  )
}
