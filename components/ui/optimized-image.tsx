"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onError" | "loading"> {
  fallbackSrc?: string
  lowQualitySrc?: string
  aspectRatio?: string
  containerClassName?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fallbackSrc = "/placeholder.svg",
  lowQualitySrc,
  className,
  aspectRatio = "aspect-video",
  containerClassName,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [error, setError] = useState(false)
  const [blurDataURL, setBlurDataURL] = useState<string | undefined>(lowQualitySrc ? lowQualitySrc : undefined)

  // Generate placeholder blur data URL if not provided
  useEffect(() => {
    if (!lowQualitySrc && !blurDataURL && !priority) {
      setBlurDataURL(
        `data:image/svg+xml;base64,${btoa(
          `<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect width="${width}" height="${height}" fill="#e5e7eb"/>
        </svg>`,
        )}`,
      )
    }
  }, [lowQualitySrc, blurDataURL, width, height, priority])

  return (
    <div className={cn("relative overflow-hidden", aspectRatio, containerClassName)}>
      {isLoading && <Skeleton className="absolute inset-0" />}
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "object-cover transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          className,
        )}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
        onLoad={() => setIsLoading(false)}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        priority={priority}
        {...props}
      />
    </div>
  )
}
