import { ComponentPropsWithoutRef } from 'react'
import './Headings.css'

type Props = ComponentPropsWithoutRef<'h1'> & { children: React.ReactNode }

export function MainHeading({ children, ...other }: Props) {
  return (
    <h1 className="MainHeading" {...other}>
      {children}
    </h1>
  )
}

export function SidebarHeading({ children, ...other }: Props) {
  return (
    <h2 className="SidebarHeading" {...other}>
      {children}
    </h2>
  )
}
