import React from 'react'
import classnames from 'classnames'
import { Link, LinkProps } from 'react-router-dom'
import { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  size?: 'small'
  variant?: 'primary' | 'primaryBright' | 'warning'
}

export function Button({ size, variant, ...other }: ButtonProps) {
  return (
    <button
      className={classnames(styles.base, size && styles[size], variant && styles[variant])}
      {...other}
    />
  )
}

type LinkButtonProps = LinkProps & {
  size?: 'small'
  variant?: 'primary' | 'primaryBright' | 'warning'
}

export function LinkButton({ size, variant, ...other }: LinkButtonProps) {
  return (
    <Link
      className={classnames(styles.base, size && styles[size], variant && styles[variant])}
      {...other}
    />
  )
}
