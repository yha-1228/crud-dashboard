import React from 'react'
import { MainHeader } from '../components/layouts/Headers'
import { Layout } from '../components/layouts/Layout'
import { MainContentArea } from '../components/layouts/MainContentArea'
import { MainHeading } from '../components/shared/Headings'

export function HomePage() {
  return (
    <Layout title="Home">
      <MainHeader>
        <MainHeading>Home</MainHeading>
      </MainHeader>

      <MainContentArea>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas minima ad mollitia
          odio quam excepturi minus dolores repudiandae eius, sint porro non autem iure dicta
          praesentium recusandae vero. Beatae?
        </p>
      </MainContentArea>
    </Layout>
  )
}
