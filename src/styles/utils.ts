export const cssProp = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
