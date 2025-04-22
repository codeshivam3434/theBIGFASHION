"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface HoverCardEffectProps {
  children: ReactNode
  className?: string
  glowColor?: string
  hoverScale?: number
}

export default function HoverCardEffect({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.1)",
  hoverScale = 1.02,
}: HoverCardEffectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      animate={{
        scale: isHovered ? hoverScale : 1,
        boxShadow: isHovered
          ? `0 20px 30px -10px rgba(0, 0, 0, 0.1), 0 0 20px ${glowColor}`
          : "0 10px 20px -5px rgba(0, 0, 0, 0.05)",
        rotateX: isHovered ? -mousePosition.y * 7 : 0,
        rotateY: isHovered ? mousePosition.x * 7 : 0,
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
        boxShadow: { duration: 0.2 },
        rotateX: { duration: 0.2, ease: "easeOut" },
        rotateY: { duration: 0.2, ease: "easeOut" },
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle at 
              ${50 + mousePosition.x * 100}% 
              ${50 + mousePosition.y * 100}%, 
              ${glowColor}, 
              transparent 40%
            )`,
            opacity: isHovered ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
      {children}
    </motion.div>
  )
}

