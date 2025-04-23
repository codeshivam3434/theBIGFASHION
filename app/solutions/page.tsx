"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShieldCheck, BarChart3, Zap, Layers, Monitor, Smartphone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FadeInSection from "@/components/fade-in-section"
import { VideoBackground } from "@/components/ui/video-background"

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

  // Solution features with icons and descriptions
  const solutionFeatures = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Risk-Free Logistics",
      description: "Eliminate inventory risk with our revolutionary model",
      features: [
        "No upfront inventory investment",
        "Flexible payment terms",
        "Managed warehousing and distribution",
        "Rapid restocking of bestsellers",
      ],
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Supply Chain Management",
      description: "Streamline your entire supply chain from sourcing to delivery",
      features: [
        "End-to-end visibility",
        "Automated ordering",
        "Quality control processes",
        "Optimized delivery routes",
      ],
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Business Intelligence",
      description: "Make data-driven decisions with comprehensive analytics",
      features: [
        "Sales performance tracking",
        "Customer behavior analysis",
        "Market trend identification",
        "Predictive inventory forecasting",
      ],
    },
  ]

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
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=900&q=80"
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

      {/* Core Solutions */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionFeatures.map((solution, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full overflow-hidden"
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <div className="p-8">
                    <div className="rounded-full bg-primary/10 p-4 inline-block mb-6">{solution.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Platform Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need</h2>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto mt-4 mb-6"></div>
            </div>
          </FadeInSection>

          <Tabs defaultValue="inventory" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="ordering">Ordering</TabsTrigger>
                <TabsTrigger value="frontstore">FrontStore</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="inventory" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Inventory Management System</h3>
                  <p className="text-muted-foreground mb-6">
                    Our intuitive inventory management system gives you complete control and visibility over your stock
                    levels, helping you optimize inventory and reduce costs.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Real-time inventory tracking across all locations",
                      "Low-stock alerts and automated reordering",
                      "Barcode scanning for quick stock updates",
                      "Detailed product categorization and tagging",
                      "Inventory valuation and reporting",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80"
                      alt="Inventory management dashboard"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/solutions/analytics-dashboard.png"
                      alt="Analytics dashboard"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Comprehensive Analytics</h3>
                  <p className="text-muted-foreground mb-6">
                    Make data-driven decisions with our powerful analytics tools that provide deep insights into your
                    business performance.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Sales performance tracking by product, category, and time period",
                      "Customer demographic and behavioral analysis",
                      "Profit margin and revenue reporting",
                      "Trend identification and forecasting",
                      "Customizable dashboards and reports",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ordering" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Flexible Ordering System</h3>
                  <p className="text-muted-foreground mb-6">
                    Our ordering system adapts to your business needs with flexible MOQs and streamlined processes.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Customizable Minimum Order Quantities (MOQs)",
                      "Bulk ordering capabilities with volume discounts",
                      "Scheduled recurring orders",
                      "Order tracking and history",
                      "Integrated payment processing",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/solutions/ordering-system.png"
                      alt="Ordering system"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="frontstore" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/solutions/frontstore-interface.png"
                      alt="FrontStore interface"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Premium FrontStore Experience</h3>
                  <p className="text-muted-foreground mb-6">
                    Provide your customers with a high-quality shopping experience that rivals big MNC services.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Customizable storefront with your branding",
                      "Professional product displays and catalogs",
                      "Integrated promotions and discounts",
                      "Customer account management",
                      "Mobile-responsive design for all devices",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Multi-Device Support */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Accessibility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Access Anywhere, Anytime</h2>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto mt-4 mb-6"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="h-10 w-10 text-primary" />,
                title: "Desktop",
                description: "Full-featured dashboard with comprehensive tools and analytics for in-depth management.",
              },
              {
                icon: <Smartphone className="h-10 w-10 text-primary" />,
                title: "Mobile",
                description: "Responsive mobile interface for on-the-go inventory management and sales tracking.",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Offline Mode",
                description: "Continue working even without internet connection with our offline capabilities.",
              },
            ].map((device, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full text-center"
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <div className="rounded-full bg-primary/10 p-4 inline-block mb-6">{device.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{device.title}</h3>
                  <p className="text-muted-foreground">{device.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

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
