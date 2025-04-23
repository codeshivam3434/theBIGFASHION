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

export function InteractiveFeatureCards({ title, subtitle, features, className }: InteractiveFeatureCardsProps) {
  const [activeFeature, setActiveFeature] = useState(0)

  // Animated particles component
  const CardParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                  {title}
                </span>
              </h2>
            )}
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
                  "p-6 rounded-xl cursor-pointer transition-all duration-300 border relative overflow-hidden",
                  activeFeature === index
                    ? `bg-gradient-to-br from-${feature.color || "pink-600"}/20 to-${feature.color || "pink-600"}/5 border-${feature.color || "pink-600"}/30`
                    : "bg-white/5 hover:bg-white/10 backdrop-blur-sm border-white/10",
                )}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: activeFeature === index ? 1 : 1.03 }}
              >
                {activeFeature === index && <CardParticles />}

                <div
                  className={cn(
                    "rounded-full p-3 inline-flex mb-4 relative",
                    activeFeature === index
                      ? `bg-gradient-to-br from-${feature.color || "pink-600"}/30 to-${feature.color || "pink-600"}/10 text-${feature.color || "pink-600"}`
                      : "bg-white/10 text-white/70",
                  )}
                >
                  {feature.icon}
                  {activeFeature === index && (
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-30"></div>
                  )}
                </div>

                <h3
                  className={cn(
                    "text-lg font-semibold mb-2",
                    activeFeature === index ? `text-${feature.color || "pink-600"}` : "text-foreground",
                  )}
                >
                  {feature.title}
                </h3>

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
                          className={`absolute -inset-1 bg-gradient-to-r from-${feature.color || "pink-600"} to-${feature.color === "pink-600" ? "purple-600" : "pink-600"} rounded-lg blur opacity-50`}
                        ></div>
                        <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20 h-full">
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.alt || feature.title}
                            width={600}
                            height={400}
                            quality={90}
                            loading="eager"
                            className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-tr from-${feature.color || "pink-600"}/20 to-${feature.color === "pink-600" ? "purple-600" : "pink-600"}/20`}
                          ></div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div
                        className={`absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-${feature.color || "pink-600"} to-${feature.color === "pink-600" ? "purple-600" : "pink-600"} blur-xl opacity-70 animate-pulse`}
                      ></div>
                      <div
                        className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-${feature.color === "pink-600" ? "purple-600" : "pink-600"} to-${feature.color || "pink-600"} blur-xl opacity-70 animate-pulse-slow`}
                      ></div>
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
