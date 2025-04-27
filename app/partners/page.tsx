"use client"
import { useActionState } from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BarChart3, CheckCircle, Clock, Globe, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FadeInSection from "@/components/fade-in-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { submitPartnershipForm, type PartnershipFormState } from "@/actions/partnership-form"
import { RealRetailerTestimonials } from "@/components/real-retailer-testimonials"
import { RetailerAvatarGroup } from "@/components/retailer-avatar-group"

const initialState: PartnershipFormState = {}

export default function PartnersPage() {
  const [formState, formAction, isPending] = useActionState(submitPartnershipForm, initialState)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Handle form submission success
  if (formState.success && !formSubmitted) {
    setFormSubmitted(true)

    // Reset form submission state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/retail-strategy-session.png" alt="Retail Partnership" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Strategic Retail Partnerships</h1>
            <p className="mt-6 max-w-xl mx-auto text-lg text-gray-300">
              Join India's premier wholesale network and transform your retail business with enhanced inventory
              management, data-driven insights, and streamlined operations.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
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
                className="border-white/30 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => {
                  document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Learn More
              </Button>
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
                  Complete the form to speak with our partnership team about how BIGApparels can help you achieve your
                  business objectives.
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
                    <form action={formAction} className="space-y-6">
                      {/* Form error message */}
                      {formState.errors?._form && (
                        <Alert variant="destructive" className="mb-6">
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{formState.errors._form}</AlertDescription>
                        </Alert>
                      )}

                      {/* Form success message */}
                      {formState.success && (
                        <Alert variant="success" className="mb-6">
                          <AlertTitle>Success</AlertTitle>
                          <AlertDescription>{formState.message}</AlertDescription>
                        </Alert>
                      )}

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          className="mt-1"
                          required
                          aria-describedby={formState.errors?.name ? "name-error" : undefined}
                        />
                        {formState.errors?.name && (
                          <p id="name-error" className="text-sm text-red-500">
                            {formState.errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                          Business Name
                        </label>
                        <Input
                          id="businessName"
                          name="businessName"
                          className="mt-1"
                          required
                          aria-describedby={formState.errors?.businessName ? "businessName-error" : undefined}
                        />
                        {formState.errors?.businessName && (
                          <p id="businessName-error" className="text-sm text-red-500">
                            {formState.errors.businessName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Business Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          className="mt-1"
                          required
                          aria-describedby={formState.errors?.email ? "email-error" : undefined}
                        />
                        {formState.errors?.email && (
                          <p id="email-error" className="text-sm text-red-500">
                            {formState.errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          className="mt-1"
                          required
                          aria-describedby={formState.errors?.phone ? "phone-error" : undefined}
                        />
                        {formState.errors?.phone && (
                          <p id="phone-error" className="text-sm text-red-500">
                            {formState.errors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          How can we help your business?
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="mt-1"
                          required
                          aria-describedby={formState.errors?.message ? "message-error" : undefined}
                        />
                        {formState.errors?.message && (
                          <p id="message-error" className="text-sm text-red-500">
                            {formState.errors.message}
                          </p>
                        )}
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={isPending}>
                        {isPending ? "Submitting..." : "Request Partnership Information"}
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

      <RealRetailerTestimonials />

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
                    32% with BIGApparels.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <RetailerAvatarGroup />
                    <p className="text-sm font-medium">+20 retailers joined this month</p>
                  </div>
                </div>

                <div className="flex w-full flex-col space-y-4 lg:w-auto">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-white px-8 py-6 text-lg font-bold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
                    onClick={() => {
                      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="relative z-10">Become a Partner Now</span>
                    <span className="absolute bottom-0 left-0 h-1 w-full bg-primary transition-all duration-300 group-hover:h-2"></span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="lg"
                    className="border-2 border-white/30 bg-transparent px-8 py-6 text-lg font-bold text-white transition-all hover:bg-white/10"
                    onClick={() => {
                      window.location.href = "/solutions"
                    }}
                  >
                    Explore Our Solutions
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
