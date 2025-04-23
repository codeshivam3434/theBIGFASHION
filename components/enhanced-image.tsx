"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface EnhancedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
  glowColor?: "magenta" | "purple" | "primary" | "none"
  glowOnHover?: boolean
}

export function EnhancedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  rounded = "none",
  glowColor = "none",
  glowOnHover = true,
  ...props
}: EnhancedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const roundedClasses = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  }

  const glowClasses = {
    none: "",
    magenta: "shadow-[0_0_30px_rgba(212,20,90,0.3)]",
    purple: "shadow-[0_0_30px_rgba(121,40,202,0.3)]",
    primary: "shadow-[0_0_30px_rgba(var(--primary),0.3)]",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-500",
        roundedClasses[rounded],
        glowOnHover ? `hover:${glowClasses[glowColor]}` : glowColor !== "none" ? glowClasses[glowColor] : "",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse",
          roundedClasses[rounded],
          !isLoaded ? "opacity-100" : "opacity-0 transition-opacity duration-300",
        )}
      />
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-auto object-cover transition-opacity duration-300",
          roundedClasses[rounded],
          !isLoaded ? "opacity-0" : "opacity-100",
        )}
        {...props}
      />
    </div>
  )
}
