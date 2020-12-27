import React from 'react'
import { Helmet } from 'react-helmet'
import { Main } from '../Main'
import { Container } from '../shared/Container'
import { Sidebar } from './Sidebar'
import { TwoColumn } from './TwoColumn'

type Props = { title: string; children: React.ReactNode }

export function Layout({ title, children }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <TwoColumn>
        <Sidebar>
          <Container>{/* TODO: */}</Container>
        </Sidebar>
        <Main>{children}</Main>
      </TwoColumn>
    </>
  )
}
