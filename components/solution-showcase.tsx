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

  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
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
                      className={`absolute -inset-1 bg-gradient-to-r from-${currentSolution.color || "primary"} to-${currentSolution.color || "primary"}/60 rounded-lg blur opacity-25`}
                    ></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl h-full">
                      <img
                        src={currentSolution.image || "/placeholder.svg"}
                        alt={currentSolution.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Content */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentSolution.title}</h3>
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
                          className={`rounded-full p-1 bg-${currentSolution.color || "primary"}/20 text-${currentSolution.color || "primary"} mt-1`}
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
                <Button variant="outline" size="icon" onClick={goToPrev} aria-label="Previous solution">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex-1 flex items-center">
                  {solutions.map((_, idx) => (
                    <button
                      key={idx}
                      className={cn(
                        "flex-1 h-1 mx-1 rounded-full transition-all",
                        idx === currentIndex ? "bg-primary" : "bg-muted",
                      )}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to solution ${idx + 1}`}
                    />
                  ))}
                </div>
                <Button variant="outline" size="icon" onClick={goToNext} aria-label="Next solution">
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
