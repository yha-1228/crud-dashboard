import React, { useState } from 'react'
import Header from './Header'
import UserTable from './UserTable'
import Footer from './Footer'
import { useScroll } from '../../hooks/use-scroll'
import { useUsers } from '../../hooks/use-users'
import { useDeleteUser } from '../../hooks/use-delete-user'

const calcPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit)
}

export function UserList() {
  const { ref, scroll } = useScroll<HTMLDivElement>()

  const [userGetParams, setUserGetParams] = useState({ _start: '0', _limit: '20' })
  const { data: users, totalCount, isLoading, refetch } = useUsers(userGetParams)

  const deleteUserHook = useDeleteUser({
    onSuccess: () => refetch(),
  })

  const [currentPageIndex, setCurrentPageIndex] = useState(0)

  const handleDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset

    const isConfirm = window.confirm(`Delete ${username}?`)
    if (!isConfirm) return

    deleteUserHook.mutate(id)
  }

  const handlePageChange = (data: { selected: number }) => {
    const { selected } = data

    setCurrentPageIndex(selected)

    setUserGetParams((prev) => ({
      ...prev,
      _start: Math.ceil(selected * Number(userGetParams._limit)).toString(),
    }))

    scroll({ top: 0, left: 0 })
  }

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPageIndex(0)
    setUserGetParams({ _start: '0', _limit: event.target.value })
  }

  return (
    <div>
      <Header />
      <UserTable isLoading={isLoading} users={users} onDeleteClick={handleDeleteClick} ref={ref} />
      {!isLoading && (
        <Footer
          totalCount={totalCount}
          pageCount={calcPageCount(totalCount, Number(userGetParams._limit))}
          currentPageIndex={currentPageIndex}
          limit={Number(userGetParams._limit)}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      )}
    </div>
  )
}
