import { Box } from '@material-ui/core'
import React from 'react'

export function FormGroup({ children }: { children: React.ReactNode[] }) {
  return (
    <div>
      {/* label element */}
      <Box mb="8px">{children[0]}</Box>
      {/* input element */}
      <div>{children[1]}</div>
      {/* fomt text element */}
      <Box fontSize="12px">{children[2]}</Box>
    </div>
  )
}

// export function FormGroup({
//   formLabel,
//   formInput,
//   formText,
// }: {
//   formLabel: React.ReactNode
//   formInput: React.ReactNode
//   formText?: React.ReactNode
// }) {
//   return (
//     <div>
//       <Box mb="8px">{formLabel}</Box>
//       <div>{formInput}</div>
//       <Box fontSize="12px">{formText}</Box>
//     </div>
//   )
// }
