"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedImage } from "@/components/ui/enhanced-image"

export default function FashionHero() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const headlines = ["Reinvent Operation", "Simplify Supply Chain", "Enhance Retail Results"]

  const subheadlines = [
    "Connect with suppliers, streamline operations, and scale your fashion business with our all-in-one B2B platform",
    "Cut lead times by 40% and prevent stockouts with smart inventory management",
    "Boost sell-through rates and enhance margins with data-driven insights",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headlines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [headlines.length])

  const handleDemoClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = "/contact?demo=true"
    }, 800)
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
      title: "20K+ Products",
      text: "Access to trending fashion inventory",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "500+ Brands",
      text: "Connect with top fashion brands",
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with pattern overlay */}
      <div className="absolute inset-0 bg-fashion-gradient">
        <div className="absolute inset-0 bg-fashion-pattern opacity-10"></div>

        {/* Animated shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="container relative z-10 px-4 py-16 md:py-32 min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-fashion-primary">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Fashion Industry's Leading B2B Platform
              </span>
            </motion.div>

            <div className="h-[120px] md:h-[150px] mb-4 md:mb-6 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                    {headlines[currentSlide]}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="h-[100px] md:h-[100px] mb-6 md:mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute max-w-xl mx-auto lg:mx-0"
                >
                  <p className="text-base md:text-xl text-white/90">{subheadlines[currentSlide]}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                size="lg"
                onClick={handleDemoClick}
                disabled={isLoading}
                className="text-base px-8 py-6 font-semibold bg-white hover:bg-white/90 text-primary"
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
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base border-white text-white hover:bg-white/10 py-6"
                onClick={() => (window.location.href = "/solutions")}
              >
                Explore Solutions
              </Button>
            </motion.div>

            {/* Slide indicators */}
            <div className="flex justify-center lg:justify-start space-x-2 mb-6 md:mb-8">
              {headlines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-white scale-125" : "bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

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

        {/* Mobile benefit cards - only visible on mobile */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:hidden px-2">
          {keyBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl p-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
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
