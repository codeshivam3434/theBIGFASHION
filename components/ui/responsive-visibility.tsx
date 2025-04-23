"use client"

import type React from "react"
import { useBreakpoint } from "@/hooks/use-breakpoint"

interface ResponsiveVisibilityProps {
  children: React.ReactNode
  hiddenOn?: Array<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">
  visibleOn?: Array<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">
}

export function ResponsiveVisibility({ children, hiddenOn = [], visibleOn = [] }: ResponsiveVisibilityProps) {
  const { breakpoint } = useBreakpoint()

  // If visibleOn is provided, only show on those breakpoints
  if (visibleOn.length > 0) {
    return visibleOn.includes(breakpoint as any) ? <>{children}</> : null
  }

  // If hiddenOn is provided, hide on those breakpoints
  if (hiddenOn.length > 0) {
    return hiddenOn.includes(breakpoint as any) ? null : <>{children}</>
  }

  // Default: always visible
  return <>{children}</>
}
