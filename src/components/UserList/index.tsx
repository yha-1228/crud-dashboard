import React, { useEffect, useState } from 'react'
import UsersAPI from '../../api/UsersAPI'
import { usersUrl } from '../../constants'
import { deleteData, sleep } from '../../functions'
import { Users } from '../../types'
import { Component } from './Component'
import { mapUsersDataFromApi } from './functions'

export type Sort = { active: boolean; key: string | null; order: 'asc' | 'desc' | null }

export function UserList() {
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [selectedPage, setSelectedPage] = useState<number>(1)

  // API params
  const [offset, setOffset] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)
  const [sort, setSort] = useState<Sort>({ active: false, key: null, order: null })

  const loadUsersFromServer = ({
    sort,
    offset,
    limit,
  }: {
    sort: Sort
    offset: number
    limit: number
  }) => {
    setIsLoaded(false)

    const paginateParams = { _start: offset.toString(), _limit: limit.toString() }
    const sortParams = { _sort: sort.key, _order: sort.order }
    const params = sort.active ? { ...paginateParams, ...sortParams } : paginateParams

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
  }

  const onTableHeaderClick = (event: React.MouseEvent<any>) => {
    const currentHeaderText = event.currentTarget.dataset.header as string
    const isAnotherKeySelected = !(sort.active && sort.key === currentHeaderText)
    const isCurrentKeySelectedBy = (order: 'asc' | 'dsec' | null) => {
      return sort.active && sort.key === currentHeaderText && sort.order === order
    }

    if (!sort.active || isAnotherKeySelected) {
      setSort({ active: true, key: currentHeaderText, order: 'asc' })
      return
    }

    if (isCurrentKeySelectedBy('asc')) {
      setSort({ ...sort, order: 'desc' })
      return
    }

    if (isCurrentKeySelectedBy('dsec')) {
      setSort({ active: false, key: null, order: null })
      return
    }
  }

  const onDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset

    const isConfirm = window.confirm(`Delete ${username}?`)
    if (!isConfirm) return

    setIsLoaded(false)
    deleteData(`${usersUrl}/${id}`).then(() => {
      loadUsersFromServer({ sort, offset, limit })
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
    loadUsersFromServer({ sort, offset, limit })
  }, [sort, offset, limit, selectedPage])

  return (
    <Component
      users={users}
      totalCount={totalCount}
      isLoaded={isLoaded}
      offset={offset}
      limit={limit}
      sort={sort}
      selectedPage={selectedPage}
      onTableHeaderClick={onTableHeaderClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
      onLimitSelecterChange={onLimitSelecterChange}
    />
  )
}
