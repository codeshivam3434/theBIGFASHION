"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileOptimizedDiagramProps {
  imageSrc: string
  imageAlt: string
}

export default function MobileOptimizedDiagram({ imageSrc, imageAlt }: MobileOptimizedDiagramProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState(0)

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2))
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.8))

  const moveLeft = () => setPosition((prev) => Math.min(prev + 20, 0))
  const moveRight = () => setPosition((prev) => Math.max(prev - 20, -200))

  return (
    <div className="relative w-full">
      {/* Controls */}
      <div className="flex justify-between mb-2">
        <div className="flex space-x-1">
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={zoomOut} disabled={scale <= 0.8}>
            <ZoomOut className="h-4 w-4" />
            <span className="sr-only">Zoom out</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={zoomIn} disabled={scale >= 2}>
            <ZoomIn className="h-4 w-4" />
            <span className="sr-only">Zoom in</span>
          </Button>
        </div>

        <div className="flex space-x-1">
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={moveLeft} disabled={position >= 0}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Move left</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={moveRight} disabled={position <= -200}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Move right</span>
          </Button>
        </div>
      </div>

      {/* Diagram container */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div
          className="transition-all duration-300 ease-in-out"
          style={{
            transform: `scale(${scale}) translateX(${position}px)`,
            transformOrigin: "center left",
            width: "max-content",
            padding: "1rem",
          }}
        >
          <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="h-auto max-h-[400px] w-auto" />
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-2">Use controls to zoom and pan the diagram</p>
    </div>
  )
}
