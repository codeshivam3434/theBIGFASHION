"use client"

import type React from "react"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { cn } from "@/lib/utils"

interface ResponsiveStackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse"
  switchAt?: "sm" | "md" | "lg" | "xl" | "2xl" | "never"
  switchTo?: "row" | "column" | "row-reverse" | "column-reverse"
  spacing?: number | string
  align?: "start" | "center" | "end" | "stretch" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: boolean
}

export function ResponsiveStack({
  children,
  className,
  direction = "column",
  switchAt = "md",
  switchTo = "row",
  spacing = 4,
  align = "stretch",
  justify = "start",
  wrap = false,
  ...props
}: ResponsiveStackProps) {
  const { breakpoint } = useBreakpoint()
  const breakpoints = ["xs", "sm", "md", "lg", "xl", "2xl"]

  // Determine if we should switch direction based on current breakpoint
  const shouldSwitch = () => {
    if (switchAt === "never") return false

    const switchAtIndex = breakpoints.indexOf(switchAt)
    const currentIndex = breakpoints.indexOf(breakpoint)

    return currentIndex >= switchAtIndex
  }

  // Get the current direction
  const currentDirection = shouldSwitch() ? switchTo : direction

  // Convert direction to flex direction class
  const getFlexDirectionClass = (dir: string) => {
    switch (dir) {
      case "row":
        return "flex-row"
      case "column":
        return "flex-col"
      case "row-reverse":
        return "flex-row-reverse"
      case "column-reverse":
        return "flex-col-reverse"
      default:
        return "flex-col"
    }
  }

  // Convert align to align items class
  const getAlignClass = (alignValue: string) => {
    switch (alignValue) {
      case "start":
        return "items-start"
      case "center":
        return "items-center"
      case "end":
        return "items-end"
      case "stretch":
        return "items-stretch"
      case "baseline":
        return "items-baseline"
      default:
        return "items-stretch"
    }
  }

  // Convert justify to justify content class
  const getJustifyClass = (justifyValue: string) => {
    switch (justifyValue) {
      case "start":
        return "justify-start"
      case "center":
        return "justify-center"
      case "end":
        return "justify-end"
      case "between":
        return "justify-between"
      case "around":
        return "justify-around"
      case "evenly":
        return "justify-evenly"
      default:
        return "justify-start"
    }
  }

  // Convert spacing to gap class
  const getSpacingClass = (space: number | string) => {
    if (typeof space === "number") {
      return `gap-${space}`
    }
    return `gap-[${space}]`
  }

  return (
    <div
      className={cn(
        "flex",
        getFlexDirectionClass(currentDirection),
        getAlignClass(align),
        getJustifyClass(justify),
        getSpacingClass(spacing),
        wrap ? "flex-wrap" : "flex-nowrap",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
