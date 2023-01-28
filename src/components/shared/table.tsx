import React from 'react';
import { css } from '@emotion/react';
import { getTheme } from '../../styles/utils';

export function Table({ ...other }: React.ComponentPropsWithoutRef<'table'>) {
  return <table css={css({ width: '100%' })} {...other} />;
}

export function Thead({ ...other }: React.ComponentPropsWithoutRef<'thead'>) {
  return (
    <thead
      css={css({ borderBottom: `1px solid ${getTheme('--color-gray-100')}` })}
      {...other}
    />
  );
}

export function Tbody({ ...other }: React.ComponentPropsWithoutRef<'tbody'>) {
  return (
    <tbody
      css={css({
        '& > * + *': {
          borderTop: `1px solid ${getTheme('--color-gray-100')}`,
        },
      })}
      {...other}
    />
  );
}

export function Th({
  align,
  ...other
}: React.ComponentPropsWithoutRef<'th'> & {
  align?: 'left' | 'center' | 'right';
}) {
  return (
    <th
      css={css`
        padding: 10px 24px;
        font-size: 14px;
        color: ${getTheme('--color-gray-400')};
        white-space: nowrap;
        cursor: pointer;
        transition: color 0.2s ease-out;
        text-align: ${align};
        &:hover {
          color: ${getTheme('--color-gray-900')};
        }
      `}
      {...other}
    />
  );
}

export function Td({
  align,
  ...other
}: React.ComponentPropsWithoutRef<'th'> & {
  align?: 'left' | 'center' | 'right';
}) {
  return (
    <td
      css={css`
        padding: 10px 24px;
        font-size: 14px;
        white-space: nowrap;
        text-align: ${align};
      `}
      {...other}
    />
  );
}
