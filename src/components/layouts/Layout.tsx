import React from 'react'
import { Helmet } from 'react-helmet'
import { Main } from './Main'
import { Container } from './Container'
import { Sidebar } from './Sidebar'
import { TwoColumn } from './TwoColumn'
import { Box } from './Box'
import { Button } from '../shared/Button'

type Props = { title: string; children: React.ReactNode }

export function Layout({ title, children }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <TwoColumn
        left={
          <Sidebar>
            <Container>
              <Box paddingTop={16} paddingBottom={16}>
                <div>
                  <div>Lorem, ipsum.</div>
                  <div>Lorem, ipsum.</div>
                  <div>Lorem, ipsum.</div>
                  <div>Lorem, ipsum.</div>
                  <div>Lorem, ipsum.</div>
                  <div>
                    <Button>Button</Button>
                  </div>
                  <div>
                    <Button variant="primary">Button</Button>
                  </div>
                  <div>
                    <Button variant="primary-bright">Button</Button>
                  </div>
                </div>
              </Box>
            </Container>
          </Sidebar>
        }
        right={<Main>{children}</Main>}
      />
    </>
  )
}
