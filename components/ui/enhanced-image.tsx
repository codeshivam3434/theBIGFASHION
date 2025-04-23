"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { useBreakpoint } from "@/hooks/use-breakpoint"

type ImageQuality = "low" | "medium" | "high" | "auto"

interface ImageSizes {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

interface EnhancedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  aspectRatio?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
  priority?: boolean
  quality?: ImageQuality | number
  fallbackSrc?: string
  sizes?: string
  responsive?: boolean
  responsiveSizes?: ImageSizes
  fill?: boolean
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
  loading?: "eager" | "lazy"
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export function EnhancedImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  aspectRatio = "aspect-video",
  objectFit = "cover",
  objectPosition = "center",
  priority = false,
  quality = "auto",
  fallbackSrc = "/placeholder.svg",
  sizes = "100vw",
  responsive = true,
  responsiveSizes,
  fill = false,
  rounded = false,
  loading,
  placeholder = "empty",
  blurDataURL,
  onLoad,
  onError,
}: EnhancedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)
  const { breakpoint } = useBreakpoint()

  // Convert quality string to number
  const getQualityValue = (): number => {
    if (typeof quality === "number") return quality
    switch (quality) {
      case "low":
        return 60
      case "medium":
        return 75
      case "high":
        return 90
      case "auto":
      default:
        return 75
    }
  }

  // Get responsive width based on breakpoint
  const getResponsiveWidth = (): number | undefined => {
    if (!responsive || !responsiveSizes || fill) return width

    switch (breakpoint) {
      case "xs":
        return responsiveSizes.xs || width
      case "sm":
        return responsiveSizes.sm || responsiveSizes.xs || width
      case "md":
        return responsiveSizes.md || responsiveSizes.sm || responsiveSizes.xs || width
      case "lg":
        return responsiveSizes.lg || responsiveSizes.md || responsiveSizes.sm || responsiveSizes.xs || width
      case "xl":
        return (
          responsiveSizes.xl ||
          responsiveSizes.lg ||
          responsiveSizes.md ||
          responsiveSizes.sm ||
          responsiveSizes.xs ||
          width
        )
      case "2xl":
        return (
          responsiveSizes.xxl ||
          responsiveSizes.xl ||
          responsiveSizes.lg ||
          responsiveSizes.md ||
          responsiveSizes.sm ||
          responsiveSizes.xs ||
          width
        )
      default:
        return width
    }
  }

  // Get responsive height based on breakpoint
  const getResponsiveHeight = (): number | undefined => {
    if (!responsive || !responsiveSizes || fill) return height

    // If we have responsive width but not height, maintain aspect ratio if both original dimensions exist
    const responsiveWidth = getResponsiveWidth()
    if (width && height && responsiveWidth && responsiveWidth !== width) {
      const aspectRatio = height / width
      return Math.round(responsiveWidth * aspectRatio)
    }

    return height
  }

  // Generate rounded class based on prop
  const getRoundedClass = (): string => {
    if (!rounded) return ""
    if (rounded === true) return "rounded-md"
    return `rounded-${rounded}`
  }

  // Generate placeholder blur data URL if not provided
  useEffect(() => {
    const w = getResponsiveWidth() || 100
    const h = getResponsiveHeight() || 100

    if (!blurDataURL && placeholder === "blur" && !priority) {
      const svg = `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect width="${w}" height="${h}" fill="#e5e7eb"/>
        </svg>
      `
      const encodedSvg = btoa(svg)
      setImageSrc(`data:image/svg+xml;base64,${encodedSvg}`)
    }
  }, [blurDataURL, placeholder, priority])

  // Reset to original source when it changes
  useEffect(() => {
    if (src !== imageSrc && !error) {
      setImageSrc(src)
    }
  }, [src, imageSrc, error])

  const responsiveWidth = getResponsiveWidth()
  const responsiveHeight = getResponsiveHeight()

  return (
    <div className={cn("relative overflow-hidden", !fill && aspectRatio, getRoundedClass(), containerClassName)}>
      {isLoading && <Skeleton className="absolute inset-0" />}
      <Image
        src={error ? fallbackSrc : imageSrc}
        alt={alt}
        width={fill ? undefined : responsiveWidth}
        height={fill ? undefined : responsiveHeight}
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          getRoundedClass(),
          className,
        )}
        style={{
          objectFit,
          objectPosition,
        }}
        sizes={sizes}
        quality={getQualityValue()}
        priority={priority}
        fill={fill}
        loading={loading}
        placeholder={placeholder as any}
        blurDataURL={blurDataURL}
        onLoadingComplete={() => {
          setIsLoading(false)
          onLoad?.()
        }}
        onError={() => {
          setError(true)
          setIsLoading(false)
          onError?.()
        }}
      />
    </div>
  )
}
