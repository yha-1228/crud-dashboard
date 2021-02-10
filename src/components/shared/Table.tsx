import React from 'react'
import { css } from '@emotion/css'
import classnames from 'classnames'

export function TableContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css`
        & {
          overflow: hidden;
          background-color: white;
          border: 1px solid var(--color-gray-200);
          border-radius: 5px;
          box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
        }
      `}
    >
      {children}
    </div>
  )
}

export function Table({ ...other }: JSX.IntrinsicElements['table']) {
  return (
    <table
      className={css`
        & {
          width: 100%;
          border-collapse: collapse;
        }
      `}
      {...other}
    />
  )
}

export function Thead({ ...other }: JSX.IntrinsicElements['thead']) {
  return (
    <thead
      className={css`
        & {
          border-bottom: 1px solid var(--color-gray-100);
        }
      `}
      {...other}
    />
  )
}

export function Tbody({ ...other }: JSX.IntrinsicElements['tbody']) {
  return (
    <tbody
      className={css`
        & {
          & > * {
            border-bottom: 1px solid var(--color-gray-100);
          }
          & > *:last-child {
            border-bottom: none;
          }
        }
      `}
      {...other}
    />
  )
}

export function Th({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return (
    <th
      className={classnames(
        css`
          & {
            padding: 10px 24px;
            font-size: 14px;
            color: var(--color-gray-400);
            white-space: nowrap;
            cursor: pointer;
            transition: color 0.2s ease-out;
            text-align: ${align};
            &:hover {
              color: var(--color-primary);
            }
          }
        `
      )}
      {...other}
    />
  )
}

export function Td({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return (
    <td
      className={classnames(
        css`
          & {
            padding: 10px 24px;
            font-size: 14px;
            white-space: nowrap;
            text-align: ${align};
          }
        `
      )}
      {...other}
    />
  )
}
