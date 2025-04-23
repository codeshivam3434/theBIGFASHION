"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Priyanshu Gupta",
      role: "Co-Founder & Chief Strategy Officer",
      image: "/images/team/priyanshu.png",
      bio: "Visionary strategist with expertise in fashion retail market trends and business development.",
      socialLinks: [
        { icon: <Linkedin className="h-4 w-4" />, url: "#" },
        { icon: <Twitter className="h-4 w-4" />, url: "#" },
        { icon: <Mail className="h-4 w-4" />, url: "#" },
      ],
    },
    {
      name: "Shivam Maurya",
      role: "Co-Founder & Chief Executive Officer",
      image: "/images/team/shivam.png",
      bio: "Tech innovator driving our digital transformation and operational excellence initiatives.",
      socialLinks: [
        { icon: <Linkedin className="h-4 w-4" />, url: "#" },
        { icon: <Twitter className="h-4 w-4" />, url: "#" },
        { icon: <Mail className="h-4 w-4" />, url: "#" },
      ],
    },
    {
      name: "Ankush Pal",
      role: "Co-Founder & Chief Technology Officer",
      image: "/images/team/ankush.png",
      bio: "Supply chain expert with a passion for creating seamless logistics solutions for retailers.",
      socialLinks: [
        { icon: <Linkedin className="h-4 w-4" />, url: "#" },
        { icon: <Twitter className="h-4 w-4" />, url: "#" },
        { icon: <Mail className="h-4 w-4" />, url: "#" },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      </div>

      <div className="container relative z-10">
        <FadeInSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Visionaries</h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <FadeInSection key={index} delay={index * 0.15} direction="up">
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  {/* Gradient overlay that appears on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-[3/4] relative"
                  >
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* Social links that appear on hover */}
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-20 opacity-0 group-hover:opacity-100"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.socialLinks.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.url}
                        className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>

                <div className="text-center">
                  <motion.h3 className="text-xl font-bold mb-1" whileHover={{ color: "var(--color-primary)" }}>
                    {member.name}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
