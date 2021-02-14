import React, { useEffect, useState } from 'react'
import UsersAPI from '../../api/UsersAPI'
import { sleep } from '../../functions'
import { Users } from '../../types'
import { Component } from './Component'
import { mapUsersDataFromApi } from './functions'

export function UserList() {
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
        await sleep(1000)
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
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    document.getElementById('table-box')?.scrollTo(0, 0)
  }

  const onLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPageIndex(0)
    setOffset(0)
    setLimit(Number(event.target.value))
  }

  useEffect(() => {
    loadUsersFromServer({ offset, limit })
  }, [offset, limit])

  return (
    <Component
      users={users}
      isLoaded={isLoaded}
      totalCount={totalCount}
      pageCount={pageCount}
      currentPageIndex={currentPageIndex}
      offset={offset}
      limit={limit}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
      onLimitChange={onLimitChange}
    />
  )
}
