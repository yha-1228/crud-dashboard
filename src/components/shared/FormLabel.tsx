import { ComponentPropsWithoutRef } from 'react'

export function FormLabel({
  children,
  ...other
}: ComponentPropsWithoutRef<'label'> & { children: React.ReactNode }) {
  return (
    <label {...other}>
      <h3>{children}</h3>
    </label>
  )
}
