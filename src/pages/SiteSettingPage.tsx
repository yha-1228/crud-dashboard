import React from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainContentArea } from '../components/Layout/MainContentArea'
import { MainHeading } from '../components/shared/Heading'

export function SiteSettingPage() {
  return (
    <Layout title="Site setting">
      <MainHeader>
        <MainHeading>Site setting page</MainHeading>
      </MainHeader>
      <MainContentArea>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum suscipit nulla
          alias, maxime quis sed earum velit rem id aliquid vel porro autem, et voluptate ea ullam
          sit blanditiis.
        </p>
      </MainContentArea>
    </Layout>
  )
}
