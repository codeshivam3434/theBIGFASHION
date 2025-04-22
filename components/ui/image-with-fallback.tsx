"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface ImageWithFallbackProps extends Omit<ImageProps, "onError" | "alt"> {
  fallbackSrc?: string
  alt: string
}

export function ImageWithFallback({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative w-full h-full">
      {loading && <Skeleton className={`absolute inset-0 ${className}`} />}
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </div>
  )
}
