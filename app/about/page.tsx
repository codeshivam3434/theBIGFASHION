"use client"

import Image from "next/image"
import { CheckCircle, TrendingUp, Users, Award, Factory, Truck } from "lucide-react"
import { motion } from "framer-motion"
import FadeInSection from "@/components/fade-in-section"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import ParallaxImage from "@/components/parallax-image"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Our workshop"
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
            Our Story
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How we're connecting manufacturers to retailers while growing our own distinctive clothing line.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">From Factory to Fashion</h2>
                <p className="text-muted-foreground mb-6">
                  Fashion Fusion began in 2016 with a simple mission: to bridge the gap between premium manufacturers
                  and ambitious retailers. Our founders, with decades of experience in textile manufacturing and retail
                  operations, recognized the inefficiencies in the traditional supply chain.
                </p>
                <p className="text-muted-foreground mb-6">
                  What started as a small operation connecting local manufacturers with boutique retailers has grown
                  into a global platform serving hundreds of partners across the fashion industry. Along the way, we've
                  developed our own distinctive clothing line that embodies our commitment to quality, style, and
                  sustainability.
                </p>
                <p className="text-muted-foreground">
                  Today, Fashion Fusion stands at the intersection of manufacturing excellence and retail innovation,
                  creating value for partners on both sides of the fashion ecosystem.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection direction="right" delay={0.2}>
              <ParallaxImage
                src="/placeholder.svg?height=800&width=800"
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Partners Trust Us</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Our reputation is built on years of consistent quality, reliability, and innovation.
              </p>
            </div>
          </FadeInSection>
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

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                From design to delivery, we maintain the highest standards at every step.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Design & Development",
                description:
                  "Our in-house design team works closely with trend forecasters to create collections that resonate with today's consumers while maintaining timeless appeal.",
              },
              {
                icon: <Factory className="h-8 w-8 text-primary" />,
                title: "Manufacturing",
                description:
                  "We partner with ethical factories that meet our strict standards for quality, working conditions, and environmental responsibility.",
              },
              {
                icon: <Truck className="h-8 w-8 text-primary" />,
                title: "Distribution",
                description:
                  "Our efficient logistics network ensures timely delivery to retailers worldwide, with transparent tracking and flexible shipping options.",
              },
            ].map((process, index) => (
              <FadeInSection key={index} delay={index * 0.2} direction="up">
                <motion.div className="flex flex-col items-center text-center p-6" whileHover={{ y: -5 }}>
                  <motion.div
                    className="rounded-full bg-primary/10 p-4 mb-4"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(var(--primary), 0.3)",
                    }}
                  >
                    {process.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Leadership</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The experienced team behind Fashion Fusion's success.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexandra Chen",
                role: "CEO & Co-Founder",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Marcus Williams",
                role: "COO & Co-Founder",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sophia Rodriguez",
                role: "Creative Director",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Kim",
                role: "Head of Partnerships",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div className="flex flex-col items-center text-center" whileHover={{ y: -5 }}>
                  <motion.div
                    className="relative h-48 w-48 overflow-hidden rounded-full mb-4"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
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
                Ready to partner with us?
              </motion.h2>
              <motion.p
                className="mt-4 text-primary-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join hundreds of successful retailers who have partnered with Fashion Fusion to access premium products,
                competitive pricing, and flexible ordering.
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
                size="lg"
                variant="secondary"
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

