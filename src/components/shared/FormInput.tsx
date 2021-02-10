import { css } from '@emotion/css'
import { ComponentPropsWithoutRef } from 'react'

export function Input({ width, ...other }: ComponentPropsWithoutRef<'input'> & { width?: any }) {
  return (
    <input
      className={css`
        & {
          padding: 0 8px;
          line-height: 32px;
          background-color: var(--color-gray-200);
          border: 2px solid transparent;
          border-radius: 3px;
          outline: none;
          transition: border 0.2s ease-out;
          -webkit-appearance: none;

          &:hover,
          &:active {
            border: 2px solid var(--color-gray-300);
          }

          &:focus {
            border: 2px solid var(--color-primary);
          }
        }
      `}
      {...other}
      style={{ width: width }}
    />
  )
}
