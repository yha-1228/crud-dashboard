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
      bgcolor="var(--color-gray-50)"
      borderBottom="1px solid var(--color-gray-200)"
    >
      {children}
    </Box>
  )
}
