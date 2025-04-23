"use client"

import { useState, useEffect } from "react"

interface WindowSize {
  width: number
  height: number
  aspectRatio: number
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    aspectRatio: 0,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const width = window.innerWidth
      const height = window.innerHeight

      setWindowSize({
        width,
        height,
        aspectRatio: width / height,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
