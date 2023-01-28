import React from 'react';
import { css } from '@emotion/react';

export function AppBar({
  title,
  children,
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        paddingRight: 32,
        paddingLeft: 32,
        borderBottom: '1px solid color-gray-200)',
      })}
    >
      <h1
        css={css({
          margin: 0,
          padding: 0,
          fontSize: 24,
          fontWeight: 'bold',
        })}
      >
        {title}
      </h1>
      {children}
    </div>
  );
}
