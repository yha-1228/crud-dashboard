import { theme } from './theme';

type ValueOf<T> = T[keyof T];

/**
 * Union to Intersection
 */
type Join<U> = (U extends unknown ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export const getTheme = (
  first: keyof typeof theme,
  second: keyof Join<ValueOf<typeof theme>>
) => {
  return `var(--${first}-${second})`;
};
