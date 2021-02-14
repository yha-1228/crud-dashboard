import React from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainHeading } from '../components/shared/Heading'

export function Page02Page() {
  return (
    <Layout title="Home">
      <MainHeader>
        <MainHeading>Page02</MainHeading>
      </MainHeader>
    </Layout>
  )
}
