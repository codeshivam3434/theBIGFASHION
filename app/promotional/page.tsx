"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Store,
  Truck,
  BarChart3,
  ShoppingBag,
  Clock,
  Zap,
  ChevronRight,
  Bell,
  ShoppingCart,
  Download,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import FadeInSection from "@/components/fade-in-section"
import ScrollToTop from "@/components/scroll-to-top"

export default function PromotionalPage() {
  const [isLoading, setIsLoading] = useState({
    demo: false,
    contact: false,
  })
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

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
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fashion retail"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div className="container relative z-20 px-4 py-32 md:py-40" style={{ opacity, scale, y }}>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                Transforming Retail Distribution
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Fashion Retailers Across India
            </motion.h1>
            <motion.p
              className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              THE BIG FASHION connects small and medium retailers with premium clothing brands through our innovative
              distribution platform.
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
                onClick={handleDemoClick}
                isLoading={isLoading.demo}
                loadingText="Scheduling demo..."
                className="text-base px-8 py-6"
              >
                Become a Partner
              </ButtonWithFeedback>
              <ButtonWithFeedback
                size="lg"
                variant="outlineGlow"
                onClick={handleContactClick}
                isLoading={isLoading.contact}
                loadingText="Connecting..."
                className="text-base px-8 py-6"
              >
                Learn More
              </ButtonWithFeedback>
            </motion.div>

            <motion.div
              className="mt-16 flex gap-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {["500+ Retail Partners", "20+ Cities Across India", "40% Average Growth"].map((text, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-300 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowRight className="h-6 w-6 rotate-90 text-white" />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Platform
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How THE BIG FASHION Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're revolutionizing the fashion retail ecosystem with our innovative distribution model
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Platform dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: <Store className="h-6 w-6 text-primary" />,
                      title: "Retailer Network",
                      description:
                        "We connect with small and medium fashion retailers across Tier 2 & 3 cities in India.",
                    },
                    {
                      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
                      title: "Brand Partnerships",
                      description:
                        "We collaborate with premium clothing brands to offer quality products at competitive prices.",
                    },
                    {
                      icon: <Truck className="h-6 w-6 text-primary" />,
                      title: "Efficient Distribution",
                      description:
                        "Our logistics network ensures timely delivery and inventory management for retailers.",
                    },
                    {
                      icon: <BarChart3 className="h-6 w-6 text-primary" />,
                      title: "Data-Driven Insights",
                      description:
                        "We provide retailers with market trends and consumer preferences to optimize inventory.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/solutions" className="inline-flex items-center text-primary font-medium hover:underline">
                    Discover our complete solution
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0 z-0"></div>
        <div className="container px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Benefits for Retailers</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our network and transform your fashion retail business
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Increased Revenue",
                description: "Our retailers experience an average of 40% growth in sales after joining our network.",
              },
              {
                icon: <ShoppingBag className="h-10 w-10 text-primary" />,
                title: "Premium Inventory",
                description: "Access to high-quality fashion products from leading brands at competitive prices.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Flexible Ordering",
                description: "Order what you need, when you need it, with no minimum order quantities.",
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Reliable Logistics",
                description: "Fast and efficient delivery to your store, with real-time tracking and updates.",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-primary" />,
                title: "Market Insights",
                description: "Data-driven recommendations to help you stock the right products for your customers.",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Technology Platform",
                description: "Easy-to-use digital tools for inventory management, ordering, and business analytics.",
              },
            ].map((benefit, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full"
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <div className="rounded-full bg-primary/10 p-4 inline-block mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Transforming Retail Businesses</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how retailers across India are growing with THE BIG FASHION
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fashion Hub",
                location: "Lucknow, UP",
                growth: "45%",
                quote:
                  "Since partnering with THE BIG FASHION, our sales have increased by 45% and we've been able to offer a wider range of products to our customers.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                name: "Style Studio",
                location: "Kanpur, UP",
                growth: "38%",
                quote:
                  "The market insights and premium inventory have transformed our business. Our customers love the quality and variety we now offer.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                name: "Trendsetter",
                location: "Varanasi, UP",
                growth: "52%",
                quote:
                  "The flexible ordering and reliable logistics have made inventory management so much easier. We've seen a 52% increase in revenue.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((story, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <div className="relative h-48">
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">{story.name}</h3>
                        <p className="text-gray-300">{story.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 text-primary mr-2" />
                      <span className="text-lg font-bold">{story.growth} Growth in Revenue</span>
                    </div>
                    <p className="text-muted-foreground flex-1">"{story.quote}"</p>
                    <Link
                      href={`/case-studies/${story.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Read full case study
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Network Map */}
      <section className="py-20">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Reach
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Growing Network Across India</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're expanding our presence to connect more retailers with premium fashion brands
              </p>
            </div>
          </FadeInSection>

          <div className="relative">
            <FadeInSection>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/placeholder.svg?height=800&width=1600"
                    alt="Network map of India"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 bg-black/70 rounded-xl max-w-md">
                      <h3 className="text-2xl font-bold text-white mb-4">Our Growing Network</h3>
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div>
                          <p className="text-gray-300 font-medium">Cities</p>
                          <p className="text-3xl font-bold text-primary">20+</p>
                        </div>
                        <div>
                          <p className="text-gray-300 font-medium">Retailers</p>
                          <p className="text-3xl font-bold text-primary">500+</p>
                        </div>
                        <div>
                          <p className="text-gray-300 font-medium">Brands</p>
                          <p className="text-3xl font-bold text-primary">50+</p>
                        </div>
                        <div>
                          <p className="text-gray-300 font-medium">Products</p>
                          <p className="text-3xl font-bold text-primary">10k+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Fashion Retail Business?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join our network of successful retailers and experience the benefits of our innovative distribution
              platform.
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
                Become a Partner
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 text-base px-8 py-6"
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Partners
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Premium Fashion Brands</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We partner with leading clothing brands to bring quality products to retailers
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center justify-center h-32"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Brand+${index + 1}`}
                    alt={`Fashion Brand ${index + 1}`}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto"
                  />
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-3xl z-0"></div>
        <div className="container px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Mobile Experience
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Manage Your Business On The Go</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our powerful mobile app puts the entire wholesale platform in your pocket
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
                      title: "Easy Ordering",
                      description: "Browse catalogs, place orders, and manage your inventory with just a few taps.",
                    },
                    {
                      icon: <Bell className="h-6 w-6 text-primary" />,
                      title: "Real-time Notifications",
                      description: "Get instant updates on order status, new arrivals, and special promotions.",
                    },
                    {
                      icon: <BarChart3 className="h-6 w-6 text-primary" />,
                      title: "Business Analytics",
                      description:
                        "Track sales performance, inventory levels, and customer trends with intuitive dashboards.",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Offline Functionality",
                      description:
                        "Continue working even without internet connection - your data will sync when you're back online.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base px-8 py-6 bg-black hover:bg-gray-900 text-white">
                    <Download className="mr-2 h-5 w-5" />
                    App Store
                  </Button>
                  <Button size="lg" className="text-base px-8 py-6 bg-black hover:bg-gray-900 text-white">
                    <Download className="mr-2 h-5 w-5" />
                    Google Play
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=User`}
                          alt="User"
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">4.8/5 from 2,000+ reviews</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-25"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl p-4 md:p-8">
                  <div className="relative aspect-[9/16] max-w-[280px] mx-auto">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border-8 border-black">
                      <Image
                        src="/placeholder.svg?height=600&width=300&text=App+Screenshot"
                        alt="Mobile app screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -right-16 -bottom-10 w-48 h-48 bg-primary/10 rounded-full"></div>
                    <div className="absolute -left-16 -top-10 w-32 h-32 bg-purple-500/10 rounded-full"></div>

                    {/* Floating UI elements */}
                    <motion.div
                      className="absolute top-20 -right-16 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                    >
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-40 -left-16 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 }}
                    >
                      <Bell className="h-6 w-6 text-primary" />
                    </motion.div>

                    <motion.div
                      className="absolute top-60 -right-12 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-medium">Order Confirmed</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* App testimonials */}
          <div className="mt-20">
            <FadeInSection>
              <h3 className="text-2xl font-bold mb-8 text-center">What Retailers Say About Our App</h3>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "The app has completely transformed how I manage my store. I can place orders anytime, anywhere.",
                  name: "Priya Sharma",
                  role: "Fashion Boutique Owner",
                },
                {
                  quote:
                    "The analytics feature helps me understand what's selling and what's not, so I can make better inventory decisions.",
                  name: "Rajesh Kumar",
                  role: "Clothing Store Manager",
                },
                {
                  quote:
                    "Real-time notifications keep me updated on my orders. The offline mode is a lifesaver in areas with poor connectivity.",
                  name: "Anita Patel",
                  role: "Retail Entrepreneur",
                },
              ].map((testimonial, index) => (
                <FadeInSection key={index} delay={index * 0.1} direction="up">
                  <motion.div
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col"
                    whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  >
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400 inline-block"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground flex-1 italic">"{testimonial.quote}"</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about partnering with THE BIG FASHION
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I become a retail partner?",
                answer:
                  "Becoming a retail partner is simple. Fill out the application form on our website, and our team will contact you to discuss the partnership details and onboarding process.",
              },
              {
                question: "What are the requirements to join?",
                answer:
                  "We partner with small and medium-sized fashion retailers in Tier 2 and Tier 3 cities. You should have a physical store and a commitment to growing your business with quality products.",
              },
              {
                question: "Is there a minimum order quantity?",
                answer:
                  "No, we offer flexible ordering with no minimum order quantities. You can order what you need, when you need it, to optimize your inventory and cash flow.",
              },
              {
                question: "How does the delivery process work?",
                answer:
                  "Once you place an order through our platform, our logistics team arranges delivery to your store. You can track your order in real-time through our app or website.",
              },
              {
                question: "What kind of support do you provide?",
                answer:
                  "We provide comprehensive support including business analytics, market insights, inventory management tools, and dedicated account managers to help you grow your business.",
              },
            ].map((faq, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div
                  className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h3 className="text-xl font-semibold">{faq.question}</h3>
                      <ChevronRight className="h-5 w-5 transition-transform duration-300 group-open:rotate-90" />
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Have more questions?</p>
            <Link href="/contact" className="text-primary font-medium hover:underline inline-flex items-center">
              Contact our team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  )
}
