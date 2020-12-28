import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getData, putData, usersUrl } from '../constants'
import { UserTableForm } from './UserTableForm'

type Values = {
  username: string
  email: string
  password: string
  country: string
}

export function UserEdit({ id }: { id: string }) {
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

    const data = {
      id: Number(id),
      username: values.username,
      password: values.password,
      email: values.email,
      country: values.country,
    }

    console.log(data)

    setIsSubmitting(true)

    putData(`${usersUrl}/${id}`, data).then(() => {
      setIsSubmitting(false)
      history.push('/users')
    })
  }

  useEffect(() => {
    getData(`${usersUrl}/${id}`).then((result) => {
      setValues({
        username: result.username,
        email: result.email,
        password: result.password,
        country: result.country,
      })
    })
  }, [id])

  return (
    <>
      <h1>Edit</h1>
      <UserTableForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={values}
        isSubmitting={isSubmitting}
        submitButtonText="Update"
      />
    </>
  )
}
