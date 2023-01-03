import { useEffect, useRef } from 'react'

export function useRefState<T>(initialValue: T) {
  const ref = useRef<T>(initialValue)

  useEffect(() => {
    ref.current = initialValue
  }, [initialValue])

  return ref.current
}
