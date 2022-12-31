import { useRef } from 'react'

export function useScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  const scroll = ({
    top,
    left,
    behavior,
  }: {
    top?: number
    left?: number
    behavior?: 'smooth' | 'auto'
  }) => {
    const element = ref.current as T
    element.scroll({ top, left, behavior })
  }

  return {
    ref,
    scroll,
  }
}
