"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import { useIsMobile } from "@/hooks/use-mobile"

export default function FashionHero() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useIsMobile()
  const slideContainerRef = useRef<HTMLDivElement>(null)
  const [touchStartX, setTouchStartX] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)

  const headlines = ["Reinvent Operation", "Simplify Supply Chain", "Enhance Retail Results"]

  const subheadlines = [
    "Connect with suppliers, streamline operations, and scale your fashion business with our all-in-one B2B platform",
    "Cut lead times by 40% and prevent stockouts with smart inventory management",
    "Boost sell-through rates and enhance margins with data-driven insights",
  ]

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwiping) {
        setCurrentSlide((prev) => (prev + 1) % headlines.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [headlines.length, isSwiping])

  const handleDemoClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = "/contact?demo=true"
    }, 800)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
    setIsSwiping(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const deltaX = touchEndX - touchStartX

    // Determine swipe direction if the swipe was significant
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swipe right - go to previous slide
        setCurrentSlide((prev) => (prev === 0 ? headlines.length - 1 : prev - 1))
      } else {
        // Swipe left - go to next slide
        setCurrentSlide((prev) => (prev + 1) % headlines.length)
      }
    }

    // Reset swiping state after a short delay
    setTimeout(() => setIsSwiping(false), 300)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent default to avoid page scrolling during swipe
    if (Math.abs(e.touches[0].clientX - touchStartX) > 10) {
      e.preventDefault()
    }
  }

  // Key benefits that appear as cards
  const keyBenefits = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "40% Growth",
      text: "Average business growth for platform users",
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "30 Retailers",
      text: "Trusted partners across 3 cities",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "500+ Products",
      text: "Access to trending fashion inventory",
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with pattern overlay */}
      <div className="absolute inset-0 bg-fashion-gradient">
        <div className="absolute inset-0 bg-fashion-pattern opacity-10"></div>

        {/* Animated shapes - optimized for mobile */}
        <motion.div
          className="absolute top-10 left-5 md:left-10 w-32 md:w-64 h-32 md:h-64 rounded-full bg-white/10 blur-3xl"
          animate={{
            x: [0, 15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-10 right-5 md:right-10 w-40 md:w-80 h-40 md:h-80 rounded-full bg-white/10 blur-3xl"
          animate={{
            x: [0, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="container relative z-10 px-4 py-12 md:py-16 lg:py-32 min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 md:mb-6"
            >
              <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 text-xs md:text-sm font-medium text-fashion-primary">
                <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5 mr-1.5" />
                <span className="whitespace-nowrap">Fashion Industry's Leading B2B Platform</span>
              </span>
            </motion.div>

            {/* Headline container with touch events for mobile */}
            <div
              ref={slideContainerRef}
              className="h-[100px] md:h-[120px] lg:h-[150px] mb-2 md:mb-4 lg:mb-6 flex items-center justify-center lg:justify-start overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute px-2 md:px-0"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                    {headlines[currentSlide]}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subheadline container */}
            <div className="h-[120px] sm:h-[100px] md:h-[100px] mb-4 md:mb-6 lg:mb-8 px-2 md:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute max-w-xl mx-auto lg:mx-0"
                >
                  <p className="text-sm sm:text-base md:text-xl text-white/90">{subheadlines[currentSlide]}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile swipe hint - only visible on mobile */}
            {isMobile && (
              <motion.div
                className="flex items-center justify-center mb-4 text-white/70 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  ← Swipe to explore →
                </motion.div>
              </motion.div>
            )}

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                size={isMobile ? "default" : "lg"}
                onClick={handleDemoClick}
                disabled={isLoading}
                className="text-sm md:text-base px-6 md:px-8 py-5 md:py-6 font-semibold bg-white hover:bg-white/90 text-primary"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-fashion-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </span>
                )}
              </Button>
              <Button
                variant="outline"
                size={isMobile ? "default" : "lg"}
                className="text-sm md:text-base border-white text-white hover:bg-white/10 py-5 md:py-6"
                onClick={() => (window.location.href = "/solutions")}
              >
                Explore Solutions
              </Button>
            </motion.div>

            {/* Slide indicators - enhanced for mobile */}
            <div className="flex justify-center lg:justify-start space-x-3 mb-6 md:mb-8">
              {headlines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 flex items-center justify-center ${
                    currentSlide === index
                      ? "bg-white w-8 h-3 rounded-full"
                      : "bg-white/40 w-3 h-3 rounded-full hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop image - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <EnhancedImage
                src="/vibrant-fashion-b2b-dashboard.png"
                alt="Fashion B2B platform dashboard showing inventory management, trend analysis, and order processing"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-2xl"
                quality="high"
                priority
              />

              {/* Floating cards */}
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="absolute bg-white rounded-lg shadow-xl p-3 w-40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  style={{
                    top: `${20 + index * 30}%`,
                    right: index === 1 ? "-15%" : "auto",
                    left: index !== 1 ? "-15%" : "auto",
                  }}
                >
                  <div className="flex items-start">
                    <div className="bg-primary p-1.5 rounded-full text-white mr-2">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-primary text-sm">{benefit.title}</h3>
                      <p className="text-xs text-gray-600">{benefit.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile hero image - only visible on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 mb-8 lg:hidden"
        >
          <div className="relative mx-auto max-w-sm sm:max-w-md">
            <EnhancedImage
              src="/vibrant-fashion-b2b-dashboard.png"
              alt="Fashion B2B platform dashboard"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-xl"
              quality="high"
              priority
            />

            {/* Single floating stat card for mobile - positioned over the image */}
            <motion.div
              className="absolute top-0 right-0 -mt-4 -mr-2 bg-white rounded-lg shadow-xl p-2.5 z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center">
                <div className="bg-primary p-1.5 rounded-full text-white mr-2">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-xs">40% Growth</h3>
                  <p className="text-xs text-gray-600">Avg. business growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile benefit cards - redesigned for better mobile experience */}
        <div className="mt-2 grid grid-cols-3 gap-2 sm:gap-3 lg:hidden">
          {keyBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2.5 sm:p-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.15 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary p-1.5 rounded-full text-white mb-1.5">{benefit.icon}</div>
                <h3 className="font-bold text-primary text-xs sm:text-sm">{benefit.title}</h3>
                <p className="text-xs text-gray-600 mt-0.5 hidden sm:block">{benefit.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curved bottom design */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
