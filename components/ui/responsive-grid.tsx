"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  gap?: number | string
  rowGap?: number | string
  columnGap?: number | string
  autoFit?: boolean
  minWidth?: string
  maxWidth?: string
}

export function ResponsiveGrid({
  children,
  className,
  xs = 1,
  sm,
  md,
  lg,
  xl,
  xxl,
  gap = 4,
  rowGap,
  columnGap,
  autoFit = false,
  minWidth = "250px",
  maxWidth = "1fr",
  ...props
}: ResponsiveGridProps) {
  // Convert numeric gap to string with rem units
  const getGapValue = (value: number | string | undefined) => {
    if (value === undefined) return undefined
    return typeof value === "number" ? `${value * 0.25}rem` : value
  }

  const gapValue = getGapValue(gap)
  const rowGapValue = getGapValue(rowGap)
  const columnGapValue = getGapValue(columnGap)

  const style: React.CSSProperties = {
    display: "grid",
    gap: gapValue,
    rowGap: rowGapValue,
    columnGap: columnGapValue,
  }

  if (autoFit) {
    style.gridTemplateColumns = `repeat(auto-fit, minmax(${minWidth}, ${maxWidth}))`
  } else {
    style.gridTemplateColumns = `repeat(${xs}, 1fr)`
  }

  // Add responsive grid columns using CSS media queries
  const responsiveStyles = !autoFit
    ? `
    @media (min-width: 640px) {
      grid-template-columns: repeat(${sm || xs}, 1fr);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(${md || sm || xs}, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(${lg || md || sm || xs}, 1fr);
    }
    @media (min-width: 1280px) {
      grid-template-columns: repeat(${xl || lg || md || sm || xs}, 1fr);
    }
    @media (min-width: 1536px) {
      grid-template-columns: repeat(${xxl || xl || lg || md || sm || xs}, 1fr);
    }
  `
    : ""

  return (
    <>
      {!autoFit && (
        <style jsx global>
          {responsiveStyles}
        </style>
      )}
      <div className={cn(className)} style={style} {...props}>
        {children}
      </div>
    </>
  )
}
