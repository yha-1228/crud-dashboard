import React from 'react';
import { css } from '@emotion/react';

type StackProps = React.ComponentPropsWithoutRef<'div'> & {
  space: React.CSSProperties['margin'];
};

export const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ space, ...rest }, ref) => {
    if (typeof space === 'number') {
      throw new Error(`space: ${space} is invalid type.`);
    }

    return (
      <div
        style={{ '--space': space } as React.CSSProperties}
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
    if (typeof space === 'number') {
      throw new Error(`space: ${space} is invalid type.`);
    }

    return (
      <div
        style={{ '--space': space } as React.CSSProperties}
        css={css({ '& > * + *': { marginLeft: `var(--space)` } })}
        ref={ref}
        {...rest}
      />
    );
  }
);

HStack.displayName = 'HStack';
