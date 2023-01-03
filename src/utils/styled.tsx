import React from 'react';
import { cn } from './cn';

type Meta = {
  displayName?: string;
};

export const styledDivFactory = (className: string, meta?: Meta) => {
  const Component = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithRef<'div'>
  >(({ className: propClassName, ...rest }, ref) => {
    return <div className={cn(className, propClassName)} {...rest} ref={ref} />;
  });

  if (meta?.displayName) {
    Component.displayName = meta?.displayName;
  }

  return Component;
};
