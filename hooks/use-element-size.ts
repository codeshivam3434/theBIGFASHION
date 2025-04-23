"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

interface Size {
  width: number
  height: number
}

export function useElementSize<T extends HTMLElement = HTMLDivElement>(): [RefObject<T>, Size] {
  const ref = useRef<T>(null)
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setSize({ width, height })
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return [ref, size]
}
