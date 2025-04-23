"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { EnhancedImage } from "./enhanced-image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    width: number
    height: number
  }>
  className?: string
  aspectRatio?: string
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
  thumbnailSize?: "small" | "medium" | "large"
}

export function ImageGallery({
  images,
  className,
  aspectRatio = "aspect-video",
  rounded = "md",
  thumbnailSize = "medium",
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Get thumbnail size class
  const getThumbnailSizeClass = () => {
    switch (thumbnailSize) {
      case "small":
        return "h-16"
      case "medium":
        return "h-20"
      case "large":
        return "h-24"
      default:
        return "h-20"
    }
  }

  return (
    <>
      <div className={cn("relative group", className)}>
        <EnhancedImage
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={images[currentIndex].width}
          height={images[currentIndex].height}
          aspectRatio={aspectRatio}
          rounded={rounded}
          priority
        />

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
          onClick={() => setIsOpen(true)}
          aria-label="Expand image"
        >
          <Expand className="h-4 w-4" />
        </Button>

        {images.length > 1 && (
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
        )}
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "flex-shrink-0 transition-all",
                getThumbnailSizeClass(),
                index === currentIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100",
                rounded && typeof rounded === "boolean" ? "rounded-md" : `rounded-${rounded}`,
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <EnhancedImage
                src={image.src}
                alt={image.alt}
                width={Math.round(image.width / 4)}
                height={Math.round(image.height / 4)}
                className="h-full w-auto"
                rounded={rounded}
              />
            </button>
          ))}
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative bg-background rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 bg-background/80 hover:bg-background/90"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="relative">
              <EnhancedImage
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={images[currentIndex].width}
                height={images[currentIndex].height}
                className="rounded-lg max-h-[80vh] w-auto"
                aspectRatio="aspect-auto"
                priority
              />

              {images.length > 1 && (
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
                </>
              )}
            </div>

            <div className="p-4">
              <p className="text-lg font-medium">{images[currentIndex].alt}</p>
              <p className="text-sm text-muted-foreground">
                Image {currentIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
