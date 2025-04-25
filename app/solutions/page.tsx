"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import FadeInSection from "@/components/fade-in-section"
import { VideoBackground } from "@/components/ui/video-background"
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
                    alt="Comprehensive fashion retail analytics dashboard showing sales metrics, inventory status, and business performance indicators - Solutions Hero section"
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

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">How We're Different</h3>
              <p className="text-gray-600 mt-2">Our approach eliminates traditional retail challenges</p>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-medium text-gray-600">Feature</th>
                    <th className="p-4 text-center font-medium text-gray-600">Traditional Wholesale</th>
                    <th className="p-4 text-center font-medium text-primary">Our Platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="p-4">
                      <div className="font-medium">Inventory Risk</div>
                      <div className="text-sm text-gray-500">Financial exposure from unsold stock</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4">
                      <div className="font-medium">Minimum Order Quantities</div>
                      <div className="text-sm text-gray-500">Large upfront purchases required</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4">
                      <div className="font-medium">Market Analytics</div>
                      <div className="text-sm text-gray-500">Data-driven decision making</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4">
                      <div className="font-medium">Supply Chain Visibility</div>
                      <div className="text-sm text-gray-500">End-to-end tracking and management</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4">
                      <div className="font-medium">Growth Support</div>
                      <div className="text-sm text-gray-500">Tools and resources for scaling</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/automated-warehouse-efficiency.png"
                  alt="Automated warehouse with efficient logistics systems for fashion retail"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Risk-Free Logistics</h3>
                <p className="text-gray-600 mb-4">
                  Eliminate inventory risk with our revolutionary model that ensures you only pay for what sells.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>No upfront inventory investment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Flexible payment terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Managed warehousing and distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Rapid restocking of bestsellers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/digital-supply-chain-overview.png"
                  alt="Digital supply chain management system for fashion retail"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-500">Supply Chain Management</h3>
                <p className="text-gray-600 mb-4">
                  Streamline your entire supply chain from sourcing to delivery with our integrated platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>End-to-end visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automated ordering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Quality control processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Optimized delivery routes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/fashion-retail-insights.png"
                  alt="Business intelligence dashboard for fashion retail analytics"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-500">Business Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Make data-driven decisions with comprehensive analytics that reveal insights and opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sales performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customer behavior analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Market trend identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Predictive inventory forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
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
            image: "/images/inventory-management-retail.png",
            color: "primary",
            alt: "Fashion retail inventory management system showing staff using digital tools to track clothing items with organized racks in the background - Key Platform Capabilities section",
          },
          {
            title: "Sales Analytics",
            description: "Comprehensive dashboards and reports to track performance and identify growth opportunities.",
            icon: <LineChart className="h-6 w-6" />,
            image: "/images/sales-analytics-dashboard.png",
            color: "blue-500",
            alt: "Fashion retail sales analytics dashboard displaying performance metrics, trend charts, and KPIs for clothing sales - Key Platform Capabilities section",
          },
          {
            title: "Customer Insights",
            description: "Understand your customers better with detailed demographic and behavioral data.",
            icon: <Users className="h-6 w-6" />,
            image: "/images/customer-insights-retail.png",
            color: "purple-500",
            alt: "Fashion retail customer segmentation analysis showing demographic data, shopping patterns, and preference insights - Key Platform Capabilities section",
          },
          {
            title: "Growth Tools",
            description: "Access marketing templates, promotion strategies, and business expansion resources.",
            icon: <TrendingUp className="h-6 w-6" />,
            image: "/images/retail-growth-strategies.png",
            color: "green-500",
            alt: "Fashion retailer planning business expansion with marketing materials, growth charts, and promotional strategy documents - Key Platform Capabilities section",
          },
        ]}
        className="py-20"
      />

      {/* CTA Section - Enhanced */}
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
        <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-10 mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-white opacity-10 mix-blend-overlay"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm sm:p-12">
              <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left">
                <div className="flex-1">
                  <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                    Limited Time Offer
                  </span>
                  <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    Transform Your Retail Business Today
                  </h2>
                  <p className="mt-6 text-xl text-white/90">
                    Join over 30 successful retailers across 3 cities who have increased their profits by an average of
                    32% with our solutions.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="inline-block h-10 w-10 rounded-full border-2 border-primary bg-white/90"
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm font-medium">+20 retailers joined this month</p>
                  </div>
                </div>

                <div className="flex w-full flex-col space-y-4 lg:w-auto">
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
                    className="border-2 border-white px-8 py-6 text-lg font-bold text-white transition-all hover:bg-white/20"
                    onClick={handleContactClick}
                  >
                    Contact Our Sales Team
                  </Button>

                  <p className="text-center text-sm text-white/80">No commitment required. Free consultation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
