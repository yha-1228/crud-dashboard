import { Box } from '@material-ui/core'
import React from 'react'
import { Button, LinkButton } from './shared/Button'
import { FormGroup } from './shared/FormGroup'
import { FormInput } from './shared/FormInput'

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChange: (event: React.ChangeEvent<any>) => void
  values: { username: string; email: string; password: string; country: string }
  isSubmitting: boolean
  submitButtonText: string
  isDeleteing: boolean
  deleteButtonText: string
  onDeleteClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function UserEditForm({
  onSubmit,
  onChange,
  values,
  isSubmitting,
  submitButtonText,
  isDeleteing,
  deleteButtonText,
  onDeleteClick,
}: Props) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <Box mb="24px">
        <FormGroup
          formLabel={
            <label htmlFor="username">
              <h3>Username</h3>
            </label>
          }
          formInput={
            <FormInput
              type="text"
              name="username"
              id="username"
              onChange={onChange}
              value={values.username}
              width={250}
            />
          }
        />
      </Box>

      <Box mb="24px">
        <FormGroup
          formLabel={
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
          }
          formInput={
            <FormInput
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              value={values.email}
              width={250}
            />
          }
        />
      </Box>

      <Box mb="24px">
        <FormGroup
          formLabel={
            <label htmlFor="password">
              <h3>Password</h3>
            </label>
          }
          formInput={
            <FormInput
              type="password"
              name="password"
              id="password"
              onChange={onChange}
              value={values.password}
              width={250}
            />
          }
        />
      </Box>

      <Box mb="24px">
        <FormGroup
          formLabel={
            <label htmlFor="country">
              <h3>Country</h3>
            </label>
          }
          formInput={
            <FormInput
              type="text"
              name="country"
              id="country"
              onChange={onChange}
              value={values.country}
              width={250}
            />
          }
        />
      </Box>

      <Box mb="24px">
        <Box display="inline-block" pr="16px">
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : submitButtonText}
          </Button>
        </Box>

        <Box display="inline-block" pr="16px">
          <Button variant="warning" type="button" onClick={onDeleteClick} disabled={isDeleteing}>
            {isDeleteing ? 'Loading...' : deleteButtonText}
          </Button>
        </Box>

        <Box display="inline-block" pr="16px">
          <LinkButton to="/users">Cancel</LinkButton>
        </Box>
      </Box>
    </form>
  )
}
