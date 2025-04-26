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
      className="text-center p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        borderColor: "hsl(var(--primary) / 0.2)",
      }}
    >
      <motion.div
        className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color ? `text-${stat.color}` : "text-primary"}`}
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.1 }}
      >
        {stat.prefix && <span>{stat.prefix}</span>}
        <span>{isInView ? count : 0}</span>
        {stat.suffix && <span>{stat.suffix}</span>}
      </motion.div>
      <p className="text-lg text-muted-foreground">{stat.label}</p>
      <div className="mt-3 w-12 h-1 bg-primary/30 rounded-full mx-auto"></div>
    </motion.div>
  )
}

// Named export
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

// Default export
const AnimatedStatsDefault = AnimatedStats
export default AnimatedStatsDefault
