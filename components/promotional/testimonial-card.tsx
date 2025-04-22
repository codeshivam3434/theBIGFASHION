"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
interface TestimonialCardProps {
  quote: string
  name: string
  position: string
  company: string
  image: string
}

export function TestimonialCard({ quote, name, position, company, image }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col"
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <Quote className="h-8 w-8 text-primary/40" />
      </div>
      <p className="text-lg italic mb-8 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="mr-4 rounded-full overflow-hidden w-16 h-16 border-2 border-primary">
          <OptimizedImage
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            aspectRatio="aspect-square"
            className="w-full h-full"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-muted-foreground">{position}</p>
          <p className="text-primary font-medium">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}
