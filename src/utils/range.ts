/**
 * create array: `[0, 1, ..., n - 1]`
 */
export const range = (n: number) => Array.from(new Array(n)).map((_, i) => i);
