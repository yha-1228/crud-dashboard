import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { usersUrl } from '../../constants'
import { MainHeader } from '../Layout/MainHeader'
import { MainContentArea } from '../Layout/MainContentArea'
import { MainHeading } from '../shared/Heading'
import { UserCreateForm } from './UserCreateForm'
import { postData } from '../../functions'

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

    const data = { ...values }

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
