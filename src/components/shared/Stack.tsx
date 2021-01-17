import { css } from '@emotion/css'

type Props = {
  direction?: 'vertical' | 'horizontal'
  spaceing: number
  children: React.ReactNode[]
}

export function Stack({ direction, spaceing, children }: Props) {
  const style = direction === "horizontal" ? 
  
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
