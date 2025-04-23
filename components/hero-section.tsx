"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, ShieldCheck, Truck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedImage } from "@/components/ui/enhanced-image"

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDemoClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = "/contact?demo=true"
    }, 800)
  }

  // Key benefits that appear below the CTA
  const keyBenefits = [
    { icon: <TrendingUp className="h-4 w-4" />, text: "40% average growth" },
    { icon: <ShieldCheck className="h-4 w-4" />, text: "Zero inventory risk" },
    { icon: <Truck className="h-4 w-4" />, text: "24-48 hour delivery" },
    { icon: <Star className="h-4 w-4" />, text: "5000+ styles" },
  ]

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8A0068] via-[#d4145a] to-[#7928CA] z-0" />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          background: `radial-gradient(circle at ${50 + scrollY * 0.02}% ${50 + scrollY * 0.01}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
        }}
      />

      {/* Network graphic overlay */}
      <div className="absolute inset-0 opacity-20 z-0">
        <EnhancedImage
          src="/interconnected-nodes.png"
          alt="Network connection visualization representing the interconnected fashion retail network across rural India"
          fill
          className="object-cover"
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              y: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2 + Math.random() * 3,
                ease: "easeInOut",
              },
              opacity: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2 + Math.random() * 3,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm shadow-lg">
              <Star className="h-3.5 w-3.5 mr-1.5 text-yellow-300" /> Revolutionizing Fashion Retail in India
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
              Transforming Rural India's
              <br />
              <span className="relative">
                Fashion Landscape
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unlocking a <span className="font-semibold text-yellow-300">₹200+ Billion</span> opportunity by connecting
            <span className="relative inline-block mx-2">
              <span className="relative z-10">100,000+</span>
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-brand-accent/30 -z-0" />
            </span>
            retailers across rural India with premium fashion brands
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={handleDemoClick}
              disabled={isLoading}
              className="text-base px-8 py-7 font-semibold bg-white hover:bg-white/90 text-[#d4145a] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#d4145a]"
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
                  Join the Revolution <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              )}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "/solutions")}
            >
              Discover Our Platform
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {keyBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center mr-2 flex-shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-white text-sm font-medium whitespace-nowrap">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trusted by section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-[#8A0068] via-[#d4145a] to-[#7928CA] px-4 text-sm text-white/80 uppercase tracking-widest font-medium">
                Empowering Rural Retailers Across India
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="opacity-70 hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.05, opacity: 1 }}
              >
                <EnhancedImage
                  src={`/placeholder.svg?height=40&width=120&query=indian%20rural%20fashion%20retail%20logo%20${i}%20white`}
                  alt={`Fashion retail partner ${i} from rural India`}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Curved bottom design with gradient */}
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
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-1/4 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: [0, -15, 0],
          opacity: 0.6,
        }}
        transition={{
          y: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          },
          opacity: { duration: 1 },
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-10 md:right-20 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: [0, -20, 0],
          opacity: 0.6,
        }}
        transition={{
          y: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut",
            delay: 1,
          },
          opacity: { duration: 1, delay: 0.5 },
        }}
      />
    </section>
  )
}
