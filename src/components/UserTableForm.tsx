import React from 'react'
import { Button } from './shared/Button'
import { FiledBlock } from './shared/FiledBlock'
import { Input } from './shared/Input'
import './UserTableForm.css'

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChange: (event: React.ChangeEvent<any>) => void
  values: { username: string; email: string }
  isSubmitting: boolean
  submitButtonText: string
}

export function UserTableForm({
  onSubmit,
  onChange,
  values,
  isSubmitting,
  submitButtonText,
}: Props) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="UserTableForm__row">
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
      </div>

      <div className="UserTableForm__row">
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
      </div>

      <div>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? '送信中...' : submitButtonText}
        </Button>
      </div>
    </form>
  )
}
