import { css } from '@emotion/css'
import React from 'react'

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css({
        flexGrow: 1,
        flexShrink: 1,
      })}
    >
      <div
        className={css({
          height: '100vh',
          width: 'calc(100vw - 240px)',
          overflow: 'scroll',
        })}
      >
        {children}
      </div>
    </div>
  )
}
