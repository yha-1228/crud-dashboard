import React from 'react'
import { Container } from '../components/layouts/Container'
import { Layout } from '../components/layouts/Layout'
import { UserCreate } from '../components/UserCreate'

export function UserCreatePage() {
  return (
    <Layout title="新規作成">
      <Container>
        <UserCreate />
      </Container>
    </Layout>
  )
}
