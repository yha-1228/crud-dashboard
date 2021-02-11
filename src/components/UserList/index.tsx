import React, { useEffect, useState } from 'react'
import UsersAPI from '../../api/UsersAPI'
import { usersUrl } from '../../constants'
import { deleteData, sleep } from '../../functions'
import { Users } from '../../types'
import { Component } from './Component'
import { mapUsersDataFromApi } from './functions'

export function UserList() {
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [selectedPage, setSelectedPage] = useState<number>(1)

  // API params
  const [offset, setOffset] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)
  const [isSort, setIsSort] = useState<boolean>(false)
  const [sortKey, setSortKey] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('')

  const loadUsersFromServer = ({
    isSort,
    sortKey,
    sortOrder,
    offset,
    limit,
  }: {
    isSort: boolean
    sortKey: string
    sortOrder: 'asc' | 'desc' | ''
    offset: number
    limit: number
  }) => {
    setIsLoaded(false)

    let params: { [key: string]: string } = { _start: offset.toString(), _limit: limit.toString() }

    if (isSort) {
      params = { ...params, _sort: sortKey, _order: sortOrder }
    }

    UsersAPI.getWithParams(params)
      .then((res) => {
        const totalCount = Number(res.headers.get('X-Total-Count'))
        setTotalCount(totalCount)
        return res.json()
      })
      .then(async (result) => {
        await sleep(700)
        setIsLoaded(true)
        const users = result.map(mapUsersDataFromApi)
        setUsers(users)
      })

    // getData(`${usersUrl}?${urlSearchParams}`).then((result) => {
    //   sleep(1200).then(() => {
    //     setIsLoaded(true)
    //     const users = result.map(mapUsersDataFromApi)
    //     setUsers(users)
    //   })
    // })
  }

  const onTableHeaderClick = (event: React.MouseEvent<any>) => {
    const header = event.currentTarget.dataset.header as string

    // no sort
    if (!isSort || !(isSort && sortKey === header)) {
      setIsSort(true)
      setSortKey(header)
      setSortOrder('asc')
      return
    }

    // asc sort
    if (isSort && sortKey === header && sortOrder === 'asc') {
      setSortOrder('desc')
      return
    }

    // desc sort
    if (isSort && sortKey === header && sortOrder === 'desc') {
      setIsSort(false)
      return
    }
  }

  const onDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset

    const isConfirm = window.confirm(`Delete ${username}?`)
    if (!isConfirm) return

    setIsLoaded(false)
    deleteData(`${usersUrl}/${id}`).then(() => {
      loadUsersFromServer({ isSort, sortKey, sortOrder, offset, limit })
    })
  }

  const onPageChange = (data: any) => {
    const selected = data.selected
    setSelectedPage(selected)
    setOffset(Math.ceil(selected * limit))
  }

  const onLimitSelecterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(0)
    setOffset(0)
    setLimit(Number(event.target.value))
  }

  useEffect(() => {
    loadUsersFromServer({ isSort, sortKey, sortOrder, offset, limit })
  }, [isSort, sortKey, sortOrder, offset, limit, selectedPage])

  return (
    <Component
      users={users}
      totalCount={totalCount}
      isLoaded={isLoaded}
      offset={offset}
      limit={limit}
      isSort={isSort}
      sortKey={sortKey}
      sortOrder={sortOrder}
      selectedPage={selectedPage}
      onTableHeaderClick={onTableHeaderClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
      onLimitSelecterChange={onLimitSelecterChange}
    />
  )
}
