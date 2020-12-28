import React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainHeader } from '../components/layouts/MainHeader'
import { MainHeading } from '../components/shared/Headings'

export function HomePage() {
  return (
    <Layout title="Home">
      <MainHeader>
        <MainHeading>Home</MainHeading>
      </MainHeader>
    </Layout>
  )
}
