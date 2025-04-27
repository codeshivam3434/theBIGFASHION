"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useInView } from "framer-motion"
import { ShieldCheck, TrendingUp, Truck, Users, ChevronRight } from "lucide-react"
import { HomePageJsonLd, ProductJsonLd, FAQJsonLd } from "./structured-data"
import ScrollToTop from "@/components/scroll-to-top"
import FashionHero from "@/components/fashion-hero"
import { AnimatedProcessFlow } from "@/components/animated-process-flow"
import { Button } from "@/components/ui/button"
import { TestimonialShowcase } from "@/components/testimonial-showcase"
import { RetailerAvatarGroup } from "@/components/retailer-avatar-group"

// Animated counter component
function AnimatedCounter({ value, duration = 2000, className = "", prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = Number.parseInt(value)
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <div ref={countRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState({
    demo: false,
    contact: false,
  })
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  })

  // Intersection observer hooks for animations
  const statsRef = useRef(null)
  const featuresRef = useRef(null)

  const [statsInView, setStatsInView] = useState(false)
  const [featuresInView, setFeaturesInView] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStatsInView(true)
          statsObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const featuresObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFeaturesInView(true)
          featuresObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (statsRef.current) statsObserver.observe(statsRef.current)
    if (featuresRef.current) featuresObserver.observe(featuresRef.current)

    return () => {
      statsObserver.disconnect()
      featuresObserver.disconnect()
    }
  }, [])

  const handleDemoClick = () => {
    setIsLoading((prev) => ({ ...prev, demo: true }))
    setTimeout(() => {
      window.location.href = "/contact?demo=true"
    }, 800)
  }

  const handleContactClick = () => {
    setIsLoading((prev) => ({ ...prev, contact: true }))
    setTimeout(() => {
      window.location.href = "/contact"
    }, 800)
  }

  // Key metrics with numeric values for animation
  const metrics = [
    {
      value: "30",
      numericValue: 30,
      suffix: "",
      label: "Retail Partners",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      value: "40%",
      numericValue: 40,
      suffix: "%",
      label: "Avg. Growth Rate",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
    },
    {
      value: "3",
      numericValue: 3,
      suffix: "",
      label: "Cities Served",
      icon: <Truck className="h-5 w-5 text-primary" />,
    },
    {
      value: "₹0",
      numericValue: 0,
      prefix: "₹",
      label: "Inventory Risk",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    },
  ]

  // Product offerings with visual icons
  const productOfferings = [
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="30" fill="#FEF3F2" />
          <path
            d="M40 25C32.8203 25 27 30.8203 27 38C27 41.6719 28.5859 44.9844 31.1328 47.1875L40 55L48.8672 47.1875C51.4141 44.9844 53 41.6719 53 38C53 30.8203 47.1797 25 40 25ZM40 42C37.7969 42 36 40.2031 36 38C36 35.7969 37.7969 34 40 34C42.2031 34 44 35.7969 44 38C44 40.2031 42.2031 42 40 42Z"
            fill="#F04438"
          />
          <circle cx="40" cy="38" r="4" fill="#FEF3F2" />
          <circle cx="60" cy="30" r="4" fill="#F04438" fillOpacity="0.7" />
          <circle cx="65" cy="45" r="3" fill="#F04438" fillOpacity="0.5" />
          <circle cx="20" cy="30" r="4" fill="#F04438" fillOpacity="0.7" />
          <circle cx="15" cy="45" r="3" fill="#F04438" fillOpacity="0.5" />
          <circle cx="30" cy="60" r="3" fill="#F04438" fillOpacity="0.6" />
          <circle cx="50" cy="60" r="3" fill="#F04438" fillOpacity="0.6" />
          <path
            d="M40 25C40 25 35 15 25 20M40 25C40 25 45 15 55 20"
            stroke="#F04438"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <path
            d="M20 30C20 30 10 25 15 15M60 30C60 30 70 25 65 15"
            stroke="#F04438"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <path
            d="M15 45C15 45 5 45 5 35M65 45C65 45 75 45 75 35"
            stroke="#F04438"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <path
            d="M30 60C30 60 25 70 15 65M50 60C50 60 55 70 65 65"
            stroke="#F04438"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        </svg>
      ),
      title: "Fashion Supply Chain",
      description:
        "Largest rural B2B fashion eCommerce platform connecting brands directly to retailers across the country",
    },
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="30" height="30" rx="2" fill="#FDF4ED" />
          <rect x="32" y="32" width="16" height="16" rx="1" fill="#F79009" />
          <path d="M40 32V48" stroke="white" strokeWidth="2" />
          <path d="M48 40L32 40" stroke="white" strokeWidth="2" />
          <circle cx="60" cy="30" r="4" fill="#F79009" fillOpacity="0.7" />
          <circle cx="65" cy="45" r="3" fill="#F79009" fillOpacity="0.5" />
          <circle cx="20" cy="30" r="4" fill="#F79009" fillOpacity="0.7" />
          <circle cx="15" cy="45" r="3" fill="#F79009" fillOpacity="0.5" />
          <path d="M25 40H15M65 40H55" stroke="#F79009" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M40 25V15M40 65V55" stroke="#F79009" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 2" />
          <path
            d="M30 30L20 20M50 50L60 60"
            stroke="#F79009"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <path
            d="M50 30L60 20M30 50L20 60"
            stroke="#F79009"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        </svg>
      ),
      title: "Finance Solutions",
      description:
        "Innovative financial tools designed specifically for fashion retailers with zero-risk inventory financing",
    },
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="15" fill="#EFF8FF" />
          <path d="M40 25V55" stroke="#2E90FA" strokeWidth="2" />
          <path d="M55 40H25" stroke="#2E90FA" strokeWidth="2" />
          <circle cx="40" cy="40" r="5" fill="#2E90FA" />
          <circle cx="60" cy="30" r="3" fill="#2E90FA" fillOpacity="0.7" />
          <circle cx="65" cy="45" r="2" fill="#2E90FA" fillOpacity="0.5" />
          <circle cx="20" cy="30" r="3" fill="#2E90FA" fillOpacity="0.7" />
          <circle cx="15" cy="45" r="2" fill="#2E90FA" fillOpacity="0.5" />
          <circle cx="30" cy="60" r="2" fill="#2E90FA" fillOpacity="0.6" />
          <circle cx="50" cy="60" r="2" fill="#2E90FA" fillOpacity="0.6" />
          <circle cx="30" cy="20" r="2" fill="#2E90FA" fillOpacity="0.6" />
          <circle cx="50" cy="20" r="2" fill="#2E90FA" fillOpacity="0.6" />
          <path
            d="M40 40C40 40 50 30 60 30"
            stroke="#2E90FA"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <path
            d="M40 40C40 40 50 50 60 45"
            stroke="#2E90FA"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <path
            d="M40 40C40 40 30 50 20 45"
            stroke="#2E90FA"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <path
            d="M40 40C40 40 30 30 20 30"
            stroke="#2E90FA"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        </svg>
      ),
      title: "Operations Handling",
      description:
        "Comprehensive tools for inventory management, order processing, and business analytics tailored for fashion retail",
    },
  ]

  return (
    <main>
      <FashionHero />
      {/* Rest of the homepage content */}
      {/* Structured Data for SEO */}
      <HomePageJsonLd />
      <ProductJsonLd />
      <FAQJsonLd />

      {/* Hero Section */}

      {/* Rural Platform Diagram Section */}
      <section className="py-20 bg-gray-50 w-full overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center mb-12">
          <motion.span
            className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Platform
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            India's only rural B2B
            <br className="hidden sm:block" />
            fashion platform
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            BIGFASHION unlocks direct reach of fashion to
            <br className="hidden sm:block" />
            rural consumers through 10M+ stores
          </motion.p>
        </div>

        <div className="w-full max-w-6xl mx-auto px-2 md:px-4">
          {/* Desktop version - hidden on small screens */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blank%20diagram%20%285%29-KAZk449aqwuDO31JxCbQp5vX1XQo5s.png"
              alt="BIGFASHION ecosystem diagram showing the B2B fashion eCommerce platform"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Mobile version - only shown on small screens */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blank%20diagram%20%285%29-KAZk449aqwuDO31JxCbQp5vX1XQo5s.png"
                alt="BIGFASHION ecosystem diagram showing the B2B fashion eCommerce platform"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">Tap image to view details</p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section with Animated Counters */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <motion.span
              className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Our Impact
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Key Performance Metrics
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Delivering measurable results for fashion retailers
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3">{metric.icon}</div>
                </div>
                <AnimatedCounter
                  value={metric.numericValue}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  duration={2000}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                />
                <p className="text-sm text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Offerings Section */}
      <section ref={featuresRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <motion.span
              className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Our Solutions
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Product Offerings
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transformative solutions for your fashion business
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productOfferings.map((offering, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-300 h-full flex flex-col relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Clean border highlight effect */}
                <div className="absolute inset-0 border-2 border-primary/0 rounded-xl group-hover:border-primary/20 transition-all duration-300"></div>

                {/* Simplified icon container */}
                <div className="flex justify-center mb-8 relative z-10">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300"></div>
                    <div className="relative">{offering.icon}</div>
                  </div>
                </div>

                {/* Clean title with subtle hover effect */}
                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {offering.title}
                </h3>

                {/* Simplified description */}
                <p className="text-gray-600 text-center mb-6 relative z-10">{offering.description}</p>

                {/* Minimal learn more link */}
                <div className="mt-auto pt-4 border-t border-gray-100 text-center relative z-10">
                  <Link href="/solutions" className="inline-flex items-center text-primary font-medium group">
                    <span className="relative">
                      Learn more
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Replaced with Animated Process Flow */}
      <AnimatedProcessFlow />

      {/* Testimonials Section */}
      <TestimonialShowcase />

      {/* CTA Section - Similar to Solutions Page */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-24 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Animated circles */}
        <motion.div
          className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-10 mix-blend-overlay"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-white opacity-10 mix-blend-overlay"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm sm:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left">
                <div className="flex-1">
                  <motion.span
                    className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Ready to Transform Your Business?
                  </motion.span>
                  <motion.h2
                    className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Join India's Leading Fashion Retail Platform
                  </motion.h2>
                  <motion.p
                    className="mt-6 text-xl text-white/90"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Experience a retail revolution that eliminates inventory risk, unlocks a world of fashion, and
                    delivers it all to your doorstep. Join the future of retail today.
                  </motion.p>

                  <motion.div
                    className="mt-8 flex flex-wrap items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <RetailerAvatarGroup />
                    <p className="text-sm font-medium">Trusted by 30+ retailers across 3 cities</p>
                  </motion.div>
                </div>

                <motion.div
                  className="flex w-full flex-col space-y-4 lg:w-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-white px-8 py-6 text-lg font-bold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
                    onClick={handleDemoClick}
                  >
                    <span className="relative z-10">Schedule a Demo Now</span>
                    <span className="absolute bottom-0 left-0 h-1 w-full bg-primary transition-all duration-300 group-hover:h-2"></span>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/60 bg-transparent px-8 py-6 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white/80"
                    onClick={handleContactClick}
                  >
                    Contact Our Sales Team
                  </Button>

                  <p className="text-center text-sm text-white/80">No commitment required. Free consultation.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </main>
  )
}
