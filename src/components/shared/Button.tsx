import { Link, LinkProps } from 'react-router-dom'
import { ComponentPropsWithoutRef } from 'react'
import { css } from '@emotion/css'
import classnames from 'classnames'

type BaseButtonProps = {
  size?: 'small' | 'medium'
  variant?: 'natural' | 'primary'
}

const createStyle = (props: BaseButtonProps) => {
  return css({
    display: 'inline-block',
    lineHeight: 1.5,
    color: 'var(--color-gray-600)',
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: 'var(--color-gray-200)',
    border: '1px solid transparent',
    borderRadius: '0.25rem',
    outline: 'none',
    transition: 'color 0.15s ease-out, background-color 0.15s ease-out, box-shadow 0.15s ease-out',

    // size
    ...(props.size === 'small' && {
      padding: '0.2rem 0.5rem',
      fontSize: 14,
    }),

    ...(props.size === 'medium' && {
      padding: '0.375rem 0.75rem',
      fontSize: '1rem',
    }),

    // variant
    ...(props.variant === 'natural' && {
      color: 'var(--color-gray-600)',
      backgroundColor: 'var(--color-gray-200)',
      '&:hover': {
        backgroundColor: 'var(--color-gray-300)',
      },
      '&:active, &:focus': {
        boxShadow: 'box-shadow: 0 0 0 2px var(--color-gray-900)',
      },
    }),

    ...(props.variant === 'primary' && {
      color: 'white',
      backgroundColor: 'var(--color-primary)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-dark)',
      },
    }),
  })
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseButtonProps

export function Button({ size = 'medium', variant = 'natural', className, ...other }: ButtonProps) {
  return <button className={classnames(createStyle({ size, variant }), className)} {...other} />
}

type LinkButtonProps = LinkProps & BaseButtonProps

export function LinkButton({
  size = 'medium',
  variant = 'natural',
  className,
  ...other
}: LinkButtonProps) {
  return <Link className={classnames(createStyle({ size, variant }), className)} {...other} />
}
