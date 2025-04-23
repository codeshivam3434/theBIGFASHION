"use client"

import { motion } from "framer-motion"

interface TheBigFashionLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "white"
}

export function TheBigFashionLogo({ className = "", size = "md", variant = "default" }: TheBigFashionLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  }

  const textColor = variant === "white" ? "text-white" : "text-primary"

  return (
    <motion.div
      className={`flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className={`font-bold ${textColor} ${sizeClasses[size]}`}>FASHION FUSION</span>
    </motion.div>
  )
}

// Add default export for compatibility
export default TheBigFashionLogo
