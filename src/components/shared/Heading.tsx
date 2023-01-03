import { css } from '@emotion/css'
import { ComponentPropsWithoutRef } from 'react'

type MainHeadingProps = ComponentPropsWithoutRef<'h1'>

export function MainHeading({ children, ...other }: MainHeadingProps) {
  return (
    <h1 className={css({ margin: 0, padding: 0, fontSize: 24, fontWeight: 'bold' })} {...other}>
      {children}
    </h1>
  )
}
