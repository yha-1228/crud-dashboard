import CircularProgress from '@mui/material/CircularProgress';

export function Spinner() {
  return (
    <CircularProgress
      size={35}
      thickness={4}
      sx={{ color: 'var(--color-primary)' }}
    />
  );
}
