"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  intensity?: number
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  className = "",
  intensity = 0.2,
}: ParallaxImageProps) {
  const [offset, setOffset] = useState(0)
  const imgRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!imgRef.current) return

    const { top } = imgRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Calculate how far the element is from the middle of the viewport
    // and convert it to a percentage
    const distanceFromCenter = (top - windowHeight / 2) / windowHeight

    // Apply the parallax effect based on the distance and intensity
    setOffset(distanceFromCenter * windowHeight * intensity)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [intensity])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          marginTop: `-${intensity * 100}px`,
          marginBottom: `-${intensity * 100}px`,
          height: `calc(100% + ${intensity * 200}px)`,
        }}
        className="absolute inset-0 transition-transform duration-100 ease-out"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
