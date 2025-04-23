"use client"

import { useState } from "react"
import { EnhancedImage } from "./enhanced-image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface Hotspot {
  id: string
  x: number // percentage (0-100)
  y: number // percentage (0-100)
  title: string
  description: string
  color?: string
}

interface ImageHotspotsProps {
  image: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  hotspots: Hotspot[]
  className?: string
  aspectRatio?: string
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
}

export function ImageHotspots({
  image,
  hotspots,
  className,
  aspectRatio = "aspect-video",
  rounded = "lg",
}: ImageHotspotsProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)

  return (
    <div
      className={cn(
        "relative",
        aspectRatio,
        rounded && typeof rounded === "boolean" ? "rounded-lg" : `rounded-${rounded}`,
        className,
      )}
    >
      <EnhancedImage
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        aspectRatio={aspectRatio}
        rounded={rounded}
        priority
      />

      {hotspots.map((hotspot) => (
        <div key={hotspot.id}>
          {/* Hotspot button */}
          <button
            className={cn(
              "absolute w-6 h-6 rounded-full flex items-center justify-center z-10 transition-transform duration-300",
              activeHotspot === hotspot.id ? "scale-125" : "scale-100",
              hotspot.color ? `bg-${hotspot.color}` : "bg-primary",
            )}
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            aria-label={`Hotspot: ${hotspot.title}`}
          >
            <span className="sr-only">{hotspot.title}</span>
            <span className="block w-2 h-2 bg-white rounded-full"></span>

            {/* Pulse animation */}
            <span
              className={cn(
                "absolute w-full h-full rounded-full animate-ping opacity-75",
                hotspot.color ? `bg-${hotspot.color}` : "bg-primary",
              )}
            ></span>
          </button>

          {/* Hotspot tooltip */}
          <AnimatePresence>
            {activeHotspot === hotspot.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "absolute z-20 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg max-w-xs",
                  "transform -translate-x-1/2",
                )}
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y + 5}%`,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800"></div>
                <h4 className="font-bold text-sm mb-1">{hotspot.title}</h4>
                <p className="text-xs text-muted-foreground">{hotspot.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
