"use client"

import { useState, useEffect } from "react"
import { EnhancedImage } from "./enhanced-image"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  mobileSrc?: string
  tabletSrc?: string
  desktopSrc?: string
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  quality?: "low" | "medium" | "high" | "auto" | number
  fill?: boolean
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  objectPosition?: string
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
  loading?: "eager" | "lazy"
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
  containerClassName?: string
}

export function ResponsiveImage({
  src,
  alt,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  width,
  height,
  sizes = "100vw",
  priority = false,
  quality = "auto",
  fill = false,
  objectFit = "cover",
  objectPosition = "center",
  placeholder = "empty",
  blurDataURL,
  loading,
  rounded = false,
  containerClassName,
}: ResponsiveImageProps) {
  const { breakpoint } = useBreakpoint()
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    // Determine which source to use based on breakpoint
    if (mobileSrc && ["xs", "sm"].includes(breakpoint)) {
      setImageSrc(mobileSrc)
    } else if (tabletSrc && ["md"].includes(breakpoint)) {
      setImageSrc(tabletSrc)
    } else if (desktopSrc && ["lg", "xl", "2xl"].includes(breakpoint)) {
      setImageSrc(desktopSrc)
    } else {
      setImageSrc(src)
    }
  }, [breakpoint, src, mobileSrc, tabletSrc, desktopSrc])

  // Determine responsive classes based on breakpoint props
  const getResponsiveClasses = () => {
    const classes = []

    if (xs) classes.push(xs)
    if (sm) classes.push(`sm:${sm}`)
    if (md) classes.push(`md:${md}`)
    if (lg) classes.push(`lg:${lg}`)
    if (xl) classes.push(`xl:${xl}`)

    return classes.join(" ")
  }

  return (
    <div className={cn("relative", getResponsiveClasses(), containerClassName)}>
      <EnhancedImage
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        priority={priority}
        quality={quality}
        fill={fill}
        objectFit={objectFit}
        objectPosition={objectPosition}
        placeholder={placeholder as any}
        blurDataURL={blurDataURL}
        loading={loading}
        rounded={rounded}
        onError={() => {
          // Fallback to original src if the responsive image fails to load
          if (imageSrc !== src) {
            setImageSrc(src)
          }
        }}
      />
    </div>
  )
}
