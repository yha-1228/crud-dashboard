import React from 'react'
import { Layout } from '../components/layouts/Layout'
import { UserList } from '../components/UserList'

export function UserListPage() {
  return (
    <Layout title="Users">
      <UserList />
    </Layout>
  )
}
