import React from 'react'
import { Box } from '@material-ui/core'

export function MainHeader({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="64px"
      pr="32px"
      pl="32px"
      bgcolor="white"
    >
      {children}
    </Box>
  )
}
