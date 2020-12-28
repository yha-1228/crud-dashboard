import React from 'react'
import { Helmet } from 'react-helmet'
import { Main } from './Main'
import { Sidebar } from './Sidebar'
import { TwoColumn } from './TwoColumn'
import { SidebarHeading } from '../shared/Headings'
import { SidebarHeader } from './Headers'

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
