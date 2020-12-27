import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import './Button.css'

export function LinkButton({
  to,
  children,
  size,
  variant,
  ...other
}: {
  to: string
  children: React.ReactNode
  size?: string
  variant?: string
}) {
  return (
    <Link
      to={to}
      className={classnames('Button', size && `Button--${size}`, variant && `Button--${variant}`)}
      {...other}
    >
      {children}
    </Link>
  )
}
