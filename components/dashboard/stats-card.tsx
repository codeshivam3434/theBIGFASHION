"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  variant?: "primary" | "info" | "success" | "warning" | "danger"
}

export default function StatsCard({ title, value, icon, trend, variant = "primary" }: StatsCardProps) {
  // Update the variantStyles to use our new color scheme
  const variantStyles = {
    primary: {
      iconBg: "bg-fashion-primary/10",
      iconColor: "text-fashion-primary",
      trendColor: trend?.isPositive ? "text-green-600" : "text-red-600",
    },
    info: {
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      trendColor: trend?.isPositive ? "text-green-600" : "text-red-600",
    },
    success: {
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      trendColor: trend?.isPositive ? "text-green-600" : "text-red-600",
    },
    warning: {
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      trendColor: trend?.isPositive ? "text-green-600" : "text-red-600",
    },
    danger: {
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      trendColor: trend?.isPositive ? "text-green-600" : "text-red-600",
    },
  }

  return (
    <Card className="big-fashion-card border-none shadow-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-full", variantStyles[variant].iconBg)}>
            <div className={variantStyles[variant].iconColor}>{icon}</div>
          </div>
          {trend && (
            <div className="flex items-center gap-1">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={cn(
                  "flex items-center text-sm font-medium",
                  trend.isPositive ? "text-green-600" : "text-red-600",
                )}
              >
                {trend.isPositive ? "↑" : "↓"} {trend.value}%
              </motion.div>
            </div>
          )}
        </div>
        <div className="mt-4">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium text-muted-foreground"
          >
            {title}
          </motion.p>
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            {value}
          </motion.h3>
        </div>
      </CardContent>
    </Card>
  )
}
