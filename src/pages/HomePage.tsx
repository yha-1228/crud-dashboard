import React from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainHeading } from '../components/shared/Heading'

export function HomePage() {
  return (
    <Layout>
      <MainHeader>
        <MainHeading>Home</MainHeading>
      </MainHeader>
    </Layout>
  )
}
