"use client"

import { useState, useRef, useEffect } from "react"
import { EnhancedImage } from "./enhanced-image"
import { cn } from "@/lib/utils"

interface ImageComparisonProps {
  beforeImage: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  afterImage: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  beforeLabel?: string
  afterLabel?: string
  className?: string
  aspectRatio?: string
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
  initialPosition?: number
  vertical?: boolean
}

export function ImageComparison({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
  aspectRatio = "aspect-video",
  rounded = "lg",
  initialPosition = 50,
  vertical = false,
}: ImageComparisonProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()

    if (vertical) {
      const y = e.clientY - rect.top
      const newPosition = Math.min(Math.max((y / rect.height) * 100, 0), 100)
      setPosition(newPosition)
    } else {
      const x = e.clientX - rect.left
      const newPosition = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      setPosition(newPosition)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return

    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()

    if (vertical) {
      const y = touch.clientY - rect.top
      const newPosition = Math.min(Math.max((y / rect.height) * 100, 0), 100)
      setPosition(newPosition)
    } else {
      const x = touch.clientX - rect.left
      const newPosition = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      setPosition(newPosition)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative cursor-col-resize overflow-hidden",
        aspectRatio,
        rounded && typeof rounded === "boolean" ? "rounded-lg" : `rounded-${rounded}`,
        vertical ? "cursor-row-resize" : "cursor-col-resize",
        className,
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before image (full size) */}
      <div className="absolute inset-0">
        <EnhancedImage
          src={beforeImage.src}
          alt={beforeImage.alt}
          width={beforeImage.width}
          height={beforeImage.height}
          fill
          priority
          rounded={rounded}
        />
      </div>

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={vertical ? { height: `${position}%` } : { width: `${position}%` }}
      >
        <EnhancedImage
          src={afterImage.src}
          alt={afterImage.alt}
          width={afterImage.width}
          height={afterImage.height}
          fill
          priority
          rounded={rounded}
        />
      </div>

      {/* Slider handle */}
      <div
        className={cn(
          "absolute bg-white rounded-full shadow-lg z-10 flex items-center justify-center",
          vertical
            ? "h-8 w-8 left-1/2 -translate-x-1/2 cursor-row-resize"
            : "h-8 w-8 top-1/2 -translate-y-1/2 cursor-col-resize",
        )}
        style={vertical ? { top: `${position}%`, marginTop: "-16px" } : { left: `${position}%`, marginLeft: "-16px" }}
      >
        <div className={cn("bg-primary", vertical ? "h-4 w-1" : "h-1 w-4")}></div>
      </div>

      {/* Slider line */}
      <div
        className={cn("absolute bg-white", vertical ? "h-[2px] left-0 right-0" : "w-[2px] top-0 bottom-0")}
        style={vertical ? { top: `${position}%` } : { left: `${position}%` }}
      ></div>

      {/* Labels */}
      {beforeLabel && (
        <div
          className={cn(
            "absolute bg-black/70 text-white text-sm py-1 px-2 rounded",
            vertical ? "bottom-2 left-2" : "top-2 left-2",
          )}
        >
          {beforeLabel}
        </div>
      )}

      {afterLabel && (
        <div
          className={cn(
            "absolute bg-black/70 text-white text-sm py-1 px-2 rounded",
            vertical ? "top-2 right-2" : "top-2 right-2",
          )}
        >
          {afterLabel}
        </div>
      )}
    </div>
  )
}
