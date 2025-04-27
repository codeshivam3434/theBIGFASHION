"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, ShieldCheck, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedImage } from "@/components/ui/enhanced-image"

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(false)

  const handleDemoClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = "/contact?demo=true"
    }, 800)
  }

  // Key benefits that appear below the CTA
  const keyBenefits = [
    { icon: <TrendingUp className="h-4 w-4 text-white" />, text: "40% average growth" },
    { icon: <ShieldCheck className="h-4 w-4 text-white" />, text: "Zero inventory risk" },
    { icon: <Truck className="h-4 w-4 text-white" />, text: "Serving 3 cities" },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Network graphic overlay */}
      <div className="absolute inset-0 opacity-20">
        <EnhancedImage
          src="/interconnected-nodes.png"
          alt="Network connection visualization representing the interconnected fashion retail network across rural India"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
              India's Leading Fashion B2B Platform
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            B2B Fashion Platform
            <br />
            for Rural India
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unlocking ₹100B+ fashion retail opportunity in rural India with zero inventory risk
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={handleDemoClick}
              disabled={isLoading}
              className="text-base px-8 py-6 font-semibold bg-white hover:bg-white/90 text-fashion-primary"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary"
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
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {keyBenefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
              >
                {benefit.icon}
                <span className="text-white text-sm ml-2 whitespace-nowrap font-medium">{benefit.text}</span>
              </div>
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
          <p className="text-white/80 text-sm uppercase tracking-wider mb-6">
            Trusted by 30 leading retailers across 3 cities
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="opacity-70 hover:opacity-100 transition-all duration-300">
                <EnhancedImage
                  src={`/placeholder.svg?height=40&width=120&query=indian%20rural%20fashion%20retail%20logo%20${i}%20white`}
                  alt={`Fashion retail partner ${i} from rural India`}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
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

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-1/4 left-10 md:left-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/5 backdrop-blur-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: [0, -15, 0],
          opacity: 1,
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
        className="absolute bottom-1/3 right-10 md:right-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/5 backdrop-blur-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: [0, -20, 0],
          opacity: 1,
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
