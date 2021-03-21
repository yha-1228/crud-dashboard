import { useRef } from 'react'

export function useScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  const scroll = (options?: ScrollToOptions | undefined) => {
    const element = ref.current as T
    element.scroll(options)
  }

  return {
    ref,
    scroll,
  }
}
