import React from 'react'
import { Helmet } from 'react-helmet-async'
import Main from './Main'
import Sidebar from './Sidebar'
import { SidebarHeader } from './SidebarHeader'
import { SidebarContentArea } from './SidebarContentArea'
import { Navgation } from '../Navgation'
import siteConfig from '../../siteConfig'
import { css } from '@emotion/css'
import SidebarHeading from './SidebarHeading'

function TwoColumnWrapper({ children }: { children: React.ReactNode }) {
  return <div className={css({ display: 'flex', height: '100vh' })}>{children}</div>
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
            <SidebarHeading>{siteConfig.title}</SidebarHeading>
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
