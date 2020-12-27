import React from 'react'
import classnames from 'classnames'
import { Link, LinkProps } from 'react-router-dom'
import './Button.css'

type Props = LinkProps & { size?: string; variant?: string }

export function LinkButton({ size, variant, ...other }: Props) {
  return (
    <Link
      className={classnames('Button', size && `Button--${size}`, variant && `Button--${variant}`)}
      {...other}
    />
  )
}
