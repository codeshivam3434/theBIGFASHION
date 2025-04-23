"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import FadeInSection from "./fade-in-section"
import { cn } from "@/lib/utils"

interface TeamSectionProps {
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  cardClassName?: string
  nameClassName?: string
  roleClassName?: string
  socialIconClassName?: string
}

export default function TeamSection({
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  cardClassName = "",
  nameClassName = "",
  roleClassName = "",
  socialIconClassName = "",
}: TeamSectionProps) {
  const team = [
    {
      name: "Ankush Sharma",
      role: "CEO & Co-Founder",
      bio: "Former fashion retail executive with 15+ years of experience in the Indian market.",
      image: "/images/team/ankush.png",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Shivam Patel",
      role: "CTO & Co-Founder",
      bio: "Tech innovator with expertise in supply chain optimization and retail analytics.",
      image: "/images/team/shivam.png",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Priyanshu Gupta",
      role: "COO",
      bio: "Operations specialist with deep knowledge of India's diverse retail landscape.",
      image: "/images/team/priyanshu.png",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ]

  return (
    <section className={cn("py-20 bg-muted/30 relative overflow-hidden", className)}>
      <div className="container">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Our Leadership
            </span>
            <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", titleClassName)}>Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className={cn("max-w-2xl mx-auto text-muted-foreground", subtitleClassName)}>
              The visionaries behind THE BIG FASHION's mission to transform India's fashion retail ecosystem
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <FadeInSection key={index} delay={index * 0.2}>
              <motion.div
                className={cn("rounded-xl overflow-hidden shadow-lg group relative", cardClassName)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                </div>
                <div className="p-6 relative">
                  <h3 className={cn("text-xl font-bold", nameClassName)}>{member.name}</h3>
                  <p className={cn("text-sm text-muted-foreground mb-2", roleClassName)}>{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
                        socialIconClassName,
                      )}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
                        socialIconClassName,
                      )}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
                        socialIconClassName,
                      )}
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
