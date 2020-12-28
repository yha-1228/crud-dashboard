import React from 'react';
import './Container.css';

type Props = { children: React.ReactNode };

export function Container({ children }: Props) {
  return <div className="Container">{children}</div>;
}
