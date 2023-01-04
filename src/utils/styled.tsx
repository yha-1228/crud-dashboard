import React from 'react';
import { CSSObject, css } from '@emotion/css';
import { cn } from './cn';

const styledDivFactory = (displayName: string, cssObject: CSSObject) => {
  const Component = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithRef<'div'>
  >(({ className: propClassName, ...rest }, ref) => {
    return (
      <div className={cn(css(cssObject), propClassName)} {...rest} ref={ref} />
    );
  });

  Component.displayName = displayName;

  return Component;
};

export const styled = {
  div: styledDivFactory,
};
