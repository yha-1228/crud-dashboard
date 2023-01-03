import { css } from '@emotion/css'
import React from 'react'

export function MainHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        paddingRight: 32,
        paddingLeft: 32,
        borderBottom: '1px solid var(--color-gray-200)',
      })}
    >
      {children}
    </div>
  )
}
