import React from 'react'
import { Layout } from '../components/Layout'
import { UserList } from '../components/UserList'

export function UserListPage() {
  return (
    <Layout title="Users">
      <UserList />
    </Layout>
  )
}
