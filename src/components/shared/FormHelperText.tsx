import Box from '@material-ui/core/Box'
import React from 'react'

export function FormHelperText({ children }: { children: React.ReactNode }) {
  return <Box fontSize="14px">{children}</Box>
}
