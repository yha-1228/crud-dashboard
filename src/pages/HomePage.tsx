import React, { useEffect, useState } from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainContentArea } from '../components/Layout/MainContentArea'
import { MainHeading } from '../components/shared/Heading'
import { usersUrl } from '../constants'

export function HomePage() {
  const [users, setUsers] = useState(null)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((result) => {
        setUsers(result)
      })
  }, [])

  return (
    <Layout title="Home">
      <MainHeader>
        <MainHeading>Home</MainHeading>
      </MainHeader>

      <MainContentArea>
        <div>{JSON.stringify(users)}</div>
      </MainContentArea>
    </Layout>
  )
}
