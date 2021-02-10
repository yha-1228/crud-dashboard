import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { UserEdit } from '../components/UserEdit'

type Id = { id: string }

export function UserEditPage() {
  let { id } = useParams<Id>()

  return (
    <Layout title="Edit">
      <UserEdit id={id} />
    </Layout>
  )
}
