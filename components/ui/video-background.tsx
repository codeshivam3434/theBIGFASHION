"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface VideoBackgroundProps {
  src: string
  fallbackImage?: string
  overlayOpacity?: number
  overlayColor?: string
  className?: string
  priority?: boolean
  mobileImage?: string
  posterImage?: string
}

export function VideoBackground({
  src,
  fallbackImage = "/placeholder.svg?height=1080&width=1920",
  overlayOpacity = 0.6,
  overlayColor = "black",
  className,
  priority = false,
  mobileImage,
  posterImage,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    const handleError = () => {
      setHasError(true)
      console.error("Video failed to load:", src)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [src])

  // If on mobile and a mobile image is provided, show that instead of video
  if (isMobile && mobileImage) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${mobileImage})` }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      </div>
    )
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Fallback image shown until video loads or if video fails */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fallbackImage})` }} />
      )}

      {/* Video element */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage || fallbackImage}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
          preload={priority ? "auto" : "metadata"}
        >
          <source src={src} type="video/mp4" />
          {/* Add additional source elements for different formats if needed */}
        </video>
      )}

      {/* Overlay to ensure text readability */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
    </div>
  )
}
