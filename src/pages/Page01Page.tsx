import React from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainHeading } from '../components/shared/Heading'

export function Page01Page() {
  return (
    <Layout title="Home">
      <MainHeader>
        <MainHeading>Page01</MainHeading>
      </MainHeader>
    </Layout>
  )
}
