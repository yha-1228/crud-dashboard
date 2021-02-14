import { ComponentPropsWithoutRef } from 'react'
import { css } from '@emotion/css'

type SidebarHeadingProps = ComponentPropsWithoutRef<'h2'> & { children: React.ReactNode }

export default function SidebarHeading({ children, ...other }: SidebarHeadingProps) {
  return (
    <h2
      className={css({ margin: 0, padding: 0, fontSize: 24, fontWeight: 'bold', color: 'white' })}
      {...other}
    >
      {children}
    </h2>
  )
}
