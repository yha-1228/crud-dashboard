import React from 'react'
import { Helmet } from 'react-helmet'
import { Main } from './Main'
import { Sidebar } from './Sidebar'
import { TwoColumn } from './TwoColumn'
import { SidebarHeading } from '../shared/Headings'
import { SidebarHeader } from './Headers'
import { SidebarContentArea } from './SidebarContentArea'
import { Navgation } from '../Navgation'

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
              <SidebarHeading>Sample App</SidebarHeading>
            </SidebarHeader>

            <SidebarContentArea>
              <Navgation />
            </SidebarContentArea>
          </Sidebar>
        }
        main={<Main>{children}</Main>}
      />
    </>
  )
}
