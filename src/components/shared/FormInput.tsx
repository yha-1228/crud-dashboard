import { ComponentPropsWithoutRef } from 'react'
import styles from './FormInput.module.css'

export function FormInput({
  width,
  ...other
}: ComponentPropsWithoutRef<'input'> & { width?: any }) {
  return <input className={styles.base} {...other} style={{ width: width }} />
}
