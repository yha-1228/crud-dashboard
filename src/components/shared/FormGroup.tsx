import { Box } from '@material-ui/core'
import React from 'react'

export function FormGroup({
  formLabel,
  formInput,
  formText,
}: {
  formLabel: React.ReactNode
  formInput: React.ReactNode
  formText?: React.ReactNode
}) {
  return (
    <div>
      <Box mb="8px">{formLabel}</Box>
      <div>{formInput}</div>
      <Box fontSize="12px">{formText}</Box>
    </div>
  )
}
