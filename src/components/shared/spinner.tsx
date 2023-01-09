import CircularProgress from '@mui/material/CircularProgress';
import { getTheme } from '../../styles/utils';

export function Spinner() {
  return (
    <CircularProgress
      size={35}
      thickness={4}
      sx={{ color: getTheme('--color-primary') }}
    />
  );
}
