import { ComponentPropsWithoutRef } from 'react'
import styles from './FormInput.module.css'

export function FormInput(props: ComponentPropsWithoutRef<'input'> & { width?: any }) {
  return <input className={styles.base} {...props} style={{ width: props.width }} />
}
