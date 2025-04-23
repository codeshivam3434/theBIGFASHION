"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import FadeInSection from "@/components/fade-in-section"
import { useState } from "react"
import { ButtonHierarchy } from "@/components/ui/button-hierarchy"

// Floating Particles Component
const FloatingParticles = ({ count = 15, className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 60 + 10
        const duration = Math.random() * 10 + 10
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `floatParticle ${duration}s ease-in-out ${delay}s infinite alternate`,
            }}
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        )
      })}
    </div>
  )
}

// Wave Divider Component
const WaveDivider = ({ className = "", inverted = false }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-12 md:h-16 ${inverted ? "rotate-180" : ""}`}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-background"
        ></path>
      </svg>
    </div>
  )
}

// Gradient Text Component
const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary ${className}`}
    >
      {children}
    </span>
  )
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
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
        email: "",
        phone: "",
        subject: "",
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
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90 z-0">
          <FloatingParticles count={20} />
        </div>
        <div className="container relative z-10">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
              <GradientText className="font-extrabold">Contact Us</GradientText>
            </h1>
            <p className="mt-4 max-w-2xl text-white/90 text-lg">
              Have questions about our products or partnership opportunities? We're here to help.
            </p>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-white"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <WaveDivider />
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80 z-0">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4145a_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <FloatingParticles count={10} className="opacity-50" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Get in <GradientText>Touch</GradientText>
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
                <p className="text-muted-foreground mb-8">
                  Whether you're interested in becoming a retail partner, have questions about our products, or want to
                  discuss custom manufacturing, our team is ready to assist you.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <MapPin className="h-6 w-6 text-primary" />,
                      title: "Our Location",
                      details: [
                        "Fashion Fusion Headquarters",
                        "B-12, Sector 63, Andheri East",
                        "Mumbai, Maharashtra 401208",
                      ],
                    },
                    {
                      icon: <Mail className="h-6 w-6 text-primary" />,
                      title: "Email Us",
                      details: [
                        "General Inquiries: info.thebigfashion@gmail.com",
                        "Partnerships: partners.thebigfashion@gmail.com",
                        "Customer Support: support.thebigfashion@gmail.com",
                      ],
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-primary" />,
                      title: "Call Us",
                      details: ["Main Office: +91 7033383119", "Partnership Inquiries: +91 8482819965"],
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.div
                        className="rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-3"
                        whileHover={{
                          scale: 1.1,
                          background:
                            "linear-gradient(to bottom right, rgba(212, 20, 90, 0.3), rgba(121, 40, 202, 0.3))",
                        }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-bold mb-2">{contact.title}</h3>
                        {contact.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12">
                  <h3 className="font-bold mb-4">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 10:00 AM - 7:00 PM IST</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection direction="right" delay={0.2}>
              <div className="relative p-0.5 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-slow"></div>
                <div className="bg-background/95 backdrop-blur-sm p-8 rounded-lg relative z-10">
                  {formSubmitted ? (
                    <motion.div
                      className="flex flex-col items-center justify-center text-center py-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-4 mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        <GradientText>Message Sent Successfully!</GradientText>
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you as soon as possible, typically within 24
                        hours.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-6">
                        Send Us a <GradientText>Message</GradientText>
                      </h2>
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                              className="border-muted-foreground/20 focus-visible:ring-primary/50 transition-all"
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
                              className="border-muted-foreground/20 focus-visible:ring-primary/50 transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formState.email}
                            onChange={handleInputChange}
                            required
                            className="border-muted-foreground/20 focus-visible:ring-primary/50 transition-all"
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
                            className="border-muted-foreground/20 focus-visible:ring-primary/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <select
                            id="subject"
                            className="flex h-10 w-full rounded-md border border-muted-foreground/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            value={formState.subject}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select a subject</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="wholesale">Wholesale Information</option>
                            <option value="custom">Custom Manufacturing</option>
                            <option value="support">Customer Support</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Enter your message"
                            rows={5}
                            value={formState.message}
                            onChange={handleInputChange}
                            required
                            className="border-muted-foreground/20 focus-visible:ring-primary/50 transition-all"
                          />
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <ButtonHierarchy
                            type="submit"
                            hierarchy="primary"
                            size="lg"
                            fullWidth
                            className="mt-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                            isLoading={isSubmitting}
                            loadingText="Sending message..."
                          >
                            Send Message
                          </ButtonHierarchy>
                        </motion.div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80 z-0">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4145a_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <FloatingParticles count={8} className="opacity-30" />
        </div>
        <div className="container relative z-10">
          <FadeInSection>
            <div className="aspect-video w-full rounded-lg overflow-hidden relative p-0.5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-slow"></div>
              <motion.div
                className="w-full h-full flex items-center justify-center relative z-10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15072.268153729655!2d72.8666397!3d19.1132673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzQ3LjgiTiA3MsKwNTEnNTkuOSJF!5e0!3m2!1sen!2sin!4v1713798980000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                ></iframe>
              </motion.div>
              <motion.div className="absolute top-4 right-4 z-20" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a
                  href="https://www.google.com/maps/place/19%C2%B006'47.8%22N+72%C2%B051'59.9%22E/@19.1132673,72.8640648,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all"
                  >
                    Open in Google Maps
                  </Button>
                </a>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4145a_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <FloatingParticles count={12} className="opacity-40" />
        </div>
        <div className="container relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Quick <GradientText>Answers</GradientText>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full my-6"></div>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Find answers to our most frequently asked questions.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How can I become a retail partner?",
                answer:
                  "Visit our Partners page to learn about our partnership program and submit an application. Our team will review your submission and contact you within 2 business days.",
              },
              {
                question: "What are your minimum order quantities?",
                answer:
                  "Our standard MOQ is 50 units per style, but this can vary based on your partnership tier and specific products. Premium and Elite partners enjoy lower MOQs.",
              },
              {
                question: "Do you offer custom manufacturing?",
                answer:
                  "Yes, we offer custom manufacturing services for partners looking to create unique pieces or private label collections. Contact our partnerships team to discuss your specific needs.",
              },
              {
                question: "What is your shipping policy across India?",
                answer:
                  "We have regional warehouses in Delhi, Mumbai, Kolkata, and Bangalore with specialized delivery routes covering 20+ states. Most locations receive deliveries within 24-48 hours.",
              },
            ].map((faq, index) => (
              <FadeInSection key={index} delay={index * 0.05} direction={index % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="relative p-0.5 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-primary/40 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg relative z-10">
                    <h3 className="font-bold">{faq.question}</h3>
                    <p className="text-muted-foreground mt-2">{faq.answer}</p>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-slow"></div>
          <FloatingParticles count={15} />
        </div>
        <div className="container relative z-10 py-16">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">
              Ready to join India's retail revolution?
            </h2>
            <p className="max-w-2xl text-primary-foreground/90 mb-8">
              Join thousands of successful retailers who have partnered with Fashion Fusion to access premium products,
              diverse inventory, and local logistics support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ButtonWithFeedback
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-white/20"
                >
                  Become a Partner
                </ButtonWithFeedback>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ButtonWithFeedback variant="transparent" size="lg" className="border-2 hover:bg-white/10">
                  Explore Catalog
                </ButtonWithFeedback>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
