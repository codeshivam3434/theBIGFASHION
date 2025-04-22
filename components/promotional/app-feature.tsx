"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AppFeatureProps {
  icon: ReactNode
  title: string
  description: string
  index: number
}

export function AppFeature({ icon, title, description, index }: AppFeatureProps) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}
