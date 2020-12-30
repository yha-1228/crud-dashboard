import { Box } from '@material-ui/core'
import React from 'react'
import { Button } from './shared/Button'
import { FiledBlock } from './shared/FiledBlock'
import { Input } from './shared/Input'
import { LinkButton } from './shared/LinkButton'

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChange: (event: React.ChangeEvent<any>) => void
  values: { username: string; email: string; password: string; country: string }
  isSubmitting: boolean
  submitButtonText: string
}

export function UserCreateForm({
  onSubmit,
  onChange,
  values,
  isSubmitting,
  submitButtonText,
}: Props) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <Box mb="24px">
        <FiledBlock
          label={
            <label htmlFor="username">
              <h3>Username</h3>
            </label>
          }
          input={
            <Input
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
        <FiledBlock
          label={
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
          }
          input={
            <Input
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
        <FiledBlock
          label={
            <label htmlFor="password">
              <h3>Password</h3>
            </label>
          }
          input={
            <Input
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
        <FiledBlock
          label={
            <label htmlFor="country">
              <h3>Country</h3>
            </label>
          }
          input={
            <Input
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
          <LinkButton to="/users" variant="secondary">
            Cancel
          </LinkButton>
        </Box>
      </Box>
    </form>
  )
}
