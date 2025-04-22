"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Truck,
  Zap,
  LineChart,
  Users,
  CheckCircle,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import ScrollToTop from "@/components/scroll-to-top"

// Update the imports at the top to include our new components
import { OptimizedImage } from "@/components/ui/optimized-image"
import { getCategoryImage } from "@/lib/image-repository"

export default function Home() {
  const [isLoading, setIsLoading] = useState({
    demo: false,
    contact: false,
  })
  const [activeTestimonial, setActiveTestimonial] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Replace the testimonials array with this updated version that uses our image repository
  const testimonials = [
    {
      quote:
        "This platform completely transformed our retail operations. We've seen a 40% increase in sales and 60% reduction in stockouts.",
      name: "Rajesh Kumar",
      position: "Owner, Fashion Hub Lucknow",
      image: getCategoryImage("testimonial", 0).src,
    },
    {
      quote:
        "The risk-free logistics model allowed us to expand our product range without increasing our inventory costs. Game changer!",
      name: "Priya Sharma",
      position: "Director, Style Studio Kanpur",
      image: getCategoryImage("testimonial", 1).src,
    },
    {
      quote:
        "Their analytics tools helped us identify trends we never would have seen. Our business has grown 35% in just six months.",
      name: "Amit Singh",
      position: "Founder, Trendsetter Varanasi",
      image: getCategoryImage("testimonial", 2).src,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-black-and-white-outfit-39880-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <motion.div className="container relative z-20 px-4 py-32 md:py-40 text-center" style={{ opacity, scale, y }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              <Sparkles className="mr-1 h-3 w-3" /> Revolutionizing Fashion Retail
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empower Your Retail Business with <span className="text-primary">Risk-Free</span> Technology
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The ultimate tech platform for fashion retailers in Tier 2 & 3 cities. Streamline operations, eliminate
            risk, and scale your business.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
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
              Schedule a Demo
            </ButtonWithFeedback>
            <ButtonWithFeedback
              size="lg"
              variant="outlineGlow"
              onClick={handleContactClick}
              isLoading={isLoading.contact}
              loadingText="Connecting..."
              className="text-base px-8 py-6"
            >
              Contact Sales
            </ButtonWithFeedback>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {["Trusted by 500+ retailers", "Serving 20+ cities in UP", "40% average growth for partners"].map(
              (text, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-300 text-sm">{text}</span>
                </div>
              ),
            )}
          </motion.div>
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

      {/* Problem Statement Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenges Facing Fashion Retailers Today</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Small and medium retailers in Tier 2 & 3 cities face unique obstacles that limit their growth potential.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Inventory Risk",
                description:
                  "Unsold inventory ties up capital and reduces profitability, creating significant financial pressure.",
              },
              {
                icon: <LineChart className="h-10 w-10 text-primary" />,
                title: "Limited Market Insights",
                description:
                  "Without data analytics, retailers struggle to understand customer preferences and market trends.",
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Complex Supply Chain",
                description:
                  "Managing suppliers, logistics, and inventory becomes overwhelming without proper systems.",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full"
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <div className="rounded-full bg-primary/10 p-4 inline-block mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0 z-0"></div>
        <div className="container px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Solution
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">A Revolutionary Approach to Retail</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We've built a comprehensive platform that addresses every challenge facing fashion retailers in Tier 2 &
                3 cities.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                  <OptimizedImage
                    src={getCategoryImage("feature", 0).src}
                    alt="Platform dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">The Ultimate Retail Tech Platform</h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
                      title: "Risk-Free Logistics",
                      description:
                        "Our revolutionary model eliminates inventory risk, ensuring you only pay for what sells.",
                    },
                    {
                      icon: <BarChart3 className="h-6 w-6 text-primary" />,
                      title: "Advanced Analytics",
                      description:
                        "Make data-driven decisions with real-time insights into customer preferences and market trends.",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Streamlined Operations",
                      description: "Automate inventory management, order processing, and supply chain logistics.",
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6 text-primary" />,
                      title: "Growth Acceleration",
                      description: "Access tools and strategies that have helped retailers achieve 40% average growth.",
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

                <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/solutions" className="inline-flex items-center text-primary font-medium hover:underline">
                    Explore all features
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined process makes it easy to transform your retail business
              </p>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  number: "01",
                  title: "Connect",
                  description: "Schedule a consultation with our team to discuss your business needs.",
                },
                {
                  number: "02",
                  title: "Onboard",
                  description: "We'll set up your account and integrate our platform with your business.",
                },
                {
                  number: "03",
                  title: "Optimize",
                  description: "Use our tools to streamline operations and make data-driven decisions.",
                },
                {
                  number: "04",
                  title: "Scale",
                  description: "Grow your business with our ongoing support and advanced features.",
                },
              ].map((step, index) => (
                <FadeInSection key={index} delay={index * 0.1} direction="up">
                  <motion.div
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col items-center text-center relative"
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    <div className="absolute -top-6 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mt-6 mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonWithFeedback size="lg" onClick={handleDemoClick} className="px-8">
                Get Started Today
              </ButtonWithFeedback>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Powerful Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Succeed</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive platform offers all the tools and features you need to transform your retail business
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-primary" />,
                title: "Inventory Management",
                description:
                  "Real-time tracking, low-stock alerts, and automated reordering to optimize your inventory.",
              },
              {
                icon: <LineChart className="h-8 w-8 text-primary" />,
                title: "Sales Analytics",
                description:
                  "Comprehensive dashboards and reports to track performance and identify growth opportunities.",
              },
              {
                icon: <Truck className="h-8 w-8 text-primary" />,
                title: "Flexible Ordering",
                description: "Place orders with customizable MOQs tailored to your specific business needs.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Premium FrontStore",
                description: "Offer your customers a high-quality shopping experience with our customizable interface.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Customer Insights",
                description: "Understand your customers better with detailed demographic and behavioral data.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "Growth Tools",
                description: "Access marketing templates, promotion strategies, and business expansion resources.",
              },
            ].map((feature, index) => (
              <FadeInSection key={index} delay={index * 0.05} direction="up">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                >
                  <div className="rounded-full bg-primary/10 p-4 inline-block mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Partners Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hear from retailers who have transformed their businesses with our platform
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="absolute -top-5 -left-5">
                <div className="text-6xl text-primary">"</div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="pt-6"
                >
                  <p className="text-xl md:text-2xl italic mb-8">{testimonials[activeTestimonial].quote}</p>

                  <div className="flex items-center">
                    <div className="mr-4 rounded-full overflow-hidden w-16 h-16 border-2 border-primary">
                      <OptimizedImage
                        src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[activeTestimonial].name}
                        width={64}
                        height={64}
                        aspectRatio="aspect-square"
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-muted-foreground">{testimonials[activeTestimonial].position}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-12 right-12 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeTestimonial ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Retail Partners", value: "500+" },
              { label: "Cities Served", value: "20+" },
              { label: "Avg. Growth Rate", value: "40%" },
              { label: "Customer Satisfaction", value: "98%" },
            ].map((stat, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: `url(${getCategoryImage("background", 0).src})` }}
        ></div>

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
                Everything you need to know about our platform and services
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How does the risk-free logistics model work?",
                answer:
                  "Our risk-free logistics model allows retailers to access inventory without the traditional upfront investment. You only pay for products after they sell, eliminating the risk of unsold inventory. We manage the supply chain, warehousing, and distribution, while you focus on selling and growing your business.",
              },
              {
                question: "What size retailers can benefit from your platform?",
                answer:
                  "Our platform is specifically designed for small and medium-sized fashion retailers in Tier 2 and Tier 3 cities of Uttar Pradesh. Whether you have a single store or multiple locations, our scalable solutions can be tailored to meet your specific needs and growth objectives.",
              },
              {
                question: "How long does implementation take?",
                answer:
                  "Most retailers are fully onboarded within 1-2 weeks. Our streamlined implementation process includes account setup, inventory integration, staff training, and customization of your dashboard. We provide hands-on support throughout the entire process to ensure a smooth transition.",
              },
              {
                question: "What kind of analytics does the platform provide?",
                answer:
                  "Our platform offers comprehensive analytics including sales performance, inventory turnover, customer demographics, purchasing patterns, and market trends. These insights help you make data-driven decisions to optimize inventory, improve marketing, and increase profitability.",
              },
              {
                question: "Is there a minimum contract period?",
                answer:
                  "We offer flexible partnership options with no long-term commitments required. You can choose from monthly or annual plans based on your business needs, with the ability to upgrade or adjust your services as your business grows.",
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
            <p className="text-muted-foreground mb-4">Still have questions?</p>
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
