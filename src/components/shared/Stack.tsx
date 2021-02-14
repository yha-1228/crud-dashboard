import { css } from '@emotion/css'

type StackProps = {
  direction?: 'vertical' | 'horizontal'
  spaceing: number
  children: React.ReactNode[]
}

export function VStack({ spaceing, children }: StackProps) {
  return (
    <div
      className={css({
        '& > *': {
          marginBottom: `${spaceing}px`,
        },
        '& > *:last-child': {
          marginBottom: 0,
        },
      })}
    >
      {children}
    </div>
  )
}

export function HStack({ spaceing, children }: StackProps) {
  return (
    <div
      className={css({
        '& > *': {
          marginRight: `${spaceing}px`,
        },
        '& > *:last-child': {
          marginRight: 0,
        },
      })}
    >
      {children}
    </div>
  )
}
