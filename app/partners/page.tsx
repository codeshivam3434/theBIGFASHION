"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { BarChart3, CheckCircle, Clock, Globe, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FadeInSection from "@/components/fade-in-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Animated particles component
const FloatingParticles = ({ count = 20, className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => {
        const duration = Math.random() * 10 + 10
        const delay = Math.random() * 5

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animation: `floatParticle ${duration}s ease-in-out ${delay}s infinite`,
              transform: "scale(0)",
            }}
          />
        )
      })}
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-100px) scale(0.8);
            opacity: 0.4;
          }
          90% {
            transform: translateY(-200px) scale(0.4);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  )
}

// Wave divider component
const WaveDivider = ({ className = "", flip = false, color = "white" }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-12 md:h-16 lg:h-20 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={color}
          fillOpacity="1"
        ></path>
      </svg>
    </div>
  )
}

export default function PartnersPage() {
  const [formState, setFormState] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)

      // Reset form after submission
      setFormState({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#d4145a] via-[#8A0068] to-[#7928CA] text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image src="/retail-strategy-session.png" alt="Retail Partnership" fill className="object-cover" priority />
        </div>

        <FloatingParticles count={30} />

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="block">Strategic Retail</span>
                  <span className="block bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                    Partnerships
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-gray-100">
                  Join India's premier wholesale network and transform your retail business with enhanced inventory
                  management, data-driven insights, and streamlined operations.
                </p>
                <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button
                    size="lg"
                    className="bg-white text-[#d4145a] hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
                    onClick={() => {
                      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Become a Partner
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                    onClick={() => {
                      document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[400px] w-full overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 rounded-lg border border-white/20 backdrop-blur-sm bg-white/5 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4145a]/20 to-[#7928CA]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <Image
                    src="/digital-retail-experience.png"
                    alt="Modern Retail Experience"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            className="flex flex-col items-center"
          >
            <span className="text-sm font-medium text-white/80 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.3 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </div>

        <WaveDivider color="white" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <FloatingParticles count={15} className="opacity-50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent">
                  Transforming Retail Operations
                </span>
              </h2>
              <div className="mt-4 relative">
                <p className="text-xl text-gray-600">
                  Our partnership program delivers measurable results through innovative technology and proven
                  methodologies.
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#d4145a] to-[#7928CA] rounded-full"></div>
              </div>
            </div>
          </FadeInSection>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-white" />,
                title: "Increased Profitability",
                description:
                  "Partners report an average 32% increase in profit margins through optimized inventory management and reduced operational costs.",
              },
              {
                icon: <Clock className="h-8 w-8 text-white" />,
                title: "Operational Efficiency",
                description:
                  "Reduce administrative workload by up to 60% with automated ordering, inventory tracking, and sales analytics.",
              },
              {
                icon: <Globe className="h-8 w-8 text-white" />,
                title: "Market Expansion",
                description:
                  "Access new customer segments and geographic markets with our nationwide logistics network and market intelligence.",
              },
            ].map((benefit, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4145a] to-[#7928CA] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Card className="h-full border border-transparent group-hover:border-white/10 relative z-10 overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#d4145a]/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4145a]/10 to-[#7928CA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="flex h-full flex-col p-6 relative z-10">
                      <div className="mb-4 rounded-full bg-gradient-to-br from-[#d4145a] to-[#7928CA] p-3 self-start group-hover:shadow-lg group-hover:shadow-[#d4145a]/20 transition-all duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-[#d4145a] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="flex-1 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        <WaveDivider color="#f9fafb" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Partnership Program */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4145a]/5 to-[#7928CA]/5"></div>
        <FloatingParticles count={20} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent">
                  Tailored Partnership Solutions
                </span>
              </h2>
              <div className="mt-4 relative">
                <p className="text-xl text-gray-600">
                  Select the partnership tier that aligns with your business objectives and growth strategy.
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#d4145a] to-[#7928CA] rounded-full"></div>
              </div>
            </div>
          </FadeInSection>

          <div className="mt-16">
            <Tabs defaultValue="premium" className="w-full">
              <TabsList className="mx-auto grid w-full max-w-md grid-cols-3 bg-white/80 backdrop-blur-sm border border-[#d4145a]/20 p-1">
                <TabsTrigger
                  value="standard"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4145a] data-[state=active]:to-[#7928CA] data-[state=active]:text-white transition-all duration-300"
                >
                  Standard
                </TabsTrigger>
                <TabsTrigger
                  value="premium"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4145a] data-[state=active]:to-[#7928CA] data-[state=active]:text-white transition-all duration-300"
                >
                  Premium
                </TabsTrigger>
                <TabsTrigger
                  value="enterprise"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4145a] data-[state=active]:to-[#7928CA] data-[state=active]:text-white transition-all duration-300"
                >
                  Enterprise
                </TabsTrigger>
              </TabsList>
              <div className="mt-8">
                <TabsContent value="standard" className="mt-0">
                  <Card className="border border-[#d4145a]/10 shadow-lg overflow-hidden backdrop-blur-sm bg-white/80">
                    <CardContent className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Standard Partnership</h3>
                          <p className="mt-2 text-gray-600">
                            Ideal for independent retailers and small businesses looking to optimize their operations.
                          </p>
                          <div className="mt-6">
                            <p className="text-4xl font-bold bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent">
                              ₹25,000
                            </p>
                            <p className="text-gray-600">Annual subscription</p>
                          </div>
                          <Button
                            className="mt-6 w-full bg-gradient-to-r from-[#d4145a] to-[#7928CA] hover:shadow-lg hover:shadow-[#d4145a]/20 transition-all duration-300"
                            size="lg"
                          >
                            Get Started
                          </Button>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">Includes:</h4>
                          <ul className="mt-4 space-y-3">
                            {[
                              "Access to wholesale catalog with 2,000+ products",
                              "Basic inventory management tools",
                              "Standard order processing (48-hour fulfillment)",
                              "Monthly performance reports",
                              "Email support (24-hour response time)",
                            ].map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-[#d4145a]" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="premium" className="mt-0">
                  <Card className="border border-[#d4145a]/20 shadow-xl overflow-hidden backdrop-blur-sm bg-white/80 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4145a] to-[#7928CA]"></div>
                    <CardContent className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div>
                          <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#d4145a]/20 to-[#7928CA]/20 backdrop-blur-sm px-4 py-1 text-sm font-medium text-[#d4145a]">
                            Most Popular
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Premium Partnership</h3>
                          <p className="mt-2 text-gray-600">
                            For established retailers seeking advanced tools and priority support.
                          </p>
                          <div className="mt-6">
                            <p className="text-4xl font-bold bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent">
                              ₹60,000
                            </p>
                            <p className="text-gray-600">Annual subscription</p>
                          </div>
                          <Button
                            className="mt-6 w-full bg-gradient-to-r from-[#d4145a] to-[#7928CA] hover:shadow-lg hover:shadow-[#d4145a]/20 transition-all duration-300"
                            size="lg"
                          >
                            Get Started
                          </Button>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">Includes:</h4>
                          <ul className="mt-4 space-y-3">
                            {[
                              "Everything in Standard, plus:",
                              "Access to 5,000+ products with priority allocation",
                              "Advanced analytics and business intelligence tools",
                              "Priority order processing (24-hour fulfillment)",
                              "Dedicated account manager",
                              "Phone and email support (4-hour response time)",
                              "Quarterly business review and strategy sessions",
                            ].map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-[#d4145a]" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="enterprise" className="mt-0">
                  <Card className="border border-[#d4145a]/10 shadow-lg overflow-hidden backdrop-blur-sm bg-white/80">
                    <CardContent className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Enterprise Partnership</h3>
                          <p className="mt-2 text-gray-600">
                            Comprehensive solution for large retailers and multi-location businesses.
                          </p>
                          <div className="mt-6">
                            <p className="text-4xl font-bold bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent">
                              Custom
                            </p>
                            <p className="text-gray-600">Tailored pricing</p>
                          </div>
                          <Button
                            className="mt-6 w-full bg-gradient-to-r from-[#d4145a] to-[#7928CA] hover:shadow-lg hover:shadow-[#d4145a]/20 transition-all duration-300"
                            size="lg"
                          >
                            Contact Sales
                          </Button>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">Includes:</h4>
                          <ul className="mt-4 space-y-3">
                            {[
                              "Everything in Premium, plus:",
                              "Full access to entire product catalog with custom allocations",
                              "Enterprise-grade analytics with predictive modeling",
                              "Custom integration with existing systems",
                              "White-labeled solutions available",
                              "Expedited order processing with dedicated logistics",
                              "Executive-level strategic partnership",
                              "24/7 priority support with dedicated team",
                            ].map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-[#d4145a]" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>

        <WaveDivider color="white" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Success Metrics */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <FloatingParticles count={15} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent">
                  Proven Results for Partners
                </span>
              </h2>
              <div className="mt-4 relative">
                <p className="text-xl text-gray-600">
                  Our partners consistently outperform industry benchmarks across key metrics.
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#d4145a] to-[#7928CA] rounded-full"></div>
              </div>
            </div>
          </FadeInSection>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                metric: "32%",
                label: "Average Profit Increase",
                description: "Year-over-year improvement for retail partners",
                icon: <TrendingUp className="h-6 w-6 text-white" />,
              },
              {
                metric: "45%",
                label: "Inventory Turnover Improvement",
                description: "Reduction in dead stock and improved cash flow",
                icon: <BarChart3 className="h-6 w-6 text-white" />,
              },
              {
                metric: "60%",
                label: "Operational Efficiency",
                description: "Reduction in administrative workload",
                icon: <Clock className="h-6 w-6 text-white" />,
              },
              {
                metric: "99.8%",
                label: "Order Fulfillment Accuracy",
                description: "Industry-leading precision in logistics",
                icon: <Shield className="h-6 w-6 text-white" />,
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4145a]/80 to-[#7928CA]/80 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Card className="h-full border border-[#d4145a]/10 relative z-10 overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:shadow-xl group-hover:shadow-[#d4145a]/20">
                    <CardContent className="flex h-full flex-col items-center p-6 text-center relative z-10">
                      <div className="mb-4 rounded-full bg-gradient-to-br from-[#d4145a] to-[#7928CA] p-3 group-hover:shadow-lg group-hover:shadow-[#d4145a]/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <p className="text-4xl font-bold bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent group-hover:text-white group-hover:bg-none transition-all duration-300">
                        {item.metric}
                      </p>
                      <h3 className="mb-2 mt-2 text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        <WaveDivider color="#f9fafb" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* FAQ Section */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4145a]/5 to-[#7928CA]/5"></div>
        <FloatingParticles count={10} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <div className="mt-4 relative">
                <p className="text-xl text-gray-600">Find answers to common questions about our partnership program.</p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#d4145a] to-[#7928CA] rounded-full"></div>
              </div>
            </div>
          </FadeInSection>

          <div className="mt-16 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What are the requirements to become a partner?",
                  answer:
                    "We partner with established retailers with a physical store or online presence. While we don't have strict revenue requirements, we evaluate each application based on business potential, market alignment, and growth objectives.",
                },
                {
                  question: "How long does the implementation process take?",
                  answer:
                    "Standard implementation typically takes 2-3 weeks, including system integration, data migration, and team training. Premium and Enterprise implementations are tailored to your specific requirements and may include custom features.",
                },
                {
                  question: "Do you offer exclusivity for certain products or regions?",
                  answer:
                    "Yes, Premium and Enterprise partners can negotiate exclusivity arrangements for specific product lines or geographic territories, subject to minimum volume commitments and performance metrics.",
                },
                {
                  question: "What kind of support do partners receive?",
                  answer:
                    "All partners receive implementation support, training, and ongoing technical assistance. Premium and Enterprise partners benefit from dedicated account management, strategic business consulting, and priority support channels.",
                },
                {
                  question: "How are shipping and logistics handled?",
                  answer:
                    "We operate regional warehouses in Delhi, Mumbai, Kolkata, and Bangalore with specialized delivery routes covering 20+ states. Most locations receive deliveries within 24-48 hours, with expedited options available for Premium and Enterprise partners.",
                },
                {
                  question: "Can I integrate your system with my existing software?",
                  answer:
                    "Yes, our platform offers standard integrations with major ERP, POS, and e-commerce systems. Enterprise partnerships include custom integration services for proprietary or legacy systems.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#d4145a]/10">
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-[#d4145a] transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <WaveDivider color="white" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <FloatingParticles count={15} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-r from-[#d4145a] to-[#7928CA] bg-clip-text text-transparent">
                    Ready to Transform Your Retail Business?
                  </span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Complete the form to speak with our partnership team about how THE BIG FASHION can help you achieve
                  your business objectives.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-gradient-to-r from-[#d4145a] to-[#7928CA] p-1">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">No commitment consultation</h3>
                      <p className="mt-1 text-gray-600">
                        Speak with our experts to understand how our solutions can address your specific challenges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-gradient-to-r from-[#d4145a] to-[#7928CA] p-1">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Customized implementation plan</h3>
                      <p className="mt-1 text-gray-600">
                        Receive a tailored roadmap for integrating our solutions into your existing operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-gradient-to-r from-[#d4145a] to-[#7928CA] p-1">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Dedicated onboarding support</h3>
                      <p className="mt-1 text-gray-600">
                        Our team ensures a smooth transition with comprehensive training and support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection direction="right" delay={0.2}>
              <Card className="border border-[#d4145a]/10 shadow-xl overflow-hidden backdrop-blur-sm bg-white/90 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4145a] to-[#7928CA]"></div>
                <CardContent className="p-6 sm:p-8">
                  {formSubmitted ? (
                    <motion.div
                      className="flex flex-col items-center justify-center py-8 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mb-4 rounded-full bg-gradient-to-r from-[#d4145a] to-[#7928CA] p-4">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">Thank You</h3>
                      <p className="text-gray-600">
                        Your inquiry has been received. A member of our partnership team will contact you within 24
                        hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="mt-1 border-[#d4145a]/20 focus:border-[#d4145a] focus:ring-[#d4145a]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                          Business Name
                        </label>
                        <Input
                          id="businessName"
                          value={formState.businessName}
                          onChange={handleInputChange}
                          className="mt-1 border-[#d4145a]/20 focus:border-[#d4145a] focus:ring-[#d4145a]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Business Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="mt-1 border-[#d4145a]/20 focus:border-[#d4145a] focus:ring-[#d4145a]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="mt-1 border-[#d4145a]/20 focus:border-[#d4145a] focus:ring-[#d4145a]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          How can we help your business?
                        </label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleInputChange}
                          className="mt-1 border-[#d4145a]/20 focus:border-[#d4145a] focus:ring-[#d4145a]"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#d4145a] to-[#7928CA] hover:shadow-lg hover:shadow-[#d4145a]/20 transition-all duration-300"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Request Partnership Information"}
                      </Button>
                      <p className="text-center text-xs text-gray-500">
                        By submitting this form, you agree to our{" "}
                        <Link href="/terms" className="text-[#d4145a] underline hover:text-[#7928CA]">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-[#d4145a] underline hover:text-[#7928CA]">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>

        <WaveDivider color="#d4145a" flip={true} className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* CTA Section */}
      <section className="relative py-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4145a] to-[#7928CA]"></div>
        <FloatingParticles count={25} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to elevate your retail business?</h2>
              <p className="mt-4 text-lg text-white/90">
                Join thousands of successful retailers who have transformed their operations with THE BIG FASHION.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                size="lg"
                className="bg-white text-[#d4145a] hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Become a Partner
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => {
                  window.location.href = "/solutions"
                }}
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
