import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../components/layouts/Container'
import { Layout } from '../components/layouts/Layout'
import { UserEdit } from '../components/UserEdit'

type Id = { id: string }

export function UserEditPage() {
  let { id } = useParams<Id>()

  return (
    <Layout title="編集">
      <Container>
        <UserEdit id={id} />
      </Container>
    </Layout>
  )
}
