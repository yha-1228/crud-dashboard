import React from 'react';
import { css } from '@emotion/react';

type StackProps = React.ComponentPropsWithoutRef<'div'> & {
  space: number;
};

export const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ space, ...rest }, ref) => {
    return (
      <div
        style={{ '--space': `${space}px` } as React.CSSProperties}
        css={css({ '& > * + *': { marginTop: `var(--space)` } })}
        ref={ref}
        {...rest}
      />
    );
  }
);

VStack.displayName = 'VStack';

export const HStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ space, ...rest }, ref) => {
    return (
      <div
        style={{ '--space': `${space}px` } as React.CSSProperties}
        css={css({ '& > * + *': { marginLeft: `var(--space)` } })}
        ref={ref}
        {...rest}
      />
    );
  }
);

HStack.displayName = 'HStack';
