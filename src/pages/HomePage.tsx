import React from 'react'
import { MainHeader } from '../components/layouts/Headers'
import { Layout } from '../components/layouts/Layout'
import { MainContentArea } from '../components/layouts/MainContentArea'
import { MainHeading } from '../components/shared/Headings'

export function HomePage() {
  return (
    <Layout title="Home">
      <MainHeader>
        <MainHeading>Home</MainHeading>
      </MainHeader>

      <MainContentArea>Home page</MainContentArea>
    </Layout>
  )
}
