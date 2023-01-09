import { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';
import { Link, LinkProps } from 'react-router-dom';
import { getTheme } from '../../styles/utils';

type BaseButtonProps = {
  size?: 'small' | 'medium';
  variant?: 'natural' | 'primary';
};

const createStyle = (props: BaseButtonProps) => {
  const { size, variant } = props;

  return css({
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: 1.5,
    color: getTheme('--color-gray-600'),
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: getTheme('--color-gray-200'),
    border: '1px solid transparent',
    borderRadius: '0.25rem',
    outline: 'none',
    transition:
      'color 0.15s ease-out, background-color 0.15s ease-out, box-shadow 0.15s ease-out',

    // size
    ...(size === 'small' && {
      padding: '0.2rem 0.5rem',
      fontSize: 14,
    }),

    ...(size === 'medium' && {
      padding: '0.375rem 0.75rem',
      fontSize: '1rem',
    }),

    // variant
    ...(variant === 'natural' && {
      color: getTheme('--color-gray-600'),
      backgroundColor: getTheme('--color-gray-200'),
      '&:hover': {
        backgroundColor: getTheme('--color-gray-300'),
      },
      '&:active, &:focus': {
        boxShadow: 'box-shadow: 0 0 0 2px var(--color-gray-900)',
      },
    }),

    ...(variant === 'primary' && {
      color: 'white',
      backgroundColor: getTheme('--color-primary'),
      '&:hover': {
        backgroundColor: getTheme('--color-primary-dark'),
      },
    }),
  });
};

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseButtonProps;

export function Button({
  size = 'medium',
  variant = 'natural',
  ...other
}: ButtonProps) {
  return <button css={createStyle({ size, variant })} {...other} />;
}

type LinkButtonProps = LinkProps & BaseButtonProps;

export function LinkButton({
  size = 'medium',
  variant = 'natural',
  ...other
}: LinkButtonProps) {
  return <Link css={createStyle({ size, variant })} {...other} />;
}
