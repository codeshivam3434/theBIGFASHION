"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import FadeInSection from "@/components/fade-in-section"
import HoverCardEffect from "@/components/hover-card-effect"
import { useState } from "react"
import { ButtonHierarchy } from "@/components/ui/button-hierarchy"

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
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Have questions about our products or partnership opportunities? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Get in Touch</h2>
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
                        className="rounded-full bg-primary/10 p-3"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(var(--primary), 0.2)",
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
              <div className="bg-muted p-8 rounded-lg">
                {formSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you as soon as possible, typically within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
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
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <select
                          id="subject"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        />
                      </div>
                      <ButtonHierarchy
                        type="submit"
                        hierarchy="primary"
                        size="lg"
                        fullWidth
                        className="mt-6"
                        isLoading={isSubmitting}
                        loadingText="Sending message..."
                      >
                        Send Message
                      </ButtonHierarchy>
                    </form>
                  </>
                )}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <FadeInSection>
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden relative">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
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
              <motion.div className="absolute top-4 right-4 z-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a
                  href="https://www.google.com/maps/place/19%C2%B006'47.8%22N+72%C2%B051'59.9%22E/@19.1132673,72.8640648,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
                    Open in Google Maps
                  </Button>
                </a>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Quick Answers</h2>
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
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-95" />

          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2LTZoNnY2em0tNiAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

          {/* Animated circles */}
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <motion.div
            className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-white/5 blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 15,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 h-60 w-60 rounded-full bg-white/5 blur-xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 20,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

              <div className="relative p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    <span className="mr-1.5 flex h-2 w-2 rounded-full bg-green-400"></span>
                    Join 30+ Fashion Retailers
                  </div>

                  <motion.h2
                    className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Ready to revolutionize your fashion business?
                  </motion.h2>

                  <motion.p
                    className="mb-8 max-w-2xl text-lg text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Join thousands of successful retailers who have partnered with Fashion Fusion to access premium
                    products, diverse inventory, and local logistics support.
                  </motion.p>

                  <div className="mb-8 flex w-full max-w-md flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <ButtonWithFeedback
                          variant="secondary"
                          size="lg"
                          className="w-full bg-white text-primary hover:bg-white/90"
                        >
                          Become a Partner
                        </ButtonWithFeedback>
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <ButtonWithFeedback
                          variant="outline"
                          size="lg"
                          className="w-full border-white/60 bg-transparent text-white hover:bg-white/10 hover:border-white/80"
                        >
                          Explore Catalog
                        </ButtonWithFeedback>
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex -space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary bg-white/90"
                        >
                          <img
                            src={`/thoughtful-artist.png?height=40&width=40&query=person ${i + 1}`}
                            alt={`Partner ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-white text-xs font-bold text-primary">
                        30+
                      </div>
                    </div>

                    <motion.p
                      className="text-sm text-white/80"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <span className="font-medium text-white">No commitment required.</span> Free consultation with our
                      retail experts.
                    </motion.p>

                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Vasai</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Nalasopara</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>Virar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
