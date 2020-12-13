import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Layout({ title, children }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div>{children}</div>
    </>
  );
}
