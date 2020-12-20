import React from 'react';
import { Helmet } from 'react-helmet';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

type Props = { title: string; children: React.ReactNode };

export function Layout({ title, children }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="flex" style={{ backgroundColor: 'red' }}>
        <Sidebar></Sidebar>
        <Main>{children}</Main>
      </div>
    </>
  );
}
