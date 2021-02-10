import React, { useEffect, useState } from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainContentArea } from '../components/Layout/MainContentArea'
import { MainHeading } from '../components/shared/Heading'
import { usersUrl } from '../constants'

export function HomePage() {
  const [state, setState] = useState(null)

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((result) => {
        setState(result)
      })
  }, [])

  return (
    <Layout title="Home">
      <MainHeader>
        <MainHeading>Home</MainHeading>
      </MainHeader>

      <div>{JSON.stringify(state)}</div>

      <MainContentArea>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis corporis
        fuga! Aspernatur minima vero corporis deleniti! Necessitatibus, eveniet ullam. Provident
        fuga reiciendis tempore porro ea vero, quidem recusandae temporibus?
      </MainContentArea>
    </Layout>
  )
}
