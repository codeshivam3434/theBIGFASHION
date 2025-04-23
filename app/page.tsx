"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Truck,
  Zap,
  Users,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Star,
  Clock,
  Award,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import { HomePageJsonLd, ProductJsonLd, FAQJsonLd } from "./structured-data"
import ScrollToTop from "@/components/scroll-to-top"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [isLoading, setIsLoading] = useState({
    demo: false,
    contact: false,
  })
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  // Intersection observer hooks for animations
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Auto-rotate testimonials
  useEffect(() => {
    if (!testimonialsInView) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonialsInView])

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

  // Testimonials with consistent image sizing
  const testimonials = [
    {
      quote:
        "This platform completely transformed our retail operations. We've seen a 40% increase in sales and 60% reduction in stockouts.",
      name: "Rajesh Kumar",
      position: "Owner, Fashion Hub Lucknow",
      image: "/confident-indian-businessman.png",
      rating: 5,
      metrics: "40% sales increase",
    },
    {
      quote:
        "The risk-free logistics model allowed us to expand our product range without increasing our inventory costs. Game changer!",
      name: "Priya Sharma",
      position: "Director, Style Studio Kanpur",
      image: "/confident-indian-professional.png",
      rating: 5,
      metrics: "2x product range",
    },
    {
      quote:
        "Their analytics tools helped us identify trends we never would have seen. Our business has grown 35% in just six months.",
      name: "Amit Singh",
      position: "Founder, Trendsetter Varanasi",
      image: "/vibrant-startup-huddle.png",
      rating: 5,
      metrics: "35% growth in 6 months",
    },
  ]

  // Key metrics
  const metrics = [
    { value: "500+", label: "Retail Partners", icon: <Users className="h-5 w-5 text-primary" /> },
    { value: "40%", label: "Avg. Growth Rate", icon: <TrendingUp className="h-5 w-5 text-primary" /> },
    { value: "20+", label: "Cities Served", icon: <Truck className="h-5 w-5 text-primary" /> },
    { value: "₹0", label: "Inventory Risk", icon: <ShieldCheck className="h-5 w-5 text-primary" /> },
  ]

  // Core features
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Zero Financial Risk",
      description:
        "Our revolutionary pay-for-what-sells model means you never pay for unsold inventory, eliminating your biggest business risk.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Data-Driven Decisions",
      description:
        "Access powerful analytics that predict local trends and customer preferences before your competitors.",
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Local Logistics Network",
      description:
        "Our specialized delivery network reaches 20+ states with most deliveries arriving within 24-48 hours.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Proven Growth Results",
      description: "Our partners see an average of 40% business growth within the first year of using our platform.",
    },
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <HomePageJsonLd />
      <ProductJsonLd />
      <FAQJsonLd />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-white to-gray-50"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Animated gradient accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-purple-500/5 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-primary/10 rounded-tr-full blur-3xl"></div>

        <motion.div className="container relative z-20 px-4 py-16 md:py-24" style={{ opacity, scale, y }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" /> India's #1 Fashion Retail Platform
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Grow Your Retail Business <span className="text-primary">Without Financial Risk</span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our revolutionary platform helps fashion retailers in Tier 2 & 3 cities increase sales by 40% while
                eliminating inventory risk. Join 500+ successful retailers today.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  onClick={handleDemoClick}
                  disabled={isLoading.demo}
                  className="text-base px-8 py-6 font-semibold bg-primary hover:bg-primary/90 text-white"
                >
                  {isLoading.demo ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                      Scheduling demo...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-base text-gray-800 border-gray-300 hover:bg-gray-100 py-6"
                >
                  <Link href="/solutions">See How It Works</Link>
                </Button>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  "500+ retailers trust us",
                  "Serving 20+ cities in UP",
                  "40% average growth for partners",
                  "Zero inventory risk",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm whitespace-nowrap">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                <EnhancedImage
                  src="/fashion-retail-dashboard.png"
                  alt="BIG FASHION retail analytics dashboard showing sales performance, inventory metrics, and trend forecasting for fashion retailers"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  quality="high"
                  rounded="lg"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 flex items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="bg-green-100 rounded-full p-2 mr-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Sales Growth</p>
                  <p className="font-bold text-green-600">+42%</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-4 bg-white rounded-lg shadow-lg p-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center mb-1">
                  <ShieldCheck className="h-4 w-4 text-primary mr-1" />
                  <p className="text-xs font-medium">Risk-Free Model</p>
                </div>
                <p className="text-xs text-gray-500">Pay only for what sells</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowRight className="h-6 w-6 rotate-90 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Trusted by Leading Retailers Across India</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <EnhancedImage
                  src={`/placeholder.svg?height=40&width=120&query=fashion%20retail%20logo%20${i}`}
                  alt={`Fashion retail partner ${i}`}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="rounded-full bg-primary/10 p-3">{metric.icon}</div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <motion.span
              className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why Choose BIG FASHION
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Revolutionizing Fashion Retail in Tier 2 & 3 Cities
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our platform is specifically designed to solve the unique challenges of fashion retailers in emerging
              markets
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="rounded-full bg-primary/10 p-4 w-fit mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/solutions" className="inline-flex items-center text-primary font-medium hover:underline">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Showcase Section */}
      <section ref={solutionRef} className="py-24 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <EnhancedImage
            src="/fashion-retail-insights.png"
            alt="Comprehensive retail analytics dashboard showing sales performance, inventory metrics, and customer insights for fashion retailers"
            fill
            quality="high"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70 z-10"></div>
        </div>

        <div className="container px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={solutionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-flex items-center rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/30 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our Solution
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The Ultimate Retail Tech Platform
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We've built a comprehensive platform that addresses every challenge facing fashion retailers in Tier 2 &
                3 cities.
              </motion.p>

              <div className="space-y-6">
                {[
                  {
                    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
                    title: "Risk-Free Logistics",
                    description:
                      "Our revolutionary model eliminates inventory risk, ensuring you only pay for what sells.",
                  },
                  {
                    icon: <BarChart3 className="h-6 w-6 text-primary" />,
                    title: "Advanced Analytics",
                    description:
                      "Make data-driven decisions with real-time insights into customer preferences and market trends.",
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-primary" />,
                    title: "Streamlined Operations",
                    description: "Automate inventory management, order processing, and supply chain logistics.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={solutionInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="rounded-full bg-primary/20 p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
                  <Link href="/solutions">
                    <span className="flex items-center">
                      Explore All Features <ArrowUpRight className="ml-2 h-5 w-5" />
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={solutionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
                <EnhancedImage
                  src="/fashion-retail-dashboard.png"
                  alt="Detailed view of the BIG FASHION retail analytics dashboard showing comprehensive sales data, inventory management tools, and predictive trend analysis"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  quality="high"
                  rounded="lg"
                />

                {/* Interactive elements overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="text-white font-semibold">Real-time Dashboard</h4>
                        <p className="text-gray-300 text-sm">Updated every 15 minutes</p>
                      </div>
                      <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                        Live Demo
                      </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Sales", value: "₹42,580", trend: "+18%" },
                        { label: "Inventory", value: "324 items", trend: "Optimal" },
                        { label: "Customers", value: "1,240", trend: "+22%" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
                          <p className="text-gray-400 text-xs">{stat.label}</p>
                          <p className="text-white font-medium">{stat.value}</p>
                          <p className="text-green-400 text-xs">{stat.trend}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to transform your retail business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Connect",
                description: "Schedule a consultation with our team to discuss your business needs.",
                icon: <Users className="h-6 w-6 text-primary" />,
              },
              {
                number: "02",
                title: "Onboard",
                description: "We'll set up your account and integrate our platform with your business.",
                icon: <Zap className="h-6 w-6 text-primary" />,
              },
              {
                number: "03",
                title: "Optimize",
                description: "Use our tools to streamline operations and make data-driven decisions.",
                icon: <BarChart3 className="h-6 w-6 text-primary" />,
              },
              {
                number: "04",
                title: "Scale",
                description: "Grow your business with our ongoing support and advanced features.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -top-6 -left-6 text-9xl font-bold text-gray-100 select-none">
                  {step.number}
                </div>
                <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 relative z-10">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 flex-grow relative z-10">{step.description}</p>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={handleDemoClick} className="bg-primary hover:bg-primary/90 text-white" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 bg-gray-50 overflow-hidden">
        <div className="container px-4">
          <div className="text-center mb-16">
            <motion.span
              className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Success Stories
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              What Our Retail Partners Say
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join hundreds of successful retailers who have revolutionized their businesses
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-10 -left-4 md:-left-10 text-9xl text-primary opacity-10 pointer-events-none">
              "
            </div>
            <div className="absolute bottom-10 -right-4 md:-right-10 text-9xl text-primary opacity-10 pointer-events-none rotate-180">
              "
            </div>

            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <AnimatePresence mode="wait">
                {testimonials.map(
                  (testimonial, index) =>
                    activeTestimonial === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                      >
                        <div className="flex mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>

                        <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 italic">
                          "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-4">
                          <div className="rounded-full overflow-hidden border-2 border-primary/20 h-16 w-16 flex-shrink-0">
                            <EnhancedImage
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.position}</p>
                          </div>
                          <div className="ml-4 pl-4 border-l border-gray-200">
                            <div className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                              {testimonial.metrics}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>

              <div className="flex justify-center mt-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-3 w-3 rounded-full mx-1 transition-all duration-300 ${
                      activeTestimonial === index ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/partners"
              className="inline-flex items-center text-primary font-medium hover:underline text-lg"
            >
              Read more success stories <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EnhancedImage
            src="/tech-chic-boutique.png"
            alt="Modern fashion retail store with digital displays and inventory management system showing the BIG FASHION platform in action"
            fill
            quality="high"
            objectFit="cover"
            className="brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10"></div>
        </div>

        <div className="container px-4 relative z-20">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white bg-black/30 p-10 rounded-2xl backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Transform Your Retail Business?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join hundreds of successful retailers who have revolutionized their businesses with our platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-white text-primary hover:bg-gray-100"
                onClick={handleDemoClick}
              >
                {isLoading.demo ? (
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
                    Scheduling demo...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-base text-white border-white hover:bg-white/20 py-6"
              >
                <Link href="/solutions">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-white/80 text-sm">Setup in 24 hours</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span className="text-white/80 text-sm">30-day satisfaction guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-white/80 text-sm">Free onboarding support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </>
  )
}
