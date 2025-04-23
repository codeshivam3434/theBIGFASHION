"use client"

import { useState } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

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
  quality?: number | string
  fallbackSrc?: string
  sizes?: string
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
  quality = 75,
  fallbackSrc = "/placeholder.svg",
  sizes = "100vw",
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

  const getRoundedClass = (): string => {
    if (!rounded) return ""
    if (rounded === true) return "rounded-md"
    return `rounded-${rounded}`
  }

  return (
    <div className={cn("relative overflow-hidden", aspectRatio, getRoundedClass(), containerClassName)}>
      {isLoading && <Skeleton className="absolute inset-0" />}
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
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
