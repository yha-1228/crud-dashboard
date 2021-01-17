import Box from '@material-ui/core/Box'
import React from 'react'

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box flexGrow={1} flexShrink={1} height="100vh">
      {children}
    </Box>
  )
}
