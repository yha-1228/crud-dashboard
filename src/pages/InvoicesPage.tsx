import React from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainContentArea } from '../components/Layout/MainContentArea'
import { MainHeading } from '../components/shared/Heading'

export function InvoicesPage() {
  return (
    <Layout title="Invoices">
      <MainHeader>
        <MainHeading>Invoices page</MainHeading>
      </MainHeader>
      <MainContentArea>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia delectus maiores
          mollitia neque perferendis ullam? Cum unde officiis atque quo. Tempore, architecto!
          Doloremque, aliquid consequatur animi rem perspiciatis optio.
        </p>
      </MainContentArea>
    </Layout>
  )
}
