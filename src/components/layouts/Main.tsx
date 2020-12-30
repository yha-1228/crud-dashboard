import React from 'react'
import { Box } from '@material-ui/core'

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box flexGrow={1} flexShrink={1} height="100vh">
      {children}
    </Box>
  )
}
