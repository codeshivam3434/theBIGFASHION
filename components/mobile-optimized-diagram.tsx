"use client"

import { useState } from "react"
import { ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileOptimizedDiagramProps {
  imageSrc: string
  imageAlt: string
}

export default function MobileOptimizedDiagram({ imageSrc, imageAlt }: MobileOptimizedDiagramProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="relative w-full">
      {/* Simple zoom toggle */}
      <div className="absolute top-2 right-2 z-10">
        <Button
          variant="outline"
          size="sm"
          className="h-8 w-8 p-0 bg-white/80 backdrop-blur-sm"
          onClick={toggleZoom}
          aria-label={isZoomed ? "Zoom out" : "Zoom in"}
        >
          {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
        </Button>
      </div>

      {/* Diagram container with responsive behavior */}
      <div
        className={`relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 ${
          isZoomed ? "h-[70vh] overflow-auto" : "h-auto"
        }`}
      >
        <div className={`transition-all duration-300 ease-in-out ${isZoomed ? "transform-none" : "transform-none"}`}>
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className={`w-full h-auto object-contain ${isZoomed ? "max-w-none" : "max-w-full"}`}
          />
        </div>
      </div>

      {isZoomed && <p className="text-xs text-gray-500 text-center mt-2">Scroll to view the entire diagram</p>}
    </div>
  )
}
