"use client"

import type React from "react"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
  fluid?: boolean
}

export function ResponsiveContainer({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  fluid = false,
  ...props
}: ResponsiveContainerProps) {
  const { breakpoint } = useBreakpoint()

  const getWidthClass = () => {
    if (fluid) return "w-full"

    // Default container widths by breakpoint
    const defaultWidths = {
      xs: "w-full px-4",
      sm: "max-w-[640px] px-4",
      md: "max-w-[768px] px-4",
      lg: "max-w-[1024px] px-4",
      xl: "max-w-[1280px] px-4",
      "2xl": "max-w-[1536px] px-4",
    }

    // Custom widths by breakpoint
    const customWidths = {
      xs: xs || defaultWidths.xs,
      sm: sm || defaultWidths.sm,
      md: md || defaultWidths.md,
      lg: lg || defaultWidths.lg,
      xl: xl || defaultWidths.xl,
      "2xl": xxl || defaultWidths["2xl"],
    }

    return customWidths[breakpoint as keyof typeof customWidths]
  }

  return (
    <div className={cn("mx-auto", getWidthClass(), className)} {...props}>
      {children}
    </div>
  )
}
