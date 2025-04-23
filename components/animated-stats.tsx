"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedStatsProps {
  stats: {
    value: number
    suffix?: string
    prefix?: string
    label: string
    color?: string
  }[]
  className?: string
  cardClassName?: string
  textClassName?: string
  labelClassName?: string
}

export function AnimatedStats({
  stats,
  className = "",
  cardClassName = "",
  textClassName = "",
  labelClassName = "",
}: AnimatedStatsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {stats.map((stat, index) => (
        <AnimatedStat
          key={index}
          stat={stat}
          delay={index * 0.1}
          cardClassName={cardClassName}
          textClassName={textClassName}
          labelClassName={labelClassName}
        />
      ))}
    </div>
  )
}

interface AnimatedStatProps {
  stat: {
    value: number
    suffix?: string
    prefix?: string
    label: string
    color?: string
  }
  delay: number
  cardClassName?: string
  textClassName?: string
  labelClassName?: string
}

function AnimatedStat({ stat, delay, cardClassName = "", textClassName = "", labelClassName = "" }: AnimatedStatProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = stat.value
    const duration = 2000
    const startTime = Date.now()

    const animateCount = () => {
      const now = Date.now()
      const elapsedTime = now - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Easing function for smoother animation
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
      const easedProgress = easeOutQuart(progress)

      const currentCount = Math.floor(easedProgress * end)

      if (currentCount !== start) {
        start = currentCount
        setCount(currentCount)
      }

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }

    const timeout = setTimeout(() => {
      requestAnimationFrame(animateCount)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, stat.value, delay])

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    magenta: "text-magenta",
    purple: "text-purple",
  }

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={cn("p-6 rounded-xl flex flex-col items-center justify-center text-center", cardClassName)}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <span className={cn(stat.color ? colorClasses[stat.color as keyof typeof colorClasses] : "", textClassName)}>
          {stat.prefix}
          {count}
          {stat.suffix}
        </span>
      </div>
      <div className={cn("text-sm md:text-base", labelClassName)}>{stat.label}</div>
    </motion.div>
  )
}
