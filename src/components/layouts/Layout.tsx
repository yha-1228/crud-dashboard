import React from 'react'
import { Helmet } from 'react-helmet'
import { Main } from './Main'
import { Container } from './Container'
import { Sidebar } from './Sidebar'
import { TwoColumn } from './TwoColumn'
import { Box } from './Box'
import { SidebarHeader } from './SidebarHeader'
import { SidebarHeading } from '../shared/Headings'

type Props = { title: string; children: React.ReactNode }

export function Layout({ title, children }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <TwoColumn
        sidebar={
          <Sidebar>
            <SidebarHeader>
              <SidebarHeading>Sidebar</SidebarHeading>
            </SidebarHeader>
          </Sidebar>
        }
        main={<Main>{children}</Main>}
      />
    </>
  )
}
