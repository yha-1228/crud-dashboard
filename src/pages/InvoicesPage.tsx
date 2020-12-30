import React from 'react'
import { MainHeader } from '../components/layouts/Headers'
import { Layout } from '../components/layouts/Layout'
import { MainContentArea } from '../components/layouts/MainContentArea'
import { MainHeading } from '../components/shared/Headings'

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
