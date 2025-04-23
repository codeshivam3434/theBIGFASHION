"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { EnhancedImage } from "./enhanced-image"
import { cn } from "@/lib/utils"

type ImagePosition = "left" | "right" | "top" | "bottom" | "background"
type ImageSize = "small" | "medium" | "large" | "full"

interface ImageSectionProps {
  image: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  title?: string
  subtitle?: string
  description?: React.ReactNode
  children?: React.ReactNode
  imagePosition?: ImagePosition
  imageSize?: ImageSize
  className?: string
  contentClassName?: string
  imageClassName?: string
  rounded?: boolean | "sm" | "md" | "lg" | "xl" | "full"
  priority?: boolean
  animate?: boolean
}

export function ImageSection({
  image,
  title,
  subtitle,
  description,
  children,
  imagePosition = "left",
  imageSize = "medium",
  className,
  contentClassName,
  imageClassName,
  rounded = "lg",
  priority = false,
  animate = true,
}: ImageSectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Get image width based on size
  const getImageWidth = () => {
    switch (imageSize) {
      case "small":
        return "w-full md:w-1/3"
      case "medium":
        return "w-full md:w-1/2"
      case "large":
        return "w-full md:w-2/3"
      case "full":
        return "w-full"
      default:
        return "w-full md:w-1/2"
    }
  }

  // Get content width based on image size
  const getContentWidth = () => {
    switch (imageSize) {
      case "small":
        return "w-full md:w-2/3"
      case "medium":
        return "w-full md:w-1/2"
      case "large":
        return "w-full md:w-1/3"
      case "full":
        return "w-full"
      default:
        return "w-full md:w-1/2"
    }
  }

  // Get flex direction based on image position
  const getFlexDirection = () => {
    switch (imagePosition) {
      case "left":
        return "flex-col md:flex-row"
      case "right":
        return "flex-col md:flex-row-reverse"
      case "top":
        return "flex-col"
      case "bottom":
        return "flex-col-reverse"
      case "background":
        return "flex-col"
      default:
        return "flex-col md:flex-row"
    }
  }

  // Background image section
  if (imagePosition === "background") {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          rounded && typeof rounded === "boolean" ? "rounded-lg" : `rounded-${rounded}`,
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 z-0">
          <EnhancedImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            fill
            priority={priority}
            className={cn("transition-transform duration-700", animate && isHovered && "scale-110", imageClassName)}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className={cn("relative z-10 p-8 md:p-12 text-white", contentClassName)}>
          {subtitle && (
            <motion.p
              className="text-sm md:text-base font-medium text-primary-foreground/80 mb-2"
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}

          {title && (
            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-4"
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h2>
          )}

          {description && (
            <motion.div
              className="mb-6 text-primary-foreground/90"
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    )
  }

  // Standard layout with image and content side by side or stacked
  return (
    <div className={cn("flex gap-8 md:gap-12", getFlexDirection(), className)}>
      <div
        className={cn(
          getImageWidth(),
          "relative overflow-hidden",
          rounded && typeof rounded === "boolean" ? "rounded-lg" : `rounded-${rounded}`,
          imageClassName,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <EnhancedImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          className={cn("transition-transform duration-700", animate && isHovered && "scale-110")}
        />
      </div>

      <div className={cn(getContentWidth(), "flex flex-col justify-center", contentClassName)}>
        {subtitle && (
          <motion.p
            className="text-sm md:text-base font-medium text-muted-foreground mb-2"
            initial={animate ? { opacity: 0, y: 20 } : undefined}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}

        {title && (
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-4"
            initial={animate ? { opacity: 0, y: 20 } : undefined}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h2>
        )}

        {description && (
          <motion.div
            className="mb-6"
            initial={animate ? { opacity: 0, y: 20 } : undefined}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.div>
        )}

        {children && (
          <motion.div
            initial={animate ? { opacity: 0, y: 20 } : undefined}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  )
}
