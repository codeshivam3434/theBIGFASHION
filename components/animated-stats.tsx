"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  color?: string
}

interface AnimatedStatsProps {
  title?: string
  subtitle?: string
  stats: StatItem[]
  className?: string
}

export function AnimatedStats({ title, subtitle, stats, className }: AnimatedStatsProps) {
  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function AnimatedStat({ stat, index }: { stat: StatItem; index: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = stat.value
      const duration = 2000 // 2 seconds
      const increment = end / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color ? `text-${stat.color}` : "text-primary"}`}>
        {stat.prefix && <span>{stat.prefix}</span>}
        <span>{isInView ? count : 0}</span>
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <p className="text-lg text-muted-foreground">{stat.label}</p>
    </motion.div>
  )
}
