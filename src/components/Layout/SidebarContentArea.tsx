import { css } from '@emotion/css'

export function SidebarContentArea({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css`
        & {
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
        }
      `}
    >
      {children}
    </div>
  )
}
