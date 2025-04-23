"use client"

import type React from "react"

import { useState } from "react"
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
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/retail-strategy-session.png" alt="Retail Partnership" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Strategic Retail Partnerships
              </h1>
              <p className="mt-6 max-w-xl text-lg text-gray-300">
                Join India's premier wholesale network and transform your retail business with enhanced inventory
                management, data-driven insights, and streamlined operations.
              </p>
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => {
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Become a Partner
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => {
                    document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/digital-retail-experience.png"
                  alt="Modern Retail Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Transforming Retail Operations
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Our partnership program delivers measurable results through innovative technology and proven
                methodologies.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "Increased Profitability",
                description:
                  "Partners report an average 32% increase in profit margins through optimized inventory management and reduced operational costs.",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Operational Efficiency",
                description:
                  "Reduce administrative workload by up to 60% with automated ordering, inventory tracking, and sales analytics.",
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Market Expansion",
                description:
                  "Access new customer segments and geographic markets with our nationwide logistics network and market intelligence.",
              },
            ].map((benefit, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-3 self-start">{benefit.icon}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{benefit.title}</h3>
                    <p className="flex-1 text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Program */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tailored Partnership Solutions
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Select the partnership tier that aligns with your business objectives and growth strategy.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-16">
            <Tabs defaultValue="premium" className="w-full">
              <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="standard">Standard</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              </TabsList>
              <div className="mt-8">
                <TabsContent value="standard" className="mt-0">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Standard Partnership</h3>
                          <p className="mt-2 text-gray-600">
                            Ideal for independent retailers and small businesses looking to optimize their operations.
                          </p>
                          <div className="mt-6">
                            <p className="text-4xl font-bold text-gray-900">₹25,000</p>
                            <p className="text-gray-600">Annual subscription</p>
                          </div>
                          <Button className="mt-6 w-full" size="lg">
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
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
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
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div>
                          <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                            Most Popular
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Premium Partnership</h3>
                          <p className="mt-2 text-gray-600">
                            For established retailers seeking advanced tools and priority support.
                          </p>
                          <div className="mt-6">
                            <p className="text-4xl font-bold text-gray-900">₹60,000</p>
                            <p className="text-gray-600">Annual subscription</p>
                          </div>
                          <Button className="mt-6 w-full" size="lg">
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
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
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
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Enterprise Partnership</h3>
                          <p className="mt-2 text-gray-600">
                            Comprehensive solution for large retailers and multi-location businesses.
                          </p>
                          <div className="mt-6">
                            <p className="text-4xl font-bold text-gray-900">Custom</p>
                            <p className="text-gray-600">Tailored pricing</p>
                          </div>
                          <Button className="mt-6 w-full" size="lg">
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
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
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
      </section>

      {/* Success Metrics */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Proven Results for Partners
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Our partners consistently outperform industry benchmarks across key metrics.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                metric: "32%",
                label: "Average Profit Increase",
                description: "Year-over-year improvement for retail partners",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
              },
              {
                metric: "45%",
                label: "Inventory Turnover Improvement",
                description: "Reduction in dead stock and improved cash flow",
                icon: <BarChart3 className="h-6 w-6 text-primary" />,
              },
              {
                metric: "60%",
                label: "Operational Efficiency",
                description: "Reduction in administrative workload",
                icon: <Clock className="h-6 w-6 text-primary" />,
              },
              {
                metric: "99.8%",
                label: "Order Fulfillment Accuracy",
                description: "Industry-leading precision in logistics",
                icon: <Shield className="h-6 w-6 text-primary" />,
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">{item.icon}</div>
                    <p className="text-4xl font-bold text-primary">{item.metric}</p>
                    <h3 className="mb-2 mt-2 text-lg font-bold text-gray-900">{item.label}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Find answers to common questions about our partnership program.
              </p>
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
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Ready to Transform Your Retail Business?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Complete the form to speak with our partnership team about how THE BIG FASHION can help you achieve
                  your business objectives.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
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
                      <CheckCircle className="h-6 w-6 text-primary" />
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
                      <CheckCircle className="h-6 w-6 text-primary" />
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
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  {formSubmitted ? (
                    <motion.div
                      className="flex flex-col items-center justify-center py-8 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mb-4 rounded-full bg-primary/10 p-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
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
                          className="mt-1"
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
                          className="mt-1"
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
                          className="mt-1"
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
                          className="mt-1"
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
                          className="mt-1"
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Request Partnership Information"}
                      </Button>
                      <p className="text-center text-xs text-gray-500">
                        By submitting this form, you agree to our{" "}
                        <Link href="/terms" className="underline hover:text-primary">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline hover:text-primary">
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
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Become a Partner
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
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
