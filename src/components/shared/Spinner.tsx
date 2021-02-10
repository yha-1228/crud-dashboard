import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { MuiThemeProvider } from '../../lib/material-ui/MuiThemeProvider'

export function Spinner() {
  return (
    <MuiThemeProvider>
      <CircularProgress size={45} thickness={3} />
    </MuiThemeProvider>
  )
}
