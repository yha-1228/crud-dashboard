import { css } from '@emotion/css'

type Props = {
  direction?: 'vertical' | 'horizontal'
  spaceing: number
  children: React.ReactNode[]
}

export function VStack({ spaceing, children }: Props) {
  return (
    <div
      className={css`
        & > * {
          margin-bottom: ${spaceing}px;
        }
        & > *:last-child {
          margin-bottom: 0;
        }
      `}
    >
      {children}
    </div>
  )
}

export function HStack({ spaceing, children }: Props) {
  return (
    <div
      className={css`
        & > * {
          margin-right: ${spaceing}px;
        }
        & > *:last-child {
          margin-right: 0;
        }
      `}
    >
      {children}
    </div>
  )
}
