import React from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout/Layout'
import { MainContentArea } from '../components/Layout/MainContentArea'
import { MainHeading } from '../components/shared/Heading'

export function HomePage() {
  return (
    <Layout title="Home">
      <MainHeader>
        <MainHeading>Home</MainHeading>
      </MainHeader>

      <MainContentArea>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis corporis
        fuga! Aspernatur minima vero corporis deleniti! Necessitatibus, eveniet ullam. Provident
        fuga reiciendis tempore porro ea vero, quidem recusandae temporibus?
      </MainContentArea>
    </Layout>
  )
}
