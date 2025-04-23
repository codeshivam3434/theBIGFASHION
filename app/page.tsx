"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Truck,
  Zap,
  Users,
  CheckCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import ScrollToTop from "@/components/scroll-to-top"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import { getCategoryImage } from "@/lib/image-repository"
import { VideoTestimonialsSection } from "@/components/video-testimonials-section"
import { videoTestimonials } from "@/data/video-testimonials"
import { VisualExplainer } from "@/components/visual-explainer"
import { ProcessFlow } from "@/components/process-flow"
import { BeforeAfterComparison } from "@/components/before-after-comparison"
import { imageSizes } from "@/lib/image-sizing"
import { HomePageJsonLd, ProductJsonLd, FAQJsonLd } from "./structured-data"
import { ButtonHierarchy } from "@/components/ui/button-hierarchy"

export default function Home() {
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

  // Testimonials with consistent image sizing
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
      {/* Structured Data for SEO */}
      <HomePageJsonLd />
      <ProductJsonLd />
      <FAQJsonLd />

      {/* Hero Section with High-Quality Background Image */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Replace video background with high-quality image */}
        <div className="absolute inset-0 z-0">
          <EnhancedImage
            src="/vibrant-retail-experience.png"
            alt="Fashion retail store with modern technology integration"
            fill
            priority
            quality="high"
            objectFit="cover"
            className="brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10"></div>
        </div>

        <motion.div className="container relative z-20 px-4 py-32 md:py-40 text-center" style={{ opacity, scale, y }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              <Sparkles className="mr-1 h-3 w-3" /> India's #1 Fashion Retail Platform
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Grow Your Retail Business <span className="text-primary">Without Financial Risk</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our revolutionary platform helps fashion retailers in Tier 2 & 3 cities increase sales by 40% while
            eliminating inventory risk.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ButtonHierarchy
              hierarchy="primary"
              size="lg"
              onClick={handleDemoClick}
              isLoading={isLoading.demo}
              loadingText="Scheduling demo..."
              className="text-base px-8 py-6 font-semibold"
            >
              Get Started Free
            </ButtonHierarchy>
            <ButtonHierarchy
              hierarchy="tertiary"
              size="lg"
              asChild
              className="text-base text-white border-white hover:bg-white/10"
            >
              <Link href="/solutions">See How It Works</Link>
            </ButtonHierarchy>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              "500+ retailers trust us",
              "Serving 20+ cities in UP",
              "40% average growth for partners",
              "Zero inventory risk",
            ].map((text, i) => (
              <div key={i} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-200 text-sm">{text}</span>
              </div>
            ))}
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

      {/* Value Proposition Section - NEW */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Retailers Choose Fashion Fusion</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform is specifically designed to solve the unique challenges of fashion retailers in Tier 2 & 3
              cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: "Zero Financial Risk",
                description:
                  "Our revolutionary pay-for-what-sells model means you never pay for unsold inventory, eliminating your biggest business risk.",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-primary" />,
                title: "Data-Driven Decisions",
                description:
                  "Access powerful analytics that predict local trends and customer preferences before your competitors.",
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Local Logistics Network",
                description:
                  "Our specialized delivery network reaches 20+ states with most deliveries arriving within 24-48 hours.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Proven Growth Results",
                description:
                  "Our partners see an average of 40% business growth within the first year of using our platform.",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground flex-grow">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section - Visual Explainer */}
      <VisualExplainer
        title="The Challenges Facing Fashion Retailers Today"
        subtitle="Small and medium retailers in Tier 2 & 3 cities face unique obstacles that limit their growth potential."
        steps={[
          {
            title: "Inventory Risk",
            description:
              "Unsold inventory ties up capital and reduces profitability, creating significant financial pressure.",
            icon: <TrendingUp className="h-6 w-6" />,
            illustration: "/fashion-glut.png",
            color: "primary",
          },
          {
            title: "Limited Market Insights",
            description:
              "Without data analytics, retailers struggle to understand customer preferences and market trends.",
            icon: <BarChart3 className="h-6 w-6" />,
            illustration: "/bewildered-business-analysis.png",
            color: "purple-500",
          },
          {
            title: "Complex Supply Chain",
            description: "Managing suppliers, logistics, and inventory becomes overwhelming without proper systems.",
            icon: <Truck className="h-6 w-6" />,
            illustration: "/interconnected-fashion-flow.png",
            color: "blue-500",
          },
        ]}
        className="py-20 bg-gradient-to-b from-background to-muted/30"
      />

      {/* Solution Section with High-Quality Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EnhancedImage
            src="/fashion-retail-insights.png"
            alt="Retail analytics dashboard showing sales performance"
            fill
            quality="high"
            objectFit="cover"
            className="brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10"></div>
        </div>

        <div className="container px-4 relative z-20">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Solution
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">A Revolutionary Approach to Retail</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  <EnhancedImage
                    src="/fashion-retail-dashboard.png"
                    alt="Platform dashboard showing sales analytics and inventory management"
                    width={imageSizes.feature.large.width}
                    height={imageSizes.feature.large.height}
                    className="w-full h-auto"
                    quality="high"
                    rounded="lg"
                  />
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">The Ultimate Retail Tech Platform</h3>

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
                        <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                        <p className="text-gray-300">{feature.description}</p>
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

      {/* How It Works - Process Flow */}
      <ProcessFlow
        title="How It Works"
        subtitle="Our streamlined process makes it easy to transform your retail business"
        steps={[
          {
            number: "01",
            title: "Connect",
            description: "Schedule a consultation with our team to discuss your business needs.",
            icon: <Users className="h-6 w-6 text-primary" />,
          },
          {
            number: "02",
            title: "Onboard",
            description: "We'll set up your account and integrate our platform with your business.",
            icon: <Zap className="h-6 w-6 text-primary" />,
          },
          {
            number: "03",
            title: "Optimize",
            description: "Use our tools to streamline operations and make data-driven decisions.",
            icon: <BarChart3 className="h-6 w-6 text-primary" />,
          },
          {
            number: "04",
            title: "Scale",
            description: "Grow your business with our ongoing support and advanced features.",
            icon: <TrendingUp className="h-6 w-6 text-primary" />,
          },
        ]}
        className="py-20 bg-muted/30"
      />

      <div className="container px-4 pb-20 bg-muted/30">
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ButtonHierarchy hierarchy="primary" size="lg" onClick={handleDemoClick} className="px-8">
              Get Started Today
            </ButtonHierarchy>
          </motion.div>
        </div>
      </div>

      {/* Before/After Comparison */}
      <BeforeAfterComparison
        title="Transform Your Retail Business"
        subtitle="See the difference our platform makes for fashion retailers"
        beforeTitle="Traditional Approach"
        afterTitle="With Our Platform"
        beforeImage="/retail-inventory-overload.png"
        afterImage="/modern-retail-inventory.png"
        beforePoints={[
          "Capital tied up in unsold inventory",
          "Manual tracking of sales and stock",
          "Limited visibility into customer preferences",
          "Reactive approach to market trends",
          "Complex supplier management",
          "High operational overhead",
        ]}
        afterPoints={[
          "Risk-free inventory model - pay only for what sells",
          "Real-time digital inventory management",
          "Data-driven customer insights",
          "Proactive trend identification and forecasting",
          "Streamlined supply chain with full visibility",
          "Reduced operational costs with automation",
        ]}
        className="py-20 bg-gradient-to-b from-muted/30 to-background"
      />

      {/* Features Section - Reduced to 3 Key Features */}
      <section className="py-20">
        <div className="container px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Key Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Succeed</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive platform offers powerful tools to transform your retail business
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-primary" />,
                title: "Advanced Analytics",
                description:
                  "Gain powerful insights with real-time dashboards and reports to track performance, identify trends, and make data-driven decisions that boost your bottom line.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Risk-Free Inventory",
                description:
                  "Our revolutionary model eliminates financial risk with a pay-for-what-sells approach, freeing up your capital and allowing you to offer a wider product range.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Streamlined Operations",
                description:
                  "Automate your entire business workflow from inventory management to order processing and customer insights, saving time and reducing operational costs.",
              },
            ].map((feature, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
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

      {/* Video Testimonials Section */}
      <VideoTestimonialsSection testimonials={videoTestimonials} />

      {/* CTA Section with High-Quality Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EnhancedImage
            src="/tech-chic-boutique.png"
            alt="Fashion retail success"
            fill
            quality="high"
            objectFit="cover"
            className="brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10"></div>
        </div>

        <div className="container px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center text-white bg-black/30 p-10 rounded-2xl backdrop-blur-sm">
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
              <ButtonHierarchy
                hierarchy="primary"
                size="lg"
                className="text-base px-8 py-6 hover:bg-secondary/90 bg-white text-primary hover:text-primary"
                onClick={handleDemoClick}
              >
                Get Started Free
              </ButtonHierarchy>
              <ButtonHierarchy
                hierarchy="tertiary"
                size="lg"
                asChild
                className="text-white border-white hover:bg-white/20 font-medium text-base px-8 py-6"
              >
                <Link href="/solutions">Learn More</Link>
              </ButtonHierarchy>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  )
}
