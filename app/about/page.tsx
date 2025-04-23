"use client"
import { CheckCircle, TrendingUp, Users, Award, Factory, Truck } from "lucide-react"
import { motion } from "framer-motion"
import FadeInSection from "@/components/fade-in-section"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import ParallaxImage from "@/components/parallax-image"
import TeamSection from "@/components/team-section"
import { VideoBackground } from "@/components/ui/video-background"

export default function AboutPage() {
  // Company stats with icons and values
  const companyStats = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      value: "5+",
      label: "Years",
      description: "Revolutionizing India's fashion wholesale",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "10,000+",
      label: "Retailers",
      description: "Across 20+ states in India",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      value: "100%",
      label: "Quality",
      description: "Rigorous quality control standards",
    },
  ]

  // Company process steps
  const processSteps = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Design & Curation",
      description: "Blending traditional craftsmanship with contemporary trends",
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      title: "Manufacturing",
      description: "Ethical factories with strict quality standards",
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Distribution",
      description: "Efficient logistics network across India",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative">
        <VideoBackground
          src="/videos/fashion-production.mp4"
          fallbackImage="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80"
          overlayOpacity={0.7}
          priority={true}
        />
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center text-white">
          <motion.h1
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          <motion.div
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block px-6 py-3 bg-black/30 backdrop-blur-sm rounded-lg">
              Revolutionizing India's clothing wholesale industry since 2018
            </span>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">From Vision to Revolution</h2>
                <div className="space-y-6">
                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }}>
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Founded in 2018 with a vision to transform how clothing reaches India's vast network of retailers.
                    </p>
                  </motion.div>

                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }}>
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Grew from a small operation to India's fastest-growing wholesaler trusted by thousands of
                      retailers.
                    </p>
                  </motion.div>

                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }}>
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Built a modern supply chain bringing efficiency, transparency, and growth opportunities to
                      businesses.
                    </p>
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection direction="right" delay={0.2}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Our founders"
                width={800}
                height={800}
                className="relative aspect-square overflow-hidden rounded-lg shadow-xl"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="bg-muted/60 py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        </div>
        <div className="container relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Retailers Trust Us</h2>
              <div className="w-24 h-1 bg-primary rounded-full mt-4 mb-6"></div>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                >
                  <div className="rounded-full bg-primary/10 p-3 mb-4">{stat.icon}</div>
                  <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                  <p className="text-lg font-medium">{stat.label}</p>
                  <p className="mt-2 text-muted-foreground">{stat.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From Design to Delivery</h2>
              <div className="w-24 h-1 bg-primary rounded-full mt-4 mb-6"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <FadeInSection key={index} delay={index * 0.2} direction="up">
                <motion.div className="flex flex-col items-center text-center p-6 relative" whileHover={{ y: -5 }}>
                  {/* Connecting line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-1/4 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
                  )}

                  <motion.div
                    className="rounded-full bg-primary/10 p-6 mb-6 relative z-10"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(var(--primary), 0.3)",
                    }}
                  >
                    {process.icon}
                    <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

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
                Ready to join the retail revolution?
              </motion.h2>
              <motion.p
                className="mt-4 text-primary-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of successful retailers who have partnered with Fashion Fusion.
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
                  window.location.href = "/partners"
                }}
              >
                Become a Partner
              </ButtonWithFeedback>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
