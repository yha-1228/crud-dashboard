import { css } from '@emotion/react';
import { theme } from './theme';

export const vars = css`
  :root {
    --color-gray-50: ${theme.color['gray-50']};
    --color-gray-100: ${theme.color['gray-100']};
    --color-gray-200: ${theme.color['gray-200']};
    --color-gray-300: ${theme.color['gray-300']};
    --color-gray-400: ${theme.color['gray-400']};
    --color-gray-500: ${theme.color['gray-500']};
    --color-gray-600: ${theme.color['gray-600']};
    --color-gray-700: ${theme.color['gray-700']};
    --color-gray-800: ${theme.color['gray-800']};
    --color-gray-900: ${theme.color['gray-900']};
    --color-primary-lighter: ${theme.color['primary-lighter']};
    --color-primary-light: ${theme.color['primary-light']};
    --color-primary: ${theme.color.primary};
    --color-primary-dark: ${theme.color['primary-dark']};
  }
`;
