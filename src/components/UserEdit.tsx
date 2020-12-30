import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteData, getData, putData, usersUrl } from '../constants'
import { MainHeader } from './layouts/MainHeader'
import { MainContentArea } from './layouts/MainContentArea'
import { MainHeading } from './shared/Headings'
import { UserEditForm } from './UserEditForm'

type Values = {
  username: string
  email: string
  password: string
  country: string
}

export function UserEdit({ id }: { id: string }) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isDeleteing, setIsDeleteing] = useState<boolean>(false)
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

    setIsSubmitting(true)
    putData(`${usersUrl}/${id}`, data).then(() => {
      setIsSubmitting(false)
      history.push('/users')
    })
  }

  const handleDelete = () => {
    const confirm = window.confirm('Delete user?')
    if (!confirm) return

    setIsDeleteing(true)
    deleteData(`${usersUrl}/${id}`).then(() => {
      setIsDeleteing(false)
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
      <MainHeader>
        <MainHeading>Edit</MainHeading>
      </MainHeader>

      <MainContentArea>
        <UserEditForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          values={values}
          isSubmitting={isSubmitting}
          submitButtonText="Update"
          isDeleteing={isDeleteing}
          deleteButtonText="Delete"
          onDeleteClick={handleDelete}
        />
      </MainContentArea>
    </>
  )
}
