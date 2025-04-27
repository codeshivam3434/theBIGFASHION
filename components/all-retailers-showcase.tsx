"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import FadeInSection from "@/components/fade-in-section"

interface Retailer {
  name: string
  position: string
  location: string
  shopName: string
  image: string
  quote?: string
}

export function AllRetailersShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const retailers: Retailer[] = [
    {
      name: "Vishal Gupta",
      position: "Owner",
      location: "Vijaypur",
      shopName: "Rangoli Readymade",
      image: "/images/testimonials/vishal-gupta.jpeg",
      quote: "40% sales increase since joining BIGFASHION",
    },
    {
      name: "Mohit",
      position: "Manager",
      location: "Hussepur",
      shopName: "Pintu Vastralay",
      image: "/images/testimonials/mohit.jpeg",
      quote: "Doubled our product range with zero inventory risk",
    },
    {
      name: "Nihal Gupta",
      position: "Owner",
      location: "Vijaypur",
      shopName: "Rangoli Store",
      image: "/images/testimonials/nihal-gupta.jpeg",
      quote: "35% business growth in just 6 months",
    },
    {
      name: "Suraj Rauniyar",
      position: "Owner",
      location: "Salempur",
      shopName: "Suraj Fashion",
      image: "/images/testimonials/suraj-rauniyar.png",
      quote: "50% more product variety with minimal risk",
    },
    {
      name: "Qadir",
      position: "Owner",
      location: "Chinchoti",
      shopName: "AK Men's Wear",
      image: "/images/testimonials/qadir.png",
      quote: "30% higher profit margins with data-driven decisions",
    },
    {
      name: "Imraan",
      position: "Owner",
      location: "Vasai West",
      shopName: "Trendyz",
      image: "/images/testimonials/imraan.png",
      quote: "25% time saved on operations and logistics",
    },
    {
      name: "Nabi",
      position: "Owner",
      location: "Vasai West",
      shopName: "Groovy Collection",
      image: "/images/testimonials/nabi.png",
      quote: "Added 15 new premium brands with zero risk",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Our Community
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Our Retail Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These successful retailers have transformed their businesses with BIGFASHION
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {retailers.map((retailer, index) => (
            <motion.div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-gray-100 group-hover:border-primary/30 transition-colors duration-300">
                  <EnhancedImage
                    src={retailer.image}
                    alt={retailer.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay with retailer info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{retailer.name}</h3>
                    <p className="text-white/90 text-sm">{retailer.shopName}</p>
                    <p className="text-white/80 text-xs">{retailer.location}</p>
                    {retailer.quote && <p className="text-white/90 text-xs mt-2 italic">"{retailer.quote}"</p>}
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <h3 className="font-bold">{retailer.name}</h3>
                <p className="text-sm text-gray-600">{retailer.shopName}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
