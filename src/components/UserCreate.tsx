import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postData, usersUrl } from '../constants'
import { MainHeader } from './layouts/MainHeader'
import { MainContentArea } from './layouts/MainContentArea'
import { MainHeading } from './shared/Headings'
import { UserCreateForm } from './UserCreateForm'

type Values = {
  username: string
  email: string
  password: string
  country: string
}

export function UserCreate() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [values, setValues] = useState<Values>({
    username: '',
    email: '',
    password: '',
    country: '',
  })
  const history = useHistory()

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = { username: values.username, email: values.email }

    setIsSubmitting(true)

    postData(usersUrl, data).then(() => {
      setIsSubmitting(false)
      history.push('/users')
    })
  }

  return (
    <>
      <MainHeader>
        <MainHeading>Add</MainHeading>
      </MainHeader>

      <MainContentArea>
        <UserCreateForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          values={values}
          isSubmitting={isSubmitting}
          submitButtonText="Add"
        />
      </MainContentArea>
    </>
  )
}
