"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface VideoBackgroundProps {
  src: string
  overlayOpacity?: number
  overlayColor?: string
  className?: string
  posterImage?: string
  muted?: boolean
  loop?: boolean
  autoPlay?: boolean
  children?: React.ReactNode
}

export function VideoBackground({
  src,
  overlayOpacity = 0.5,
  overlayColor = "#000",
  className,
  posterImage,
  muted = true,
  loop = true,
  autoPlay = true,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    videoElement.addEventListener("loadeddata", handleLoadedData)

    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [])

  // Determine if the overlay is a gradient or a solid color
  const isGradient = overlayColor.includes("gradient")

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        poster={posterImage}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={isGradient ? { background: overlayColor } : { backgroundColor: overlayColor, opacity: overlayOpacity }}
      />

      {children}
    </div>
  )
}
