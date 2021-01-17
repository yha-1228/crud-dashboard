import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { usersUrl } from '../../constants'
import { MainHeader } from '../Layout/MainHeader'
import { MainContentArea } from '../Layout/MainContentArea'
import { MainHeading } from '../shared/Heading'
import { UserEditForm } from './UserEditForm'
import { deleteData, getData, putData } from '../../functions'

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

    const data = { id: Number(id), ...values }

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
      const { id, ...other } = result
      setValues({ ...other })
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
