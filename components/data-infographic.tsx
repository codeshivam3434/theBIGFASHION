"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DataPoint {
  value: string
  label: string
  description?: string
  icon: React.ReactNode
  color: string
}

interface DataInfographicProps {
  title: string
  subtitle?: string
  dataPoints: DataPoint[]
  columns?: 2 | 3 | 4
  className?: string
}

export function DataInfographic({ title, subtitle, dataPoints, columns = 3, className }: DataInfographicProps) {
  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div
          className={cn("grid gap-8", {
            "grid-cols-1 md:grid-cols-2": columns === 2,
            "grid-cols-1 md:grid-cols-3": columns === 3,
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": columns === 4,
          })}
        >
          {dataPoints.map((point, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-${point.color}/5 rounded-xl`}></div>
              <div className="relative p-6 text-center">
                <div
                  className={`mx-auto rounded-full p-4 bg-${point.color}/10 w-16 h-16 flex items-center justify-center mb-4`}
                >
                  <div className={`text-${point.color}`}>{point.icon}</div>
                </div>
                <h3 className="text-4xl font-bold mb-2">{point.value}</h3>
                <p className="text-lg font-medium mb-2">{point.label}</p>
                {point.description && <p className="text-sm text-muted-foreground">{point.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
