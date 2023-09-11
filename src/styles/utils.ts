import type { theme } from './_theme';

export const getTheme = (key: keyof typeof theme) => `var(${key})`;
