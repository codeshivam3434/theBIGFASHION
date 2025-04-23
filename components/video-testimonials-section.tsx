"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { VideoTestimonial } from "./video-testimonial"
import FadeInSection from "./fade-in-section"

// Define the testimonial data structure
export interface VideoTestimonialData {
  id: string
  videoSrc: string
  posterSrc: string
  name: string
  position: string
  company: string
  quote: string
}

interface VideoTestimonialsProps {
  testimonials: VideoTestimonialData[]
  title?: string
  subtitle?: string
}

export function VideoTestimonialsSection({
  testimonials,
  title = "What Our Customers Say",
  subtitle = "Hear directly from retailers who have transformed their businesses with our platform",
}: VideoTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
          </div>
        </FadeInSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Testimonial carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <VideoTestimonial
                src={testimonials[currentIndex].videoSrc}
                posterImage={testimonials[currentIndex].posterSrc}
                name={testimonials[currentIndex].name}
                position={testimonials[currentIndex].position}
                company={testimonials[currentIndex].company}
                quote={testimonials[currentIndex].quote}
              />
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
