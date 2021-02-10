import { css } from '@emotion/css'
import React from 'react'

export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <aside
      className={css({
        flexGrow: 0,
        flexShrink: 0,
        width: 240,
        height: '100vh',
        backgroundColor: 'var(--color-primary)',
      })}
    >
      {children}
    </aside>
  )
}
