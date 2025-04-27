"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { EnhancedImage } from "@/components/ui/enhanced-image"

interface RealRetailerCardProps {
  name: string
  position: string
  location?: string
  shopName?: string
  image: string
  quote: string
}

export function RealRetailerCard({ name, position, location, shopName, image, quote }: RealRetailerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <blockquote className="text-gray-700 italic mb-6">"{quote}"</blockquote>
      </div>

      <div className="border-t border-gray-100 p-6 flex items-center gap-4">
        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20">
          <EnhancedImage
            src={image}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{position}</p>
          {shopName && <p className="text-primary text-sm font-medium">{shopName}</p>}
        </div>
      </div>
    </motion.div>
  )
}
