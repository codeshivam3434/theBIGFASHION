"use client"

import { useState, useEffect } from "react"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

const breakpointValues = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs")

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width >= breakpointValues["2xl"]) {
        setBreakpoint("2xl")
      } else if (width >= breakpointValues.xl) {
        setBreakpoint("xl")
      } else if (width >= breakpointValues.lg) {
        setBreakpoint("lg")
      } else if (width >= breakpointValues.md) {
        setBreakpoint("md")
      } else if (width >= breakpointValues.sm) {
        setBreakpoint("sm")
      } else {
        setBreakpoint("xs")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return {
    breakpoint,
    isXs: breakpoint === "xs",
    isSm: breakpoint === "sm",
    isMd: breakpoint === "md",
    isLg: breakpoint === "lg",
    isXl: breakpoint === "xl",
    is2Xl: breakpoint === "2xl",
    isSmDown: ["xs", "sm"].includes(breakpoint),
    isMdDown: ["xs", "sm", "md"].includes(breakpoint),
    isLgDown: ["xs", "sm", "md", "lg"].includes(breakpoint),
    isXlDown: ["xs", "sm", "md", "lg", "xl"].includes(breakpoint),
    isSmUp: ["sm", "md", "lg", "xl", "2xl"].includes(breakpoint),
    isMdUp: ["md", "lg", "xl", "2xl"].includes(breakpoint),
    isLgUp: ["lg", "xl", "2xl"].includes(breakpoint),
    isXlUp: ["xl", "2xl"].includes(breakpoint),
  }
}
