import Box from '@material-ui/core/Box'
import React from 'react'

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
