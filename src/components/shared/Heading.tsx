import { css } from '@emotion/css'
import { ComponentPropsWithoutRef } from 'react'

type MainHeadingProps = ComponentPropsWithoutRef<'h1'> & { children: React.ReactNode }

export function MainHeading({ children, ...other }: MainHeadingProps) {
  return (
    <h1 className={css({ margin: 0, padding: 0, fontSize: 24, fontWeight: 'bold' })} {...other}>
      {children}
    </h1>
  )
}

type SidebarHeadingProps = ComponentPropsWithoutRef<'h2'> & { children: React.ReactNode }

export function SidebarHeading({ children, ...other }: SidebarHeadingProps) {
  return (
    <h2
      className={css({ margin: 0, padding: 0, fontSize: 24, fontWeight: 'bold', color: 'white' })}
      {...other}
    >
      {children}
    </h2>
  )
}
