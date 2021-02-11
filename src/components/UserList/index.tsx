import React, { useEffect, useState } from 'react'
import UsersAPI from '../../api/UsersAPI'
import { sleep } from '../../functions'
import { Users } from '../../types'
import { Component } from './Component'
import { mapUsersDataFromApi } from './functions'

export type Sort = { active: boolean; key: string | null; order: 'asc' | 'desc' | null }

export function UserList() {
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [pageCount, setPageCount] = useState<number>(0)
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0)

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
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`)
        }
        const totalCount = Number(res.headers.get('X-Total-Count'))
        setTotalCount(totalCount)
        setPageCount(Math.ceil(totalCount / limit))
        return res.json()
      })
      .then(async (result) => {
        await sleep(800)
        setIsLoaded(true)
        setUsers(result.map(mapUsersDataFromApi))
      })
      .catch((error) => {
        console.log('error :>> ', error.message)
      })
  }

  const onTableHeaderClick = (event: React.MouseEvent<any>) => {
    const currentHeaderText = event.currentTarget.dataset.header as string
    const isAnotherKeySelected = !(sort.active && sort.key === currentHeaderText)
    const isCurrentKeySelectedBy = (order: 'asc' | 'desc' | null) => {
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

    if (isCurrentKeySelectedBy('desc')) {
      setSort({ active: false, key: null, order: null })
      return
    }
  }

  const onDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset

    const isConfirm = window.confirm(`Delete ${username}?`)
    if (!isConfirm) return

    setIsLoaded(false)

    UsersAPI.deleteById(id).then(() => {
      loadUsersFromServer({ sort, offset, limit })
    })
  }

  const onPageChange = (data: { selected: number }) => {
    const { selected } = data
    setCurrentPageIndex(selected)
    setOffset(Math.ceil(selected * limit))
  }

  const onLimitSelecterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOffset(0)
    setLimit(Number(event.target.value))
  }

  useEffect(() => {
    loadUsersFromServer({ sort, offset, limit })
  }, [sort, offset, limit])

  return (
    <Component
      users={users}
      isLoaded={isLoaded}
      totalCount={totalCount}
      pageCount={pageCount}
      currentPageIndex={currentPageIndex}
      offset={offset}
      limit={limit}
      sort={sort}
      onTableHeaderClick={onTableHeaderClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
      onLimitSelecterChange={onLimitSelecterChange}
    />
  )
}
