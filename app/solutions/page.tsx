"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { BarChart3, LineChart, TrendingUp, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import FadeInSection from "@/components/fade-in-section"
import { VideoBackground } from "@/components/ui/video-background"
import { FeatureComparison } from "@/components/feature-comparison"
import { SolutionShowcase } from "@/components/solution-showcase"
import { InteractiveFeatureCards } from "@/components/interactive-feature-cards"

// Animated particles component
const FloatingParticles = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

// Wave divider component
const WaveDivider = ({ className, inverted = false }: { className?: string; inverted?: boolean }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-16 md:h-24 ${inverted ? "rotate-180" : ""}`}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-background"
        ></path>
      </svg>
    </div>
  )
}

export default function SolutionsPage() {
  const [isLoading, setIsLoading] = useState({
    demo: false,
    contact: false,
  })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDemoClick = () => {
    setIsLoading((prev) => ({ ...prev, demo: true }))
    setTimeout(() => {
      window.location.href = "/contact?demo=true"
    }, 1000)
  }

  const handleContactClick = () => {
    setIsLoading((prev) => ({ ...prev, contact: true }))
    setTimeout(() => {
      window.location.href = "/contact"
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <VideoBackground
          src="/videos/retail-analytics.mp4"
          overlayOpacity={0.85}
          overlayColor="linear-gradient(135deg, rgba(138,0,104,0.95) 0%, rgba(212,20,90,0.95) 50%, rgba(121,40,202,0.95) 100%)"
        />
        <FloatingParticles />

        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-white/90 font-medium">Transforming Rural Fashion Retail</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
                  Comprehensive Solutions for Fashion Retailers
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our integrated platform provides everything you need to streamline operations, reduce risk, and scale
                your retail business in rural India.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <ButtonWithFeedback
                  size="lg"
                  onClick={handleDemoClick}
                  isLoading={isLoading.demo}
                  loadingText="Scheduling demo..."
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                >
                  Schedule a Demo
                </ButtonWithFeedback>

                <ButtonWithFeedback
                  size="lg"
                  variant="outline"
                  onClick={handleContactClick}
                  isLoading={isLoading.contact}
                  loadingText="Connecting..."
                  className="text-white border-white hover:bg-white/10 transition-all duration-300"
                >
                  Contact Sales
                </ButtonWithFeedback>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20">
                  <Image
                    src="/images/solutions/analytics-dashboard.png"
                    alt="Comprehensive fashion retail analytics dashboard showing sales metrics, inventory status, and business performance indicators - Solutions Hero section"
                    width={800}
                    height={600}
                    className="w-full h-auto mix-blend-luminosity opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/20 to-purple-600/20"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-70 animate-pulse-slow"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Wave divider */}
      <WaveDivider className="bg-gradient-to-r from-pink-600 to-purple-600" />

      {/* Core Solutions - Data Infographic */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <FloatingParticles className="opacity-30" />

        <div className="container px-4 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-600/10 to-purple-600/10 px-4 py-1 text-sm font-medium text-pink-600 ring-1 ring-inset ring-pink-600/20 mb-4">
                Core Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                  Designed for Fashion Retailers in Rural India
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mx-auto mt-4 mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Our platform addresses the unique challenges faced by fashion retailers in rural markets, providing
                tailored solutions that drive growth and efficiency.
              </p>
            </div>
          </FadeInSection>

          <FeatureComparison
            title="How We're Different"
            subtitle="Our approach eliminates traditional retail challenges"
            traditionalTitle="Traditional Wholesale"
            ourTitle="Our Platform"
            features={[
              {
                name: "Inventory Risk",
                description: "Financial exposure from unsold stock",
                traditional: true,
                our: false,
              },
              {
                name: "Minimum Order Quantities",
                description: "Large upfront purchases required",
                traditional: true,
                our: false,
              },
              {
                name: "Market Analytics",
                description: "Data-driven decision making",
                traditional: false,
                our: true,
              },
              {
                name: "Supply Chain Visibility",
                description: "End-to-end tracking and management",
                traditional: false,
                our: true,
              },
              {
                name: "Growth Support",
                description: "Tools and resources for scaling",
                traditional: false,
                our: true,
              },
            ]}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl overflow-hidden"
          />

          <div className="mt-16">
            <SolutionShowcase
              solutions={[
                {
                  title: "Risk-Free Logistics",
                  description:
                    "Eliminate inventory risk with our revolutionary model that ensures you only pay for what sells.",
                  image: "/automated-warehouse-efficiency.png",
                  features: [
                    "No upfront inventory investment",
                    "Flexible payment terms",
                    "Managed warehousing and distribution",
                    "Rapid restocking of bestsellers",
                  ],
                  color: "pink-600",
                },
                {
                  title: "Supply Chain Management",
                  description:
                    "Streamline your entire supply chain from sourcing to delivery with our integrated platform.",
                  image: "/digital-supply-chain-overview.png",
                  features: [
                    "End-to-end visibility",
                    "Automated ordering",
                    "Quality control processes",
                    "Optimized delivery routes",
                  ],
                  color: "purple-600",
                },
                {
                  title: "Business Intelligence",
                  description:
                    "Make data-driven decisions with comprehensive analytics that reveal insights and opportunities.",
                  image: "/fashion-retail-insights.png",
                  features: [
                    "Sales performance tracking",
                    "Customer behavior analysis",
                    "Market trend identification",
                    "Predictive inventory forecasting",
                  ],
                  color: "pink-600",
                },
              ]}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl overflow-hidden p-8"
            />
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider className="bg-gradient-to-r from-purple-600 to-pink-600" inverted={true} />

      {/* Interactive Feature Cards */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background/80 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <FloatingParticles className="opacity-30" />

        <div className="container px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-4 py-1 text-sm font-medium text-purple-600 ring-1 ring-inset ring-purple-600/20 mb-4">
              Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Key Platform Capabilities
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Explore the powerful features that drive retail success in rural India's unique market conditions.
            </p>
          </div>

          <InteractiveFeatureCards
            features={[
              {
                title: "Inventory Management",
                description:
                  "Real-time tracking, low-stock alerts, and automated reordering to optimize your inventory.",
                icon: <BarChart3 className="h-6 w-6" />,
                image: "/images/inventory-management-retail.png",
                color: "pink-600",
                alt: "Fashion retail inventory management system showing staff using digital tools to track clothing items with organized racks in the background - Key Platform Capabilities section",
              },
              {
                title: "Sales Analytics",
                description:
                  "Comprehensive dashboards and reports to track performance and identify growth opportunities.",
                icon: <LineChart className="h-6 w-6" />,
                image: "/images/sales-analytics-dashboard.png",
                color: "purple-600",
                alt: "Fashion retail sales analytics dashboard displaying performance metrics, trend charts, and KPIs for clothing sales - Key Platform Capabilities section",
              },
              {
                title: "Customer Insights",
                description: "Understand your customers better with detailed demographic and behavioral data.",
                icon: <Users className="h-6 w-6" />,
                image: "/images/customer-insights-retail.png",
                color: "pink-600",
                alt: "Fashion retail customer segmentation analysis showing demographic data, shopping patterns, and preference insights - Key Platform Capabilities section",
              },
              {
                title: "Growth Tools",
                description: "Access marketing templates, promotion strategies, and business expansion resources.",
                icon: <TrendingUp className="h-6 w-6" />,
                image: "/images/retail-growth-strategies.png",
                color: "purple-600",
                alt: "Fashion retailer planning business expansion with marketing materials, growth charts, and promotional strategy documents - Key Platform Capabilities section",
              },
            ]}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl overflow-hidden p-8"
          />
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider className="bg-gradient-to-r from-pink-600 to-purple-600" />

      {/* CTA Section with Video Background */}
      <section className="py-20 relative overflow-hidden">
        <VideoBackground
          src="/videos/fashion-retail.mp4"
          overlayOpacity={0.85}
          overlayColor="linear-gradient(135deg, rgba(138,0,104,0.95) 0%, rgba(212,20,90,0.95) 50%, rgba(121,40,202,0.95) 100%)"
        />
        <FloatingParticles />

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
                Ready to Transform Your Retail Business?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join hundreds of successful retailers across rural India who have revolutionized their businesses with our
              platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/20 text-base px-8 py-6"
                onClick={handleDemoClick}
              >
                Schedule a Demo
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 transition-all duration-300 text-base px-8 py-6"
                onClick={handleContactClick}
              >
                Contact Sales
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-white/70 mb-4">Trusted by retailers across rural India</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-bold">500+</span>
                  <span className="text-white/70 ml-2">Retailers</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-bold">50+</span>
                  <span className="text-white/70 ml-2">Districts</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-bold">10+</span>
                  <span className="text-white/70 ml-2">States</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
