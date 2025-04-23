"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SolutionItem {
  title: string
  description: string
  image: string
  features: string[]
  color?: string
}

interface SolutionShowcaseProps {
  title?: string
  subtitle?: string
  solutions: SolutionItem[]
  className?: string
}

export function SolutionShowcase({ title, subtitle, solutions, className }: SolutionShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentSolution = solutions[currentIndex]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  // Animated particles component
  const SolutionParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(10)].map((_, i) => (
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

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r from-${currentSolution.color || "pink-600"} to-${currentSolution.color === "pink-600" ? "purple-600" : "pink-600"} rounded-lg blur opacity-50`}
                    ></div>
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20 h-full">
                      <img
                        src={currentSolution.image || "/placeholder.svg"}
                        alt={currentSolution.title}
                        className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr from-${currentSolution.color || "pink-600"}/20 to-${currentSolution.color === "pink-600" ? "purple-600" : "pink-600"}/20`}
                      ></div>
                      <SolutionParticles />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className={`absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-${currentSolution.color || "pink-600"} to-${currentSolution.color === "pink-600" ? "purple-600" : "pink-600"} blur-xl opacity-70 animate-pulse`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-${currentSolution.color === "pink-600" ? "purple-600" : "pink-600"} to-${currentSolution.color || "pink-600"} blur-xl opacity-70 animate-pulse-slow`}
                  ></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Content */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    <span
                      className={`bg-clip-text text-transparent bg-gradient-to-r from-${currentSolution.color || "pink-600"} to-${currentSolution.color === "pink-600" ? "purple-600" : "pink-600"}`}
                    >
                      {currentSolution.title}
                    </span>
                  </h3>
                  <p className="text-muted-foreground mb-6">{currentSolution.description}</p>

                  <ul className="space-y-3 mb-8">
                    {currentSolution.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <div
                          className={`rounded-full p-1 bg-gradient-to-r from-${currentSolution.color || "pink-600"}/20 to-${currentSolution.color === "pink-600" ? "purple-600" : "pink-600"}/10 text-${currentSolution.color || "pink-600"} mt-1`}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrev}
                  aria-label="Previous solution"
                  className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex-1 flex items-center">
                  {solutions.map((_, idx) => (
                    <button
                      key={idx}
                      className={cn(
                        "flex-1 h-1 mx-1 rounded-full transition-all",
                        idx === currentIndex
                          ? `bg-gradient-to-r from-${currentSolution.color || "pink-600"} to-${currentSolution.color === "pink-600" ? "purple-600" : "pink-600"}`
                          : "bg-white/20",
                      )}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to solution ${idx + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  aria-label="Next solution"
                  className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
