"use client"

import { EnhancedImage } from "./enhanced-image"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fallbackSrc?: string
  lowQualitySrc?: string
  className?: string
  aspectRatio?: string
  containerClassName?: string
  priority?: boolean
  fill?: boolean
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
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
  fill = false,
  rounded = false,
  objectFit = "cover",
  objectPosition = "center",
  ...props
}: OptimizedImageProps) {
  // This is now a wrapper around EnhancedImage for backward compatibility
  return (
    <EnhancedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      fallbackSrc={fallbackSrc}
      blurDataURL={lowQualitySrc}
      placeholder={lowQualitySrc ? "blur" : "empty"}
      className={className}
      containerClassName={containerClassName}
      aspectRatio={aspectRatio}
      priority={priority}
      fill={fill}
      rounded={rounded}
      objectFit={objectFit}
      objectPosition={objectPosition}
      {...props}
    />
  )
}
