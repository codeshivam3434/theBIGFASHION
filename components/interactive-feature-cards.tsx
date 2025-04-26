"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface FeatureCard {
  title: string
  description: string
  icon: React.ReactNode
  image: string
  color?: string
  alt?: string
}

interface InteractiveFeatureCardsProps {
  title?: string
  subtitle?: string
  features: FeatureCard[]
  className?: string
}

// Named export
export function InteractiveFeatureCards({ title, subtitle, features, className }: InteractiveFeatureCardsProps) {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "p-6 rounded-xl cursor-pointer transition-all duration-300 border",
                  activeFeature === index
                    ? `bg-${feature.color || "primary"}/10 border-${feature.color || "primary"}/30`
                    : "bg-background hover:bg-muted/50 border-border",
                )}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: activeFeature === index ? 1 : 1.03 }}
              >
                <div
                  className={cn(
                    "rounded-full p-3 inline-flex mb-4",
                    activeFeature === index
                      ? `bg-${feature.color || "primary"}/20 text-${feature.color || "primary"}`
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p
                  className={cn(
                    "text-sm transition-all duration-300",
                    activeFeature === index ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right side: Feature image */}
          <div className="relative h-[400px] md:h-[500px]">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  activeFeature === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div className="relative h-full">
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r from-${feature.color || "primary"} to-${feature.color || "primary"}/60 rounded-lg blur opacity-25`}
                        ></div>
                        <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl h-full">
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.alt || feature.title}
                            width={600}
                            height={400}
                            quality={90}
                            loading="eager"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

// Default export
const InteractiveFeatureCardsDefault = InteractiveFeatureCards
export default InteractiveFeatureCardsDefault
