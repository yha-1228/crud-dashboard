import React from 'react'
import { MainHeader } from '../components/layouts/MainHeader'
import { Layout } from '../components/layouts/Layout'
import { MainContentArea } from '../components/layouts/MainContentArea'
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
