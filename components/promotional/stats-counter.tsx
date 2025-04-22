"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StatsCounterProps {
  value: number
  suffix?: string
  duration?: number
  title: string
  description?: string
  icon?: React.ReactNode
}

export function StatsCounter({ value, suffix = "", duration = 2, title, description, icon }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const totalFrames = Math.round(duration * 60)
      const increment = end / totalFrames

      const counter = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(counter)
    }
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
        <div>
          <div className="flex items-baseline">
            <span className="text-3xl md:text-4xl font-bold text-primary">{count}</span>
            <span className="text-2xl font-bold text-primary ml-1">{suffix}</span>
          </div>
          <h3 className="text-xl font-bold mt-2">{title}</h3>
          {description && <p className="text-muted-foreground mt-1">{description}</p>}
        </div>
      </div>
    </motion.div>
  )
}
