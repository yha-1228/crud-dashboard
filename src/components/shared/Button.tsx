import classnames from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import './Button.css'

type Props = ComponentPropsWithoutRef<'button'> & {
  size?: string
  variant?: string
  href?: string
}

export function Button({ size, variant, href, ...other }: Props) {
  return (
    <button
      role="button"
      className={classnames('Button', size && `Button--${size}`, variant && `Button--${variant}`)}
      {...other}
    />
  )
}
