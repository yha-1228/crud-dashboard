import React from 'react';
import { css } from '@emotion/css';
import { cn } from '../../utils/cn';

export function Table({
  className,
  ...other
}: React.ComponentPropsWithoutRef<'table'>) {
  return <table className={cn(css({ width: '100%' }), className)} {...other} />;
}

export function Thead({
  className,
  ...other
}: React.ComponentPropsWithoutRef<'thead'>) {
  return (
    <thead
      className={cn(
        css({ borderBottom: '1px solid var(--color-gray-100)' }),
        className
      )}
      {...other}
    />
  );
}

export function Tbody({
  className,
  ...other
}: React.ComponentPropsWithoutRef<'tbody'>) {
  return (
    <tbody
      className={cn(
        css({
          '& > * + *': {
            borderTop: '1px solid var(--color-gray-100)',
          },
        }),
        className
      )}
      {...other}
    />
  );
}

export function Th({
  align,
  className,
  ...other
}: React.ComponentPropsWithoutRef<'th'> & {
  align?: 'left' | 'center' | 'right';
}) {
  return (
    <th
      className={cn(
        css`
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
        `,
        className
      )}
      {...other}
    />
  );
}

export function Td({
  align,
  className,
  ...other
}: React.ComponentPropsWithoutRef<'th'> & {
  align?: 'left' | 'center' | 'right';
}) {
  return (
    <td
      className={cn(
        css`
          padding: 10px 24px;
          font-size: 14px;
          white-space: nowrap;
          text-align: ${align};
        `,
        className
      )}
      {...other}
    />
  );
}
