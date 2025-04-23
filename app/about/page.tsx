"use client"

import {
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Truck,
  Target,
  Heart,
  Shield,
  BarChart3,
  Package,
  Clock,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import FadeInSection from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import ParallaxImage from "@/components/parallax-image"
import TeamSection from "@/components/team-section"
import { VideoBackground } from "@/components/ui/video-background"
import { ProcessFlow } from "@/components/process-flow"
import { AnimatedStats } from "@/components/animated-stats"
import { EnhancedImage } from "@/components/ui/enhanced-image"

export default function AboutPage() {
  // Core values with icons - using consistent styling
  const coreValues = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "Constantly evolving our platform and services to meet the changing needs of fashion retailers.",
      color: "primary",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Empowerment",
      description: "Providing retailers with the tools and insights they need to grow their businesses sustainably.",
      color: "primary",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Integrity",
      description: "Building trust through transparent practices and ethical business relationships.",
      color: "primary",
    },
  ]

  // Key differentiators - retailer operations and supply chain
  const keyDifferentiators = [
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Seamless Retailer-Level Operations",
      features: [
        {
          title: "Intelligent Sales Management",
          description: "Real-time analytics and forecasting to optimize your sales strategy and maximize revenue.",
        },
        {
          title: "Smart Inventory Control",
          description: "Automated inventory tracking with low-stock alerts and reordering recommendations.",
        },
        {
          title: "Dead Stock Prevention",
          description:
            "Proactive identification of slow-moving items with actionable strategies to prevent dead stock.",
        },
        {
          title: "Trend-Forward Selections",
          description: "Curated collections based on market analysis and emerging fashion trends.",
        },
      ],
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Seamless Supply Chain",
      features: [
        {
          title: "Integrated Logistics Network",
          description: "End-to-end visibility of your orders from warehouse to store with real-time tracking.",
        },
        {
          title: "Door-to-Door Delivery",
          description: "Reliable delivery service to your storefront, even in remote locations across India.",
        },
        {
          title: "Flexible Ordering",
          description: "Customizable order quantities and delivery schedules to match your business needs.",
        },
        {
          title: "Quality Assurance",
          description: "Rigorous quality checks at every stage of the supply chain.",
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative">
        <VideoBackground
          src="https://v0.blob.com/fashion-production-video.mp4"
          fallbackImage="/garment-warehouse-operations.png"
          overlayOpacity={0.7}
          priority={true}
        />
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center text-white">
          <motion.span
            className="inline-flex items-center rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-white ring-1 ring-inset ring-primary/30 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.span>
          <motion.h1
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing Fashion Wholesale in India
          </motion.h1>
          <motion.div
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block px-6 py-3 bg-black/30 backdrop-blur-sm rounded-lg">
              Empowering retailers with technology, logistics, and market insights since 2018
            </span>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators - FEATURED PROMINENTLY */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Our platform delivers two key advantages that transform how fashion retailers operate
              </p>
            </div>
          </FadeInSection>

          {keyDifferentiators.map((differentiator, index) => (
            <FadeInSection key={index} delay={index * 0.2}>
              <div className="mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-primary/10 p-4 flex items-center justify-center">
                        {differentiator.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{differentiator.title}</h3>
                    </div>
                    <div className="hidden md:block">
                      <EnhancedImage
                        src={index === 0 ? "/retail-operations-dashboard.png" : "/supply-chain-logistics.png"}
                        alt={differentiator.title}
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg border border-border"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {differentiator.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="bg-background rounded-xl p-6 shadow-md border border-border"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                              {featureIndex === 0 ? (
                                <BarChart3 className="h-4 w-4 text-primary" />
                              ) : featureIndex === 1 ? (
                                <Package className="h-4 w-4 text-primary" />
                              ) : featureIndex === 2 ? (
                                <Clock className="h-4 w-4 text-primary" />
                              ) : (
                                <TrendingUp className="h-4 w-4 text-primary" />
                              )}
                            </div>
                            <h4 className="font-semibold">{feature.title}</h4>
                          </div>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Transforming India's Fashion Retail Ecosystem
                </h2>
                <p className="text-lg text-muted-foreground">
                  At THE BIG FASHION, we're on a mission to revolutionize how clothing reaches India's vast network of
                  retailers. We combine cutting-edge technology with deep industry expertise to create a seamless
                  wholesale experience.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To create a future where every fashion retailer in India, regardless of size, has access to the
                    inventory, tools, and insights needed to build a thriving business.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <EnhancedImage
                  src="/digital-fashion-hub.png"
                  alt="Our mission in action"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  rounded="xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <span className="text-sm font-medium text-primary-foreground">Our Commitment</span>
                    <h3 className="text-xl font-bold mt-1">Bridging the gap between manufacturers and retailers</h3>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Core Values - WITH CONSISTENT STYLING */}
      <section className="py-20 bg-background">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values That Drive Us</h2>
              <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                These principles guide every decision we make and shape how we serve our retail partners.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <FadeInSection key={index} delay={index * 0.15}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700 h-full flex flex-col relative overflow-hidden"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Consistent styling element - top accent */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>

                  <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-6 mt-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground flex-grow">{value.description}</p>

                  {/* Consistent styling element - bottom decoration */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <div className="w-3 h-2 rounded-full bg-primary/70 mr-2"></div>
                      <div className="w-4 h-2 rounded-full bg-primary/40"></div>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <ParallaxImage
                src="/fashion-startup-warehouse.png"
                alt="Our founders"
                width={800}
                height={800}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-xl"
              />
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                  Our Journey
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">From Vision to Revolution</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">The Beginning (2018)</h3>
                      <p className="text-muted-foreground">
                        Founded with a vision to transform how clothing reaches India's vast network of retailers,
                        addressing the inefficiencies in the traditional wholesale model.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Growth & Expansion (2019-2021)</h3>
                      <p className="text-muted-foreground">
                        Grew from a small operation to India's fastest-growing wholesaler, expanding our network to
                        cover major fashion hubs across the country.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Digital Transformation (2022-Present)</h3>
                      <p className="text-muted-foreground">
                        Built a modern supply chain platform bringing efficiency, transparency, and growth opportunities
                        to thousands of fashion retailers across India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Trust Factors - ANIMATED STATS */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        </div>
        <div className="container relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Impact
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Retailers Trust Us</h2>
              <div className="w-24 h-1 bg-primary rounded-full mt-4 mb-6"></div>
            </div>
          </FadeInSection>

          <AnimatedStats
            stats={[
              {
                value: 10000,
                suffix: "+",
                label: "Retailers Served Across India",
                color: "primary",
              },
              {
                value: 42,
                suffix: "%",
                label: "Average Increase in Efficiency",
                color: "primary",
              },
              {
                value: 35,
                suffix: "%",
                label: "Reduction in Operational Costs",
                color: "primary",
              },
              {
                value: 28,
                suffix: "%",
                label: "Decrease in Dead Stock",
                color: "primary",
              },
            ]}
          />
        </div>
      </section>

      {/* Our Process - Process Flow */}
      <ProcessFlow
        title="From Design to Delivery"
        subtitle="Our approach to creating quality fashion products"
        steps={[
          {
            number: "1",
            title: "Design & Curation",
            description:
              "Blending traditional craftsmanship with contemporary trends to create collections that resonate with Indian consumers.",
            icon: <Award className="h-6 w-6 text-primary" />,
          },
          {
            number: "2",
            title: "Manufacturing",
            description:
              "Working with ethical factories that maintain strict quality standards and fair labor practices.",
            icon: <Target className="h-6 w-6 text-primary" />,
          },
          {
            number: "3",
            title: "Distribution",
            description:
              "Leveraging our efficient logistics network to ensure timely delivery across India, even to remote locations.",
            icon: <Truck className="h-6 w-6 text-primary" />,
          },
          {
            number: "4",
            title: "Retailer Support",
            description:
              "Providing ongoing analytics, inventory management tools, and business insights to help retailers thrive.",
            icon: <Users className="h-6 w-6 text-primary" />,
          },
        ]}
        className="py-20 bg-muted/30"
      />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary" />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to join the retail revolution?
              </motion.h2>
              <motion.p
                className="mt-4 text-primary-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of successful retailers who have partnered with THE BIG FASHION.
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
              <Button variant="secondary" size="lg" className="text-primary font-medium" asChild>
                <Link href="/partners">Become a Partner</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
