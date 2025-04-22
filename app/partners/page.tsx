"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Factory, Truck } from "lucide-react"
import { motion } from "framer-motion"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FadeInSection from "@/components/fade-in-section"
import HoverCardEffect from "@/components/hover-card-effect"
import { useState } from "react"

export default function PartnersPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    partnershipTier: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        firstName: "",
        lastName: "",
        businessName: "",
        email: "",
        phone: "",
        website: "",
        businessType: "",
        partnershipTier: "",
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
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
          <Image
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=500&q=80"
            alt="Partner with us"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center text-white">
          <motion.h1
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Become a Retail Partner
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join our network of successful retailers across India and gain access to premium products, diverse
            inventory, and local logistics support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ButtonWithFeedback className="mt-8" size="lg">
              Apply Now
            </ButtonWithFeedback>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Partner Benefits</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Discover the advantages of partnering with Fashion Fusion for your retail business.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="h-6 w-6 text-primary" />,
                title: "Local Logistics Support",
                description:
                  "Specialized delivery routes across 20+ states with regional warehouses in Delhi, Mumbai, Kolkata, and Bangalore for 24-48 hour delivery to most locations.",
              },
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "Diverse Inventory",
                description:
                  "Access to 5000+ styles across traditional, fusion, and western wear with new designs added weekly to keep your store fresh and trending.",
              },
              {
                icon: <Factory className="h-6 w-6 text-primary" />,
                title: "Rapid Restocking",
                description:
                  "48-hour restocking on bestsellers with priority allocation to partner retailers during peak festival seasons like Diwali, Eid, and wedding season.",
              },
            ].map((benefit, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="flex flex-col p-6 h-full bg-muted rounded-lg"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                >
                  <div className="rounded-full bg-primary/10 p-3 mb-4 self-start">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground flex-1">{benefit.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Live Counters */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary" />
        </div>
        <div className="container relative z-10 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Active Retail Partners" },
              { number: "20+", label: "States Served" },
              { number: "5,000+", label: "Products Available" },
              { number: "98%", label: "Partner Satisfaction" },
            ].map((counter, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="flex flex-col items-center text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.h3
                    className="text-4xl font-bold"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    {counter.number}
                  </motion.h3>
                  <p className="mt-2">{counter.label}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Partners Say</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Hear from retailers who have transformed their businesses through our partnership.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Fashion Fusion has transformed our boutique business. Their diverse inventory and quick restocking have helped us increase our sales by 40% in just six months.",
                name: "Rajesh Sharma",
                role: "Owner, Jaipur Fashion House",
                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
              },
              {
                quote:
                  "The regional warehouse system has cut our delivery times in half. We can now promise our customers new styles every week, even during peak festival seasons.",
                name: "Meera Patel",
                role: "Founder, Trendsetters Mumbai",
                image:
                  "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
              },
              {
                quote:
                  "Their MOQ flexibility and credit terms have been game-changers for our small retail operation. We've been able to expand our product range without overextending financially.",
                name: "Amit Singh",
                role: "Director, Style Hub Lucknow",
                image:
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
              },
            ].map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="flex flex-col p-6 h-full bg-muted rounded-lg"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                >
                  <blockquote className="text-muted-foreground mb-6 flex-1 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} className="rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </motion.div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="bg-muted/50 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        </div>
        <div className="container relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Partnership Tiers</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Choose the partnership level that best fits your business needs.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Partner",
                description: "For smaller retailers just getting started",
                features: ["Access to wholesale catalog", "Standard MOQs (50 units)", "Basic partner support"],
                featured: false,
              },
              {
                title: "Premium Partner",
                description: "For established retailers with consistent volume",
                features: [
                  "All Standard Partner benefits",
                  "Lower MOQs (25 units)",
                  "Priority shipping",
                  "Basic private labeling",
                  "Dedicated account representative",
                ],
                featured: true,
              },
              {
                title: "Elite Partner",
                description: "For large retailers with high volume needs",
                features: [
                  "All Premium Partner benefits",
                  "Custom MOQs",
                  "Advanced private labeling",
                  "Custom product development",
                  "Exclusive early access to new collections",
                  "Strategic business consulting",
                ],
                featured: false,
              },
            ].map((tier, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className={`flex flex-col p-6 h-full ${
                    tier.featured ? "bg-primary text-primary-foreground" : "bg-background"
                  } rounded-lg shadow-sm`}
                  whileHover={{
                    y: -10,
                    boxShadow: tier.featured ? "0 20px 30px rgba(0,0,0,0.2)" : "0 15px 25px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-xl font-bold mb-3">{tier.title}</h3>
                  <p
                    className={`text-sm ${tier.featured ? "text-primary-foreground/90" : "text-muted-foreground"} mb-6`}
                  >
                    {tier.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`mr-2 ${tier.featured ? "" : "text-primary"}`}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <ButtonWithFeedback variant={tier.featured ? "secondary" : "outline"}>Apply Now</ButtonWithFeedback>
                  </motion.div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24" id="apply">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Apply to Become a Partner</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form to start your application process. Our team will review your submission and get back
                  to you within 2 business days.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "No application fees or commitments",
                    "Quick approval process for qualified retailers",
                    "Dedicated onboarding support",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <p>{item}</p>
                    </motion.div>
                  ))}
                </div>
                <HoverCardEffect className="bg-muted p-6 rounded-lg">
                  <div>
                    <h3 className="font-bold mb-2">Questions?</h3>
                    <p className="text-sm text-muted-foreground mb-4">Contact our partnerships team directly:</p>
                    <p className="text-sm hover:text-primary transition-colors">partners@fashionfusion.com</p>
                    <p className="text-sm hover:text-primary transition-colors">+91 98765 43210</p>
                  </div>
                </HoverCardEffect>
              </div>
            </FadeInSection>
            <FadeInSection direction="right" delay={0.2}>
              <div className="bg-muted p-8 rounded-lg">
                {formSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center text-center py-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Application Submitted</h3>
                    <p className="text-muted-foreground">
                      Thank you for your interest! Our team will review your application and contact you within 2
                      business days.
                    </p>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          value={formState.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          value={formState.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-sm font-medium">
                        Business Name
                      </label>
                      <Input
                        id="businessName"
                        placeholder="Enter your business name"
                        value={formState.businessName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Business Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your business email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formState.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-sm font-medium">
                        Website (if applicable)
                      </label>
                      <Input
                        id="website"
                        placeholder="Enter your website URL"
                        value={formState.website}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="businessType" className="text-sm font-medium">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formState.businessType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select business type</option>
                        <option value="boutique">Boutique</option>
                        <option value="multi-brand-store">Multi-Brand Store</option>
                        <option value="online-retailer">Online Retailer</option>
                        <option value="department-store">Department Store</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="partnershipTier" className="text-sm font-medium">
                        Preferred Partnership Tier
                      </label>
                      <select
                        id="partnershipTier"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formState.partnershipTier}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select partnership tier</option>
                        <option value="standard">Standard Partner</option>
                        <option value="premium">Premium Partner</option>
                        <option value="elite">Elite Partner</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Additional Information
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your business and needs"
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <ButtonWithFeedback
                      type="submit"
                      className="w-full"
                      isLoading={isSubmitting}
                      loadingText="Submitting..."
                    >
                      Submit Application
                    </ButtonWithFeedback>
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="/terms" className="underline underline-offset-2 hover:text-primary">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="underline underline-offset-2 hover:text-primary">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Find answers to common questions about our partnership program.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What are the requirements to become a partner?",
                answer:
                  "We look for established retailers with a physical store or online presence. While we don't have strict revenue requirements, we evaluate each application based on business potential and alignment with our values.",
              },
              {
                question: "How long does the application process take?",
                answer:
                  "Typically, we review applications within 2 business days. If approved, the onboarding process takes approximately 3-5 days, depending on your partnership tier and location in India.",
              },
              {
                question: "Can I start with a small order to test the products?",
                answer:
                  "Yes, our Standard Partnership tier allows for minimum order quantities starting at 50 units per style. We also offer sample orders for qualified applicants before committing to larger purchases.",
              },
              {
                question: "Do you offer exclusivity for certain products or regions?",
                answer:
                  "For Premium and Elite Partners, we do offer limited exclusivity arrangements for specific products or regional territories. These are evaluated on a case-by-case basis and included in your partnership agreement.",
              },
              {
                question: "What kind of marketing support do you provide?",
                answer:
                  "All partners receive access to our digital asset library with product images and descriptions. Premium and Elite Partners also receive co-marketing opportunities, feature placement in our directory, and customized marketing materials in multiple Indian languages.",
              },
              {
                question: "How are shipping and logistics handled across India?",
                answer:
                  "We have regional warehouses in Delhi, Mumbai, Kolkata, and Bangalore with specialized delivery routes covering 20+ states. Most locations receive deliveries within 24-48 hours, with special arrangements for remote areas.",
              },
            ].map((faq, index) => (
              <FadeInSection key={index} delay={index * 0.05} direction={index % 2 === 0 ? "left" : "right"}>
                <HoverCardEffect className="space-y-2 p-6 bg-background rounded-lg">
                  <h3 className="font-bold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </HoverCardEffect>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary" />
        </div>
        <div className="container relative z-10 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to join India's retail revolution?
              </motion.h2>
              <motion.p
                className="mt-4 text-primary-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of successful retailers who have partnered with Fashion Fusion to access premium
                products, diverse inventory, and local logistics support.
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
              <ButtonWithFeedback
                variant="secondary"
                size="lg"
                onClick={() => {
                  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Apply Now
              </ButtonWithFeedback>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
