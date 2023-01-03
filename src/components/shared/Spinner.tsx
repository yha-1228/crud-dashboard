import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: 'var(--color-primary)',
  },
});

export function Spinner() {
  const classes = useStyles();

  return <CircularProgress size={35} thickness={4} className={classes.root} />;
}
