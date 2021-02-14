import React from 'react'
import { Layout } from '../components/Layout'
import { MainHeader } from '../components/Layout/MainHeader'
import { MainHeading } from '../components/shared/Heading'

export function SiteSettingPage() {
  return (
    <Layout title="Site setting">
      <MainHeader>
        <MainHeading>Site setting</MainHeading>
      </MainHeader>
    </Layout>
  )
}
