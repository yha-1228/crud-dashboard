import React, { useEffect, useState } from 'react'
import { deleteData, getData, usersUrl, wait } from '../../constants'
import { Users } from '../../types'
import { Component } from './Component'

export function UserList() {
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false)
  const [selectedPage, setSelectedPage] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)
  const [isSort, setIsSort] = useState<boolean>(false)
  const [sortKey, setSortKey] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('')

  // Add
  const [allUsers, setAllUsers] = useState<Users>([])

  // Add
  const loadAllUsersFromServer = () => {
    getData(usersUrl).then((result) => {
      const allUsers = result.map((item: any) => ({
        id: item.id,
        username: item.username,
        email: item.email,
        password: item.password,
        country: item.country,
      }))
      setAllUsers(allUsers)
      setTotalCount(allUsers.length)
    })
  }

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
    setIsPageLoaded(false)

    let params: { [key: string]: string } = { _start: offset.toString(), _limit: limit.toString() }

    if (isSort) {
      params = { ...params, _sort: sortKey, _order: sortOrder }
    }

    const urlSearchParams = new URLSearchParams(params)

    getData(`${usersUrl}?${urlSearchParams}`).then((result) => {
      wait(1200).then(() => {
        setIsLoaded(true)
        setIsPageLoaded(true)

        const users = result.map((item: any) => ({
          id: item.id,
          username: item.username,
          email: item.email,
          password: item.password,
          country: item.country,
        }))

        setUsers(users)
      })
    })
  }

  const handleTableHeaderClick = (event: React.MouseEvent<any>) => {
    const header = event.currentTarget.dataset.header as string

    if (!isSort || !(isSort && sortKey === header)) {
      setIsSort(true)
      setSortKey(header)
      setSortOrder('asc')
      return
    }

    if (isSort && sortKey === header && sortOrder === 'asc') {
      setSortOrder('desc')
      return
    }

    if (isSort && sortKey === header && sortOrder === 'desc') {
      setIsSort(false)
      return
    }
  }

  const handleDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset

    const isConfirm = window.confirm(`Delete ${username}?`)
    if (!isConfirm) return

    setIsLoaded(false)
    deleteData(`${usersUrl}/${id}`).then(() => {
      loadUsersFromServer({
        isSort: isSort,
        sortKey: sortKey,
        sortOrder: sortOrder,
        offset: offset,
        limit: limit,
      })
    })
  }

  const handlePageClick = (data: any) => {
    const selected = data.selected
    const offset = Math.ceil(selected * limit)
    setSelectedPage(selected)
    setOffset(offset)
  }

  const handleLimitSelecterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(0)
    setOffset(0)
    setLimit(Number(event.target.value))
  }

  useEffect(() => {
    loadAllUsersFromServer()
    loadUsersFromServer({
      isSort: isSort,
      sortKey: sortKey,
      sortOrder: sortOrder,
      offset: offset,
      limit: limit,
    })
  }, [isSort, sortKey, sortOrder, offset, limit])

  return (
    <Component
      users={users}
      totalCount={totalCount}
      isLoaded={isLoaded}
      isPageLoaded={isPageLoaded}
      offset={offset}
      limit={limit}
      isSort={isSort}
      sortKey={sortKey}
      sortOrder={sortOrder}
      selectedPage={selectedPage}
      onTableHeaderClick={handleTableHeaderClick}
      onDeleteClick={handleDeleteClick}
      onPageClick={handlePageClick}
      onLimitSelecterChange={handleLimitSelecterChange}
    />
  )
}
