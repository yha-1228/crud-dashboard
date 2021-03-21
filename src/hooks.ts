import { useCallback, useRef } from 'react'

export function useScrollToTop() {
  const ref = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    const element = ref.current as HTMLDivElement
    element.scrollTo(0, 0)
  }

  // const st = useCallback(())

  return { ref, scrollToTop }
}
