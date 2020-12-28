import { ComponentPropsWithoutRef } from 'react'
import './Headings.css'

type Props = ComponentPropsWithoutRef<'h1'> & { children: React.ReactNode }

export function HeadingLv1({ children, ...other }: Props) {
  return (
    <h1 className="HeadingLv1" {...other}>
      {children}
    </h1>
  )
}
