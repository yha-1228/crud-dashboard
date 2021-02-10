import { css } from '@emotion/css'

export function MainContentArea({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css`
        & {
          height: calc(100vh - 64px);
          padding-top: 24px;
          padding-right: 32px;
          padding-bottom: 16px;
          padding-left: 32px;
          overflow-y: auto;
          overscroll-behavior-y: none;
          background-color: var(--color-gray-50);
          border-top: 1px solid var(--color-gray-200);
        }
      `}
    >
      {children}
    </div>
  )
}
