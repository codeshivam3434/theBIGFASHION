"use client"

import { useState, useEffect } from "react"

interface ScrollPosition {
  x: number
  y: number
  direction: "up" | "down" | "none"
  isScrolled: boolean
  percentage: number
}

export function useScrollPosition(threshold = 50): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: "none",
    isScrolled: false,
    percentage: 0,
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY
      const currentScrollX = window.scrollX
      const direction = currentScrollY > lastScrollY ? "down" : currentScrollY < lastScrollY ? "up" : "none"

      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      )

      const windowHeight = window.innerHeight
      const scrollableHeight = documentHeight - windowHeight

      const scrollPercentage = scrollableHeight > 0 ? Math.round((currentScrollY / scrollableHeight) * 100) : 0

      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
        direction,
        isScrolled: currentScrollY > threshold,
        percentage: scrollPercentage,
      })

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", updateScrollPosition, { passive: true })
    updateScrollPosition()

    return () => {
      window.removeEventListener("scroll", updateScrollPosition)
    }
  }, [threshold])

  return scrollPosition
}
