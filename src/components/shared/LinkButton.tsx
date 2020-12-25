import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './LinkButton.css';

export function LinkButton({
  to,
  children,
  size,
  variant,
  ...other
}: {
  to: string;
  children: React.ReactNode;
  size?: string;
  variant?: string;
}) {
  return (
    <Link
      to={to}
      className={classnames(
        'LinkButton',
        size && `LinkButton--${size}`,
        variant && `LinkButton--${variant}`
      )}
      {...other}
    >
      {children}
    </Link>
  );
}
