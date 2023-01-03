import { Link, LinkProps } from 'react-router-dom'
import { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'

type BaseButtonProps = {
  size?: 'small' | 'medium'
  variant?: 'natural' | 'primary' | 'primaryBright' | 'warning'
}

const createBaseButtonProps = (className: string, props: BaseButtonProps) => ({
  className,
  'data-size': props.size,
  'data-variant': props.variant,
})

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseButtonProps

export function Button({ size = 'medium', variant = 'natural', ...other }: ButtonProps) {
  return <button {...createBaseButtonProps(styles.base, { size, variant })} {...other} />
}

type LinkButtonProps = LinkProps & BaseButtonProps

export function LinkButton({ size = 'medium', variant = 'natural', ...other }: LinkButtonProps) {
  return <Link {...createBaseButtonProps(styles.base, { size, variant })} {...other} />
}
