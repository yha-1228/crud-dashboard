import { ComponentPropsWithoutRef } from 'react'
import './Headings.css'

export function HeadingLv1(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1 className="HeadingLv1" {...props} />
}
