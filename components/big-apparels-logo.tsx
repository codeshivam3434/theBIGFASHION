"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useEffect, useState } from "react"

interface BigApparelsLogoProps {
  className?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "custom"
  variant?: "default" | "white"
  showImage?: boolean
}

export default function BigApparelsLogo({
  className,
  size = "md",
  variant = "default",
  showImage = true,
}: BigApparelsLogoProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isLoaded, setIsLoaded] = useState(false)

  // Responsive size mapping for text
  const sizeClasses = {
    xs: "text-lg md:text-xl",
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
    custom: "",
  }

  // Responsive size mapping for logo image
  const imageSizes = {
    xs: { width: 24, height: 24 },
    sm: { width: 28, height: 28 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 },
    xl: { width: 48, height: 48 },
    custom: { width: 32, height: 32 },
  }

  // Set text color based on variant
  const textColor = variant === "white" ? "text-white" : "text-primary"

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const currentSize = imageSizes[size as keyof typeof imageSizes]

  return (
    <div
      className={cn(
        "relative flex items-center font-bold tracking-tight transition-all duration-500",
        isLoaded ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {showImage && (
        <div className="mr-2 flex-shrink-0">
          <Image
            src="/images/bi-logo.png"
            alt="BI Logo"
            width={currentSize.width}
            height={currentSize.height}
            className={cn("rounded-full transition-transform duration-300", isLoaded ? "scale-100" : "scale-0")}
          />
        </div>
      )}

      <div className={cn("flex items-baseline", size !== "custom" && sizeClasses[size])}>
        <span className={cn(textColor, "font-extrabold transition-all duration-300")}>
          BIG
          <span className={cn("font-semibold", variant === "white" ? "text-white/90" : "text-primary/90")}>
            Apparels
          </span>
        </span>
      </div>
    </div>
  )
}
