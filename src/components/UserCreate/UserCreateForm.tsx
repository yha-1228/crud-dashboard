import Box from '@material-ui/core/Box'
import React from 'react'
import { Button, LinkButton } from '../shared/Button'
import { FormGroup } from '../shared/FormGroup'
import { Input } from '../shared/FormInput'
import { FormLabel } from '../shared/FormLabel'

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
        <FormGroup>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            type="text"
            name="username"
            id="username"
            onChange={onChange}
            value={values.username}
            width={250}
          />
        </FormGroup>
      </Box>

      <Box mb="24px">
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            value={values.email}
            width={250}
          />
        </FormGroup>
      </Box>

      <Box mb="24px">
        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={onChange}
            value={values.password}
            width={250}
          />
        </FormGroup>
      </Box>

      <Box mb="24px">
        <FormGroup>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Input
            type="text"
            name="country"
            id="country"
            onChange={onChange}
            value={values.country}
            width={250}
          />
        </FormGroup>
      </Box>

      <Box mb="24px">
        <Box display="inline-block" pr="16px">
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : submitButtonText}
          </Button>
        </Box>

        <Box display="inline-block" pr="16px">
          <LinkButton to="/users">Cancel</LinkButton>
        </Box>
      </Box>
    </form>
  )
}
