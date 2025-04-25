"use client"

import {
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
  MapPin,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import FadeInSection from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
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
          overlayOpacity={0.6}
          priority={true}
        />
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-36 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 mb-6"
          >
            Our Story
          </motion.div>
          <motion.h1
            className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing Fashion Retail
          </motion.h1>
          <motion.div
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block px-6 py-3 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
              Empowering 30 retailers across 3 cities with technology and insights
            </span>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Our Approach
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <div className="w-16 h-1 bg-primary/80 rounded-full mx-auto mb-6"></div>
            </div>
          </FadeInSection>

          {keyDifferentiators.map((differentiator, index) => (
            <FadeInSection key={index} delay={index * 0.2}>
              <div className="mb-20 last:mb-0">
                <div className="flex flex-col md:flex-row items-start gap-12">
                  <div className="md:w-1/3">
                    <motion.div
                      className="flex items-center gap-4 mb-6"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="rounded-full bg-primary/10 p-4 flex items-center justify-center">
                        {differentiator.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{differentiator.title}</h3>
                    </motion.div>
                    <div className="hidden md:block">
                      <motion.div
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <EnhancedImage
                          src={index === 0 ? "/retail-operations-dashboard.png" : "/supply-chain-logistics.png"}
                          alt={differentiator.title}
                          width={400}
                          height={300}
                          className="rounded-xl shadow-md border border-border/50"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {differentiator.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border/50 relative overflow-hidden"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-primary/40"></div>
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
      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <EnhancedImage
                  src="/digital-fashion-hub.png"
                  alt="Our mission in action"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  rounded="xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <span className="text-sm font-medium text-primary-foreground/90 bg-primary/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      Our Commitment
                    </span>
                    <h3 className="text-xl font-bold mt-2">Bridging the gap between manufacturers and retailers</h3>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <motion.div
                  className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Our Purpose
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Transforming India's Fashion Retail Ecosystem
                </h2>
                <p className="text-lg text-muted-foreground">
                  At THE BIG FASHION, we're on a mission to revolutionize how clothing reaches India's vast network of
                  retailers. We combine cutting-edge technology with deep industry expertise to create a seamless
                  wholesale experience.
                </p>
                <div className="pt-4 p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <Target className="h-4 w-4 text-primary" />
                    </span>
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To create a future where every fashion retailer in India, regardless of size, has access to the
                    inventory, tools, and insights needed to build a thriving business.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Our Foundation
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values That Drive Us</h2>
              <div className="w-16 h-1 bg-primary/80 rounded-full mx-auto mb-6"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <FadeInSection key={index} delay={index * 0.15}>
                <motion.div
                  className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700/50 h-full flex flex-col relative overflow-hidden"
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>

                  <motion.div
                    className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-6 mt-4"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground flex-grow">{value.description}</p>

                  {/* Bottom decoration */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/50">
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

      {/* Trust Factors - ANIMATED STATS */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        </div>
        <div className="container relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Our Impact
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Retailers Trust Us</h2>
              <div className="w-16 h-1 bg-primary/80 rounded-full mt-4 mb-6"></div>
            </div>
          </FadeInSection>

          <AnimatedStats
            stats={[
              {
                value: 30,
                suffix: "",
                label: "Retailers Served Across 3 Cities",
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
        subtitle="Our streamlined approach to creating quality fashion products"
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
              "Leveraging our efficient logistics network to ensure timely delivery across Vasai, Nalasopara, and Virar.",
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
        className="py-24 bg-muted/20"
      />

      {/* Team Section */}
      <TeamSection />

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_60%)]" />

          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 0.3, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />

          {/* Animated pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-white/50"
                style={{
                  top: `${15 + i * 15}%`,
                  left: 0,
                  right: 0,
                }}
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: false }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left content - Main CTA */}
              <div className="lg:col-span-3 space-y-6">
                <motion.div
                  className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/30 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Join Our Network
                </motion.div>

                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Ready to transform your retail business?
                </motion.h2>

                <motion.p
                  className="text-lg text-white/80 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Join successful retailers in Vasai, Nalasopara, and Virar who have partnered with THE BIG FASHION to
                  increase sales, reduce costs, and grow their business.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/partners">Become a Partner</Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </motion.div>

                {/* Social proof */}
                <motion.div
                  className="pt-6 border-t border-white/20 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-white/70 text-sm mb-3">Trusted by retailers across:</p>
                  <div className="flex flex-wrap gap-3">
                    {["Vasai", "Nalasopara", "Virar"].map((location, index) => (
                      <span
                        key={location}
                        className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white"
                      >
                        <MapPin className="h-3 w-3 mr-1" />
                        {location}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right content - Stats card */}
              <motion.div
                className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />

                <h3 className="text-xl font-bold text-white mb-4">Partner Success</h3>

                <div className="space-y-4">
                  {[
                    { label: "Average Revenue Growth", value: "42%", icon: <TrendingUp className="h-5 w-5" /> },
                    { label: "Reduction in Dead Stock", value: "28%", icon: <Package className="h-5 w-5" /> },
                    { label: "Operational Efficiency", value: "35%", icon: <BarChart3 className="h-5 w-5" /> },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="rounded-full bg-white/20 p-2 flex-shrink-0">{stat.icon}</div>
                      <div>
                        <p className="text-white/70 text-sm">{stat.label}</p>
                        <p className="text-white text-xl font-bold">{stat.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/20">
                  <Link
                    href="/case-studies"
                    className="text-white flex items-center hover:underline text-sm font-medium"
                  >
                    <span>View success stories</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
