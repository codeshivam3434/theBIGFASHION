"use client"

import type React from "react"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { cn } from "@/lib/utils"

interface ResponsiveTextProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  children: React.ReactNode
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}

export function ResponsiveText({
  as: Component = "div",
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  ...props
}: ResponsiveTextProps) {
  const { breakpoint } = useBreakpoint()

  // Get the appropriate font size class based on the current breakpoint
  const getFontSizeClass = () => {
    const sizes = {
      xs: xs || "text-sm",
      sm: sm || xs || "text-base",
      md: md || sm || xs || "text-lg",
      lg: lg || md || sm || xs || "text-xl",
      xl: xl || lg || md || sm || xs || "text-2xl",
      "2xl": xxl || xl || lg || md || sm || xs || "text-3xl",
    }

    return sizes[breakpoint as keyof typeof sizes]
  }

  return (
    <Component className={cn(getFontSizeClass(), className)} {...props}>
      {children}
    </Component>
  )
}
