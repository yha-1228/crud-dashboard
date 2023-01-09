import { theme } from './theme';

type ValueOf<T> = T[keyof T];

export const getTheme = (
  first: keyof typeof theme,
  second: keyof ValueOf<typeof theme>
) => {
  return `var(--${first}-${second})`;
};
