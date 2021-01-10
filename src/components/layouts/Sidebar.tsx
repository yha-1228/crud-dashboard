import Box from '@material-ui/core/Box'
import React from 'react'

export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      component="aside"
      flexGrow={0}
      flexShrink={0}
      width={240}
      height="100vh"
      bgcolor="var(--color-primary)"
    >
      {children}
    </Box>
  )
}
