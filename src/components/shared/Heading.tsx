import { css } from '@emotion/css'
import { ComponentPropsWithoutRef } from 'react'

type MainHeadingProps = ComponentPropsWithoutRef<'h1'> & { children: React.ReactNode }

export function MainHeading({ children, ...other }: MainHeadingProps) {
  return (
    <h1
      className={css`
        & {
          padding: 0;
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
      `}
      {...other}
    >
      {children}
    </h1>
  )
}

type SidebarHeadingProps = ComponentPropsWithoutRef<'h2'> & { children: React.ReactNode }

export function SidebarHeading({ children, ...other }: SidebarHeadingProps) {
  return (
    <h2
      className={css`
        & {
          padding: 0;
          margin: 0;
          font-size: 24px;
          font-weight: bold;
          color: white;
        }
      `}
      {...other}
    >
      {children}
    </h2>
  )
}
