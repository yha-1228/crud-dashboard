import { ComponentPropsWithoutRef } from 'react'
import './Input.css'

export function Input(props: ComponentPropsWithoutRef<'input'> & { width?: any }) {
  return <input className="Input" {...props} style={{ width: props.width }} />
}
