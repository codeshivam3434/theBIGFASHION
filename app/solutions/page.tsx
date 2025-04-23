"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import FadeInSection from "@/components/fade-in-section"
import { VideoBackground } from "@/components/ui/video-background"
import { FeatureComparison } from "@/components/feature-comparison"
import { SolutionShowcase } from "@/components/solution-showcase"
import { LineChart, TrendingUp, Users } from "lucide-react"
import { InteractiveFeatureCards } from "@/components/interactive-feature-cards"

export default function SolutionsPage() {
  const [isLoading, setIsLoading] = useState({
    demo: false,
    contact: false,
  })

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
        <VideoBackground src="/videos/retail-analytics.mp4" overlayOpacity={0.9} overlayColor="#000" />
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Comprehensive Solutions for Fashion Retailers
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our integrated platform provides everything you need to streamline operations, reduce risk, and scale
                your retail business.
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
                >
                  Schedule a Demo
                </ButtonWithFeedback>
                <ButtonWithFeedback
                  size="lg"
                  variant="outline"
                  onClick={handleContactClick}
                  isLoading={isLoading.contact}
                  loadingText="Connecting..."
                  className="text-white border-white hover:bg-white/10"
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
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/solutions/analytics-dashboard.png"
                    alt="Platform dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Solutions - Data Infographic */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Core Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Fashion Retailers</h2>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto mt-4 mb-6"></div>
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
                  color: "primary",
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
                  color: "blue-500",
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
                  color: "purple-500",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Interactive Feature Cards */}
      <InteractiveFeatureCards
        title="Key Platform Capabilities"
        subtitle="Explore the powerful features that drive retail success"
        features={[
          {
            title: "Inventory Management",
            description: "Real-time tracking, low-stock alerts, and automated reordering to optimize your inventory.",
            icon: <BarChart3 className="h-6 w-6" />,
            image: "/inventory-management-feature.png",
            color: "primary",
          },
          {
            title: "Sales Analytics",
            description: "Comprehensive dashboards and reports to track performance and identify growth opportunities.",
            icon: <LineChart className="h-6 w-6" />,
            image: "/sales-analytics-feature.png",
            color: "blue-500",
          },
          {
            title: "Customer Insights",
            description: "Understand your customers better with detailed demographic and behavioral data.",
            icon: <Users className="h-6 w-6" />,
            image: "/customer-insights-feature.png",
            color: "purple-500",
          },
          {
            title: "Growth Tools",
            description: "Access marketing templates, promotion strategies, and business expansion resources.",
            icon: <TrendingUp className="h-6 w-6" />,
            image: "/growth-tools-feature.png",
            color: "green-500",
          },
        ]}
        className="py-20"
      />

      {/* CTA Section with Video Background */}
      <section className="py-20 relative overflow-hidden">
        <VideoBackground src="/videos/fashion-retail.mp4" overlayOpacity={0.8} overlayColor="#000" />
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Retail Business?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join hundreds of successful retailers who have revolutionized their businesses with our platform.
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
                variant="secondary"
                className="text-primary font-bold text-base px-8 py-6"
                onClick={handleDemoClick}
              >
                Schedule a Demo
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 text-base px-8 py-6"
                onClick={handleContactClick}
              >
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
