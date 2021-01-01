import React from 'react'
import { Helmet } from 'react-helmet'
import { Main } from './Main'
import { Sidebar } from './Sidebar'
import { SidebarHeading } from '../shared/Heading'
import { SidebarHeader } from './SidebarHeader'
import { SidebarContentArea } from './SidebarContentArea'
import { Navgation } from '../Navgation'
import { Box } from '@material-ui/core'

function TwoColumnWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex" height="100vh">
      {children}
    </Box>
  )
}

export function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <TwoColumnWrapper>
        <Sidebar>
          <SidebarHeader>
            <SidebarHeading>Sample App</SidebarHeading>
          </SidebarHeader>

          <SidebarContentArea>
            <Navgation />
          </SidebarContentArea>
        </Sidebar>

        <Main>{children}</Main>
      </TwoColumnWrapper>
    </>
  )
}
