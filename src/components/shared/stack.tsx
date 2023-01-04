import React from 'react';
import { css } from '@emotion/css';
import { cn } from '../../utils/cn';

type StackProps = React.ComponentPropsWithoutRef<'div'> & {
  space: number;
};

export const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ space, className, ...rest }, ref) => {
    return (
      <div
        className={cn(
          css({ '& > * + *': { marginTop: `${space}px` } }, className)
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);

VStack.displayName = 'VStack';

export const HStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ space, className, ...rest }, ref) => {
    return (
      <div
        className={cn(
          css({ '& > * + *': { marginLeft: `${space}px` } }, className)
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);

HStack.displayName = 'HStack';
