"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"
import FadeInSection from "@/components/fade-in-section"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import HoverCardEffect from "@/components/hover-card-effect"
import AnimatedGradientBackground from "@/components/animated-gradient-background"
import ParallaxImage from "@/components/parallax-image"
import { useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState({
    explore: false,
    join: false,
  })

  const handleExploreClick = () => {
    setIsLoading((prev) => ({ ...prev, explore: true }))
    setTimeout(() => {
      window.location.href = "/catalog"
    }, 1000)
  }

  const handleJoinClick = () => {
    setIsLoading((prev) => ({ ...prev, join: true }))
    setTimeout(() => {
      window.location.href = "/partners"
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AnimatedGradientBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent mix-blend-multiply" />
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Fashion collection"
              fill
              className="object-cover mix-blend-overlay opacity-60"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center min-h-[90vh] py-24 md:py-32 text-center text-white">
            <motion.h1
              className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Retailers, <br className="hidden md:inline" />
              <span className="text-primary">Elevating Brands</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with premium manufacturers and access trending collections with competitive pricing and low MOQs.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ButtonWithFeedback
                size="lg"
                variant="glow"
                onClick={handleExploreClick}
                isLoading={isLoading.explore}
                loadingText="Loading catalog..."
              >
                Explore Wholesale Catalog
              </ButtonWithFeedback>
              <ButtonWithFeedback
                size="lg"
                variant="outlineGlow"
                onClick={handleJoinClick}
                isLoading={isLoading.join}
                loadingText="Processing..."
              >
                Join as Retail Partner
              </ButtonWithFeedback>
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="h-6 w-6 rotate-90" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16 md:py-24">
          <div className="container">
            <FadeInSection>
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trending Collections</h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  Discover our latest styles and bestsellers available for wholesale and retail partnerships.
                </p>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Summer Essentials", image: "/placeholder.svg?height=400&width=600", category: "Seasonal" },
                { name: "Business Casual", image: "/placeholder.svg?height=400&width=600", category: "Men's Wear" },
                { name: "Urban Chic", image: "/placeholder.svg?height=400&width=600", category: "Women's Wear" },
              ].map((collection, index) => (
                <FadeInSection key={index} delay={index * 0.1} direction="up">
                  <HoverCardEffect className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.name}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold">{collection.name}</h3>
                      <p className="text-sm text-gray-300">{collection.category}</p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href="/catalog"
                          className="mt-4 inline-flex items-center text-sm font-medium text-white hover:text-primary group/link"
                        >
                          View Collection
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </motion.div>
                    </div>
                  </HoverCardEffect>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Factors */}
        <section className="bg-muted/60 py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
          </div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6 text-primary" />,
                  title: "8+ Years",
                  description: "Of industry experience in fashion manufacturing and distribution",
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "500+ Retailers",
                  description: "Trust our quality and service for their inventory needs",
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-primary" />,
                  title: "Premium Quality",
                  description: "Rigorous quality control for every product we manufacture",
                },
              ].map((item, index) => (
                <FadeInSection key={index} delay={index * 0.1} direction="up">
                  <motion.div
                    className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  >
                    <div className="rounded-full bg-primary/10 p-3 mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInSection direction="left">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Connecting Manufacturers to Retailers
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fashion Fusion bridges the gap between premium manufacturers and ambitious retailers. We've built
                    our reputation on quality craftsmanship, trend-forward designs, and flexible partnership models that
                    help businesses of all sizes thrive.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Our dual business model allows us to understand both sides of the fashion industry, creating value
                    for manufacturers and retailers alike while growing our own distinctive clothing line.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link
                      href="/about"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                    >
                      Learn more about our story
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </FadeInSection>
              <FadeInSection direction="right" delay={0.2}>
                <ParallaxImage
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our workshop"
                  width={800}
                  height={600}
                  className="relative aspect-video overflow-hidden rounded-lg shadow-xl"
                  intensity={0.3}
                />
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Partner Program Preview */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0 z-0" />
          <div className="container relative z-10">
            <FadeInSection>
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">For Retailers</h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  Join our partner program and unlock exclusive benefits for your retail business.
                </p>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Faster Supply Chain",
                  description: "Direct access to manufacturers with expedited shipping and priority production slots.",
                },
                {
                  title: "Private Labeling",
                  description: "Create your own branded line with our manufacturing expertise and low MOQs.",
                },
                {
                  title: "Flexible Ordering",
                  description: "Start with smaller orders and scale up as your business grows with tiered pricing.",
                },
              ].map((benefit, index) => (
                <FadeInSection key={index} delay={index * 0.1} direction="up">
                  <motion.div
                    className="flex flex-col p-6 h-full bg-background rounded-lg shadow-sm"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  >
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground flex-1">{benefit.description}</p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
            <FadeInSection direction="up">
              <div className="flex justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ButtonWithFeedback
                    size="lg"
                    onClick={() => {
                      window.location.href = "/partners"
                    }}
                  >
                    Become a Retail Partner
                  </ButtonWithFeedback>
                </motion.div>
              </div>
            </FadeInSection>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Fashion Fusion has been instrumental in helping us scale our boutique. Their flexible MOQs and quality products have made a huge difference.",
                  name: "Sarah Johnson",
                  role: "Owner, Urban Style Boutique",
                },
                {
                  quote:
                    "The private labeling option allowed us to create our own brand without the massive upfront investment typically required. Game changer!",
                  name: "Michael Chen",
                  role: "Founder, Trend Setters",
                },
                {
                  quote:
                    "Their trend forecasting and quick turnaround times have helped us stay ahead of the competition. A truly valuable partnership.",
                  name: "Priya Patel",
                  role: "Merchandise Director, Fashion Forward",
                },
              ].map((testimonial, index) => (
                <FadeInSection key={index} delay={index * 0.1} direction="up">
                  <motion.div
                    className="flex flex-col p-6 h-full bg-muted rounded-lg"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  >
                    <blockquote className="text-muted-foreground mb-4 flex-1 italic">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
            <div className="absolute inset-0 bg-primary mix-blend-multiply" />
            <AnimatedGradientBackground />
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
                  Ready to transform your retail business?
                </motion.h2>
                <motion.p
                  className="mt-4 text-primary-foreground/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Join hundreds of successful retailers who have partnered with Fashion Fusion to access premium
                  products, competitive pricing, and flexible ordering.
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
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                >
                  Contact Our Team
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

