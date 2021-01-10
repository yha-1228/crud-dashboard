import Box from '@material-ui/core/Box'
import React from 'react'

export function FormGroup({ children }: { children: React.ReactNode[] }) {
  return (
    <div>
      <Box mb="8px">{children[0]}</Box>
      <Box mb={children[2] ? '8px' : '0'}>{children[1]}</Box>
      <div>{children[2]}</div>
    </div>
  )
}
