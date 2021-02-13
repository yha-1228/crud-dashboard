import React from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainHeading } from '../components/shared/Heading'

export function InvoicesPage() {
  return (
    <Layout title="Invoices">
      <MainHeader>
        <MainHeading>Invoices page</MainHeading>
      </MainHeader>
    </Layout>
  )
}
