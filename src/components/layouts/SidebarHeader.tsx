import React from 'react'
import { Box } from '@material-ui/core'

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      height="64px"
      pr="24px"
      pl="24px"
      bgcolor="var(--color-primary-light)"
    >
      {children}
    </Box>
  )
}
