"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { getCategoryImage } from "@/lib/image-repository"

interface FloatingElementProps {
  className: string
  animationDelay?: number
  children: ReactNode
}

function FloatingElement({ className, animationDelay = 0, children }: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut", delay: animationDelay }}
    >
      {children}
    </motion.div>
  )
}

export function AppScreenshot() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-25"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl p-4 md:p-8">
        <div className="relative aspect-[9/16] max-w-[280px] mx-auto">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border-8 border-black">
            <OptimizedImage
              src={getCategoryImage("app", 0).src}
              alt="Mobile app screenshot"
              width={300}
              height={600}
              aspectRatio="aspect-[9/16]"
              className="w-full h-full"
            />
          </div>
          <div className="absolute -right-16 -bottom-10 w-48 h-48 bg-primary/10 rounded-full"></div>
          <div className="absolute -left-16 -top-10 w-32 h-32 bg-purple-500/10 rounded-full"></div>

          {/* Floating UI elements */}
          <FloatingElement className="top-20 -right-16">
            {/* You can pass any icon or component here */}
            <div className="h-6 w-6 text-primary">📊</div>
          </FloatingElement>

          <FloatingElement className="bottom-40 -left-16" animationDelay={1}>
            <div className="h-6 w-6 text-primary">🔔</div>
          </FloatingElement>

          <FloatingElement className="top-60 -right-12" animationDelay={0.5}>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium">Order Confirmed</span>
            </div>
          </FloatingElement>
        </div>
      </div>
    </div>
  )
}
