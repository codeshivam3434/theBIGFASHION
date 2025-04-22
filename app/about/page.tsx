"use client"

import Image from "next/image"
import { CheckCircle, TrendingUp, Users, Award, Factory, Truck } from "lucide-react"
import { motion } from "framer-motion"
import FadeInSection from "@/components/fade-in-section"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import ParallaxImage from "@/components/parallax-image"
import TeamSection from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
          <Image
            src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
            alt="Our workshop in Delhi"
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
            How we're revolutionizing India's clothing wholesale industry and empowering local retailers
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">From Vision to Revolution</h2>
                <p className="text-muted-foreground mb-6">
                  Fashion Fusion began in 2018 with a bold vision: to transform how clothing reaches India's vast
                  network of retailers. Our founders, Shivam Maurya,Priyanshu Gupta,and Ankush Pal, recognized the
                  challenges faced by small and medium retailers across the country—inconsistent supply chains, limited
                  inventory access, and outdated distribution systems.
                </p>
                <p className="text-muted-foreground mb-6">
                  What started as a small operation connecting manufacturers in Mumbai with local retailers has grown
                  into India's fastest-growing wholesaler trusted by thousands of retailers nationwide. We've built a
                  modern supply chain that brings efficiency, transparency, and growth opportunities to businesses of
                  all sizes.
                </p>
                <p className="text-muted-foreground">
                  Today, Fashion Fusion stands at the forefront of India's retail revolution, empowering retailers with
                  diverse inventory, rapid restocking capabilities, and localized logistics support that understands the
                  unique challenges of the Indian market.
                </p>
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
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Our reputation is built on years of consistent quality, reliability, and innovation.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
                title: "5+ Years",
                description: "Of revolutionizing India's clothing wholesale industry",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "10,000+ Retailers",
                description: "Trust our quality and service across 20+ states in India",
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
                title: "Design & Curation",
                description:
                  "Our team works with top designers and manufacturers across India to create collections that blend traditional craftsmanship with contemporary trends that resonate with today's consumers.",
              },
              {
                icon: <Factory className="h-8 w-8 text-primary" />,
                title: "Manufacturing",
                description:
                  "We partner with ethical factories across Delhi, Mumbai, and Surat that meet our strict standards for quality, working conditions, and timely production.",
              },
              {
                icon: <Truck className="h-8 w-8 text-primary" />,
                title: "Distribution",
                description:
                  "Our efficient logistics network ensures timely delivery to retailers across India, with specialized routes and partnerships that understand local challenges.",
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

      {/* Team Section */}
      
<section className="bg-muted/50 py-16 md:py-24">
  <div className="container">
    <FadeInSection>
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Leadership</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          The visionary team behind Fashion Fusion's success.
        </p>
      </div>
    </FadeInSection>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {[
        {
          name: "Shivam Maurya",
          image: "https://source.unsplash.com/HCdBpAo1tMU/300x300",
          bio: "With over 15 years in the fashion industry, Priyanshu founded Fashion Fusion with a vision to revolutionize India's clothing wholesale ecosystem.",
        },
        {
          name: "Priyanshu Gupta",
          image: "https://source.unsplash.com/zaXJ3KA4Kg0/300x300",
          bio: "Ankush brings extensive operations expertise, having scaled multiple retail businesses across India before joining Fashion Fusion.",
        },
        {
          name: "Ankush Pal",
          image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=300&h=300&q=80",
          bio: "A visionary designer with a keen eye for emerging trends, Shivam leads our creative team in developing innovative collections.",
        },
      ].map((member, index) => (
        <FadeInSection key={index} delay={index * 0.1} direction="up">
          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="relative h-48 w-48 rounded-full overflow-hidden shadow-lg mb-4 border-4 border-white"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
              }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={192}
                height={192}
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
                Ready to join the retail revolution?
              </motion.h2>
              <motion.p
                className="mt-4 text-primary-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of successful retailers who have partnered with Fashion Fusion to access premium
                products, competitive pricing, and flexible ordering with local logistics support.
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
