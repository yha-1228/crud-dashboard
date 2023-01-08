import React from 'react';
import { css } from '@emotion/react';

type StackProps = React.ComponentPropsWithoutRef<'div'> & {
  space: number;
};

export const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ space, ...rest }, ref) => {
    return (
      <div
        css={css({ '& > * + *': { marginTop: `${space}px` } })}
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
        css={css({ '& > * + *': { marginLeft: `${space}px` } })}
        ref={ref}
        {...rest}
      />
    );
  }
);

HStack.displayName = 'HStack';
