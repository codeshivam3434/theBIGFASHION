"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { EnhancedImage } from "@/components/ui/enhanced-image"

interface RealRetailerCardProps {
  name: string
  position: string
  location: string
  shopName: string
  image: string
  quote: string
}

export function RealRetailerCard({ name, position, location, shopName, image, quote }: RealRetailerCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col"
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-full blur-sm"></div>
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <EnhancedImage
              src={image}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-4">
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-muted-foreground">{position}</p>
        <p className="text-primary font-medium">
          {shopName}, {location}
        </p>
      </div>

      <div className="mb-6">
        <Quote className="h-8 w-8 text-primary/40 mx-auto" />
      </div>

      <p className="text-lg italic mb-8 flex-grow text-center">{quote}</p>

      <div className="flex justify-center">
        <div className="bg-primary/10 text-primary font-medium px-4 py-1 rounded-full text-sm">BIGFASHION Partner</div>
      </div>
    </motion.div>
  )
}
