"use client"

import { useState, useEffect } from "react"
import { EnhancedImage } from "./enhanced-image"
import { cn } from "@/lib/utils"

type GridLayout = "1x1" | "2x2" | "3x3" | "1x2" | "2x1" | "2x3" | "3x2" | "masonry" | "adaptive"

interface ImageItem {
  src: string
  alt: string
  width?: number
  height?: number
  aspectRatio?: string
}

interface ResponsiveImageGridProps {
  images: ImageItem[]
  layout?: GridLayout
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
  aspectRatio?: string
  containerClassName?: string
  priority?: boolean
  onClick?: (index: number) => void
}

export function ResponsiveImageGrid({
  images,
  layout = "adaptive",
  gap = "md",
  className,
  rounded = "md",
  aspectRatio = "aspect-square",
  containerClassName,
  priority = false,
  onClick,
}: ResponsiveImageGridProps) {
  const [columns, setColumns] = useState(getInitialColumns())

  // Determine initial columns based on layout
  function getInitialColumns(): number {
    switch (layout) {
      case "1x1":
        return 1
      case "2x2":
      case "2x1":
      case "2x3":
        return 2
      case "3x3":
      case "3x2":
        return 3
      case "1x2":
        return 1
      case "masonry":
        return 3
      case "adaptive":
        return 3
      default:
        return 3
    }
  }

  // Update columns on window resize for adaptive layout
  useEffect(() => {
    if (layout !== "adaptive") return

    function handleResize() {
      const width = window.innerWidth
      if (width < 640) {
        setColumns(1)
      } else if (width < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [layout])

  // Get gap class
  const getGapClass = () => {
    switch (gap) {
      case "none":
        return "gap-0"
      case "xs":
        return "gap-1"
      case "sm":
        return "gap-2"
      case "md":
        return "gap-4"
      case "lg":
        return "gap-6"
      case "xl":
        return "gap-8"
      default:
        return "gap-4"
    }
  }

  // Get grid template columns class
  const getGridClass = () => {
    if (layout === "masonry") return ""

    switch (columns) {
      case 1:
        return "grid-cols-1"
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    }
  }

  // Render masonry layout
  if (layout === "masonry") {
    // Split images into column arrays
    const columnArrays: ImageItem[][] = Array.from({ length: columns }, () => [])
    images.forEach((image, i) => {
      columnArrays[i % columns].push(image)
    })

    return (
      <div className={cn("flex", getGapClass(), className)}>
        {columnArrays.map((columnImages, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-4">
            {columnImages.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className={cn("relative", containerClassName)}
                onClick={() => onClick?.(colIndex * columns + imgIndex)}
              >
                <EnhancedImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  aspectRatio={image.aspectRatio || aspectRatio}
                  rounded={rounded}
                  priority={priority && colIndex === 0 && imgIndex === 0}
                  className={cn(onClick && "cursor-pointer")}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  // Render grid layout
  return (
    <div className={cn("grid", getGridClass(), getGapClass(), className)}>
      {images.map((image, index) => (
        <div key={index} className={cn("relative", containerClassName)} onClick={() => onClick?.(index)}>
          <EnhancedImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            aspectRatio={image.aspectRatio || aspectRatio}
            rounded={rounded}
            priority={priority && index === 0}
            className={cn(onClick && "cursor-pointer")}
          />
        </div>
      ))}
    </div>
  )
}
