"use client"

import {
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Truck,
  Target,
  Heart,
  Shield,
  BarChart3,
  Package,
  Clock,
  ChevronDown,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import FadeInSection from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import ParallaxImage from "@/components/parallax-image"
import TeamSection from "@/components/team-section"
import { VideoBackground } from "@/components/ui/video-background"
import { ProcessFlow } from "@/components/process-flow"
import { AnimatedStats } from "@/components/animated-stats"
import { EnhancedImage } from "@/components/ui/enhanced-image"

export default function AboutPage() {
  // Core values with icons - using consistent styling
  const coreValues = [
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: "Innovation",
      description: "Constantly evolving our platform and services to meet the changing needs of fashion retailers.",
      color: "primary",
    },
    {
      icon: <Heart className="h-10 w-10 text-white" />,
      title: "Empowerment",
      description: "Providing retailers with the tools and insights they need to grow their businesses sustainably.",
      color: "primary",
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Integrity",
      description: "Building trust through transparent practices and ethical business relationships.",
      color: "primary",
    },
  ]

  // Key differentiators - retailer operations and supply chain
  const keyDifferentiators = [
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: "Seamless Retailer-Level Operations",
      features: [
        {
          title: "Intelligent Sales Management",
          description: "Real-time analytics and forecasting to optimize your sales strategy and maximize revenue.",
        },
        {
          title: "Smart Inventory Control",
          description: "Automated inventory tracking with low-stock alerts and reordering recommendations.",
        },
        {
          title: "Dead Stock Prevention",
          description:
            "Proactive identification of slow-moving items with actionable strategies to prevent dead stock.",
        },
        {
          title: "Trend-Forward Selections",
          description: "Curated collections based on market analysis and emerging fashion trends.",
        },
      ],
    },
    {
      icon: <Truck className="h-10 w-10 text-white" />,
      title: "Seamless Supply Chain",
      features: [
        {
          title: "Integrated Logistics Network",
          description: "End-to-end visibility of your orders from warehouse to store with real-time tracking.",
        },
        {
          title: "Door-to-Door Delivery",
          description: "Reliable delivery service to your storefront, even in remote locations across India.",
        },
        {
          title: "Flexible Ordering",
          description: "Customizable order quantities and delivery schedules to match your business needs.",
        },
        {
          title: "Quality Assurance",
          description: "Rigorous quality checks at every stage of the supply chain.",
        },
      ],
    },
  ]

  // Floating particles animation
  const FloatingParticles = ({ className = "", density = 20, size = { min: 10, max: 40 } }) => {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {[...Array(density)].map((_, i) => {
          const particleSize = Math.random() * (size.max - size.min) + size.min
          const left = Math.random() * 100
          const top = Math.random() * 100
          const duration = Math.random() * 15 + 10
          const delay = Math.random() * 5

          return (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                width: `${particleSize}px`,
                height: `${particleSize}px`,
                left: `${left}%`,
                top: `${top}%`,
                animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
              }}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center">
        <VideoBackground
          src="https://v0.blob.com/fashion-production-video.mp4"
          fallbackImage="/garment-warehouse-operations.png"
          overlayOpacity={0.9}
          overlayColor="from-purple-dark/95 via-magenta-dark/95 to-magenta/90"
          priority={true}
        />

        {/* Enhanced floating particles with different sizes and densities */}
        <FloatingParticles density={15} size={{ min: 20, max: 60 }} />
        <FloatingParticles density={25} size={{ min: 5, max: 15 }} className="opacity-70" />

        {/* Add this right after the FloatingParticles components */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-white/5 blur-[100px] rounded-full"></div>
        </div>

        {/* Decorative light beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-magenta/30 via-transparent to-transparent opacity-30 blur-3xl transform -rotate-12"></div>
          <div className="absolute top-0 right-1/4 w-1/2 h-full bg-gradient-to-b from-purple/30 via-transparent to-transparent opacity-30 blur-3xl transform rotate-12"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center text-white">
          {/* Animated badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
              <span className="mr-2 h-2 w-2 rounded-full bg-magenta animate-pulse"></span>
              Our Story
            </span>
          </motion.div>

          {/* Main heading with enhanced gradient and text shadow */}
          <motion.h1
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/95 drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing Fashion Wholesale in India
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-magenta via-purple to-magenta rounded-full mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Enhanced description box */}
          <motion.div
            className="mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="px-8 py-5 bg-gradient-to-r from-magenta-dark/70 to-purple-dark/70 backdrop-blur-xl rounded-xl border border-white/30 shadow-[0_10px_40px_-15px_rgba(255,255,255,0.2)]">
              <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
                Empowering retailers with technology, logistics, and market insights since 2018
              </p>
            </div>
          </motion.div>

          {/* Key stats highlights */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { value: "10,000+", label: "Retailers" },
              { value: "42%", label: "Efficiency Increase" },
              { value: "35%", label: "Cost Reduction" },
              { value: "28%", label: "Less Dead Stock" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transition: { duration: 0.2 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <span className="text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs md:text-sm text-white/90 mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <span className="text-white text-sm mb-2 font-medium">Discover Our Story</span>
            <div className="w-10 h-14 rounded-full border-2 border-white/50 flex justify-center items-start pt-3 relative">
              <motion.div
                className="w-1.5 h-3 bg-white rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              />
              <motion.div
                className="absolute -bottom-6"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              >
                <ChevronDown className="h-5 w-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Key Differentiators - FEATURED PROMINENTLY */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-dark via-background to-background"></div>
        <FloatingParticles className="opacity-30" />
        <div className="container relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-magenta/10 px-4 py-1 text-sm font-medium text-magenta ring-1 ring-inset ring-magenta/20 mb-4">
                Our Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-magenta-light to-purple-light">
                What Sets Us Apart
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-magenta to-purple rounded-full mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Our platform delivers two key advantages that transform how fashion retailers operate
              </p>
            </div>
          </FadeInSection>

          {keyDifferentiators.map((differentiator, index) => (
            <FadeInSection key={index} delay={index * 0.2}>
              <div className="mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-gradient-to-br from-magenta to-purple p-4 flex items-center justify-center shadow-lg shadow-magenta/20">
                        {differentiator.icon}
                      </div>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-magenta to-purple">
                        {differentiator.title}
                      </h3>
                    </div>
                    <div className="hidden md:block">
                      <EnhancedImage
                        src={index === 0 ? "/retail-operations-dashboard.png" : "/supply-chain-logistics.png"}
                        alt={differentiator.title}
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg border border-magenta/20 transition-all duration-300 hover:shadow-xl hover:shadow-magenta/10"
                        glowColor="magenta"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {differentiator.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/10 relative overflow-hidden group"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(212, 20, 90, 0.2)" }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Gradient border on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-magenta to-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                          <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-full bg-gradient-to-br from-magenta to-purple p-2 flex-shrink-0">
                              {featureIndex === 0 ? (
                                <BarChart3 className="h-4 w-4 text-white" />
                              ) : featureIndex === 1 ? (
                                <Package className="h-4 w-4 text-white" />
                              ) : featureIndex === 2 ? (
                                <Clock className="h-4 w-4 text-white" />
                              ) : (
                                <TrendingUp className="h-4 w-4 text-white" />
                              )}
                            </div>
                            <h4 className="font-semibold text-magenta-light">{feature.title}</h4>
                          </div>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
            fill="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="url(#gradient-wave)"
              opacity=".25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="url(#gradient-wave)"
              opacity=".5"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="url(#gradient-wave)"
            />
            <defs>
              <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(121, 40, 202, 0.3)" />
                <stop offset="50%" stopColor="rgba(212, 20, 90, 0.3)" />
                <stop offset="100%" stopColor="rgba(138, 0, 104, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-magenta/10 px-4 py-1 text-sm font-medium text-magenta ring-1 ring-inset ring-magenta/20">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-magenta via-magenta-light to-purple-light">
                  Transforming India's Fashion Retail Ecosystem
                </h2>
                <p className="text-lg text-muted-foreground">
                  At THE BIG FASHION, we're on a mission to revolutionize how clothing reaches India's vast network of
                  retailers. We combine cutting-edge technology with deep industry expertise to create a seamless
                  wholesale experience.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-3 text-magenta-light">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To create a future where every fashion retailer in India, regardless of size, has access to the
                    inventory, tools, and insights needed to build a thriving business.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <EnhancedImage
                  src="/digital-fashion-hub.png"
                  alt="Our mission in action"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  rounded="xl"
                  glowColor="magenta"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-magenta-dark/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <span className="text-sm font-medium text-white/80">Our Commitment</span>
                    <h3 className="text-xl font-bold mt-1">Bridging the gap between manufacturers and retailers</h3>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-magenta opacity-60"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-magenta opacity-60"></div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Core Values - WITH CONSISTENT STYLING */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-dark/5 to-magenta-dark/5"></div>
        <FloatingParticles className="opacity-20" />
        <div className="container relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-magenta/10 px-4 py-1 text-sm font-medium text-magenta ring-1 ring-inset ring-magenta/20 mb-4">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-magenta-light to-purple-light">
                Core Values That Drive Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-magenta to-purple rounded-full mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                These principles guide every decision we make and shape how we serve our retail partners.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <FadeInSection key={index} delay={index * 0.15}>
                <motion.div
                  className="rounded-xl p-8 shadow-lg h-full flex flex-col relative overflow-hidden group"
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-magenta-dark/90 via-magenta/80 to-purple/90 opacity-90"></div>

                  {/* Animated particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => {
                      const size = Math.random() * 20 + 5
                      const left = Math.random() * 100
                      const top = Math.random() * 100
                      const duration = Math.random() * 3 + 6
                      const delay = Math.random() * 3

                      return (
                        <div
                          key={i}
                          className="absolute rounded-full bg-white/10"
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${left}%`,
                            top: `${top}%`,
                            animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
                          }}
                        />
                      )
                    })}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="rounded-full bg-white/10 backdrop-blur-sm p-4 w-16 h-16 flex items-center justify-center mb-6 mt-4 border border-white/20">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-white/80 flex-grow">{value.description}</p>

                    {/* Decorative element */}
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-white/80 mr-2"></div>
                        <div className="w-3 h-2 rounded-full bg-white/60 mr-2"></div>
                        <div className="w-4 h-2 rounded-full bg-white/40"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden transform rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
            fill="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="url(#gradient-wave-2)"
              opacity=".25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="url(#gradient-wave-2)"
              opacity=".5"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="url(#gradient-wave-2)"
            />
            <defs>
              <linearGradient id="gradient-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(121, 40, 202, 0.3)" />
                <stop offset="50%" stopColor="rgba(212, 20, 90, 0.3)" />
                <stop offset="100%" stopColor="rgba(138, 0, 104, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div className="relative group">
                <ParallaxImage
                  src="/fashion-startup-warehouse.png"
                  alt="Our founders"
                  width={800}
                  height={800}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-xl"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-magenta-dark/40 via-transparent to-purple/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-magenta opacity-60 rounded-tl-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-purple opacity-60 rounded-br-2xl"></div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div>
                <span className="inline-flex items-center rounded-full bg-magenta/10 px-4 py-1 text-sm font-medium text-magenta ring-1 ring-inset ring-magenta/20 mb-4">
                  Our Journey
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-magenta-light to-purple-light">
                  From Vision to Revolution
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="rounded-full bg-gradient-to-br from-magenta to-purple p-3 mt-1 shadow-lg shadow-magenta/20 transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-magenta-light">The Beginning (2018)</h3>
                      <p className="text-muted-foreground">
                        Founded with a vision to transform how clothing reaches India's vast network of retailers,
                        addressing the inefficiencies in the traditional wholesale model.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="rounded-full bg-gradient-to-br from-magenta to-purple p-3 mt-1 shadow-lg shadow-magenta/20 transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-magenta-light">Growth & Expansion (2019-2021)</h3>
                      <p className="text-muted-foreground">
                        Grew from a small operation to India's fastest-growing wholesaler, expanding our network to
                        cover major fashion hubs across the country.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="rounded-full bg-gradient-to-br from-magenta to-purple p-3 mt-1 shadow-lg shadow-magenta/20 transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-magenta-light">Digital Transformation (2022-Present)</h3>
                      <p className="text-muted-foreground">
                        Built a modern supply chain platform bringing efficiency, transparency, and growth opportunities
                        to thousands of fashion retailers across India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Trust Factors - ANIMATED STATS */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta-dark/10 via-magenta/20 to-purple/30"></div>
        <FloatingParticles className="opacity-30" />
        <div className="container relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-flex items-center rounded-full bg-magenta/10 px-4 py-1 text-sm font-medium text-magenta ring-1 ring-inset ring-magenta/20 mb-4">
                Our Impact
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-magenta via-magenta-light to-purple-light">
                Why Retailers Trust Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-magenta to-purple rounded-full mt-4 mb-6"></div>
            </div>
          </FadeInSection>

          <AnimatedStats
            stats={[
              {
                value: 10000,
                suffix: "+",
                label: "Retailers Served Across India",
                color: "magenta",
              },
              {
                value: 42,
                suffix: "%",
                label: "Average Increase in Efficiency",
                color: "magenta",
              },
              {
                value: 35,
                suffix: "%",
                label: "Reduction in Operational Costs",
                color: "magenta",
              },
              {
                value: 28,
                suffix: "%",
                label: "Decrease in Dead Stock",
                color: "magenta",
              },
            ]}
            cardClassName="bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl"
            textClassName="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            labelClassName="text-white/70"
          />
        </div>
      </section>

      {/* Our Process - Process Flow */}
      <ProcessFlow
        title="From Design to Delivery"
        subtitle="Our approach to creating quality fashion products"
        steps={[
          {
            number: "1",
            title: "Design & Curation",
            description:
              "Blending traditional craftsmanship with contemporary trends to create collections that resonate with Indian consumers.",
            icon: <Award className="h-6 w-6 text-white" />,
          },
          {
            number: "2",
            title: "Manufacturing",
            description:
              "Working with ethical factories that maintain strict quality standards and fair labor practices.",
            icon: <Target className="h-6 w-6 text-white" />,
          },
          {
            number: "3",
            title: "Distribution",
            description:
              "Leveraging our efficient logistics network to ensure timely delivery across India, even to remote locations.",
            icon: <Truck className="h-6 w-6 text-white" />,
          },
          {
            number: "4",
            title: "Retailer Support",
            description:
              "Providing ongoing analytics, inventory management tools, and business insights to help retailers thrive.",
            icon: <Users className="h-6 w-6 text-white" />,
          },
        ]}
        className="py-20 relative overflow-hidden"
        bgClassName="bg-gradient-to-b from-background via-magenta-dark/5 to-purple-dark/10"
        titleClassName="bg-clip-text text-transparent bg-gradient-to-r from-magenta via-magenta-light to-purple-light"
        stepNumberClassName="bg-gradient-to-br from-magenta to-purple text-white"
        stepTitleClassName="text-magenta-light"
        stepIconClassName="bg-gradient-to-br from-magenta to-purple"
        stepArrowClassName="text-magenta-light"
      />

      {/* Team Section */}
      <TeamSection
        titleClassName="bg-clip-text text-transparent bg-gradient-to-r from-magenta via-magenta-light to-purple-light"
        cardClassName="bg-white/5 backdrop-blur-sm border border-white/10"
        nameClassName="text-magenta-light"
        socialIconClassName="bg-gradient-to-br from-magenta to-purple text-white"
      />

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-magenta-dark via-magenta to-purple opacity-90" />
        </div>
        <FloatingParticles />
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to join the retail revolution?
              </motion.h2>
              <motion.p
                className="mt-4 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of successful retailers who have partnered with THE BIG FASHION.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-white text-magenta hover:bg-white/90 hover:text-magenta-dark font-medium text-base px-8 py-6 h-auto"
                asChild
              >
                <Link href="/partners">Become a Partner</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
