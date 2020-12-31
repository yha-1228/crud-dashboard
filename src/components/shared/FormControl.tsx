import { Box } from '@material-ui/core'
import React from 'react'

export function FormControl({ label, input }: { label: React.ReactNode; input: React.ReactNode }) {
  return (
    <div>
      <Box mb="8px">{label}</Box>
      <div>{input}</div>
    </div>
  )
}
