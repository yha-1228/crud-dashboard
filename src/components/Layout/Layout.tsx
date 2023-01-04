import React from 'react';
import { css } from '@emotion/css';
import { Helmet } from 'react-helmet-async';
import siteConfig from '../../siteConfig';
import { Navgation } from './Nav';

export function Layout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Helmet>
        <title>
          {!title ? siteConfig.title : `${siteConfig.title} - ${title}`}
        </title>
      </Helmet>

      <div className={css({ display: 'flex', height: '100vh' })}>
        <aside
          className={css({
            flexGrow: 0,
            flexShrink: 0,
            width: 240,
            height: '100vh',
            backgroundColor: 'var(--color-primary)',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              height: 64,
              paddingRight: 24,
              paddingLeft: 24,
              backgroundColor: 'var(--color-primary-dark)',
            })}
          >
            <h2
              className={css({
                margin: 0,
                padding: 0,
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
              })}
            >
              {siteConfig.title}
            </h2>
          </div>

          <div
            className={css`
              height: calc(100vh - 64px);
              padding-top: 24px;
              padding-right: 24px;
              padding-left: 24px;
              overflow-y: auto;
              overscroll-behavior-y: none;

              &::-webkit-scrollbar {
                width: 8px;
                height: 8px;
                padding-left: 4px;
              }

              &::-webkit-scrollbar-track {
                background-color: transparent;
              }

              &::-webkit-scrollbar-thumb {
                background-color: rgba(255, 255, 255, 0.2);
                border-radius: 6px;
              }
              &::-webkit-scrollbar-thumb:hover {
                background-color: rgba(255, 255, 255, 0.6);
              }
              &::-webkit-scrollbar-thumb:active {
                background-color: rgba(255, 255, 255, 0.6);
              }
            `}
          >
            <Navgation />
          </div>
        </aside>

        <div
          className={css({
            flexGrow: 1,
            flexShrink: 1,
            backgroundColor: 'var(--color-gray-50)',
          })}
        >
          <div
            className={css({
              width: 'calc(100vw - 240px)',
              height: '100vh',
              overflowY: 'auto',
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
