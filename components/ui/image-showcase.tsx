"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EnhancedImage } from "./enhanced-image"
import { Button } from "./button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ImageCategory } from "@/lib/image-repository"
import { imageRepository } from "@/lib/image-repository"

interface ImageShowcaseProps {
  category: ImageCategory
  title?: string
  description?: string
  className?: string
  showControls?: boolean
  autoplay?: boolean
  interval?: number
  maxImages?: number
  aspectRatio?: string
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
}

export function ImageShowcase({
  category,
  title,
  description,
  className,
  showControls = true,
  autoplay = true,
  interval = 5000,
  maxImages = 6,
  aspectRatio = "aspect-video",
  rounded = "lg",
}: ImageShowcaseProps) {
  const images = imageRepository[category].slice(0, maxImages)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Set up autoplay
  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      nextImage()
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval])

  return (
    <div className={cn("relative", className)}>
      {(title || description) && (
        <div className="text-center mb-6">
          {title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EnhancedImage
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={images[currentIndex].width}
              height={images[currentIndex].height}
              aspectRatio={aspectRatio}
              rounded={rounded}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {showControls && images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex ? "bg-primary" : "bg-background/80",
                  )}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
