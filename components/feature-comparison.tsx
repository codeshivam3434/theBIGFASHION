"use client"

import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Feature {
  name: string
  description: string
  traditional: boolean
  our: boolean
}

interface FeatureComparisonProps {
  title?: string
  subtitle?: string
  traditionalTitle?: string
  ourTitle?: string
  features: Feature[]
  className?: string
}

export function FeatureComparison({
  title,
  subtitle,
  traditionalTitle = "Traditional Approach",
  ourTitle = "Our Platform",
  features,
  className,
}: FeatureComparisonProps) {
  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                  {title}
                </span>
              </h2>
            )}
            {subtitle && <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-white/10 backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-pink-600/10 to-purple-600/10">
            <div className="col-span-1">
              <h3 className="text-lg font-semibold">Feature</h3>
            </div>
            <div className="col-span-1 text-center">
              <h3 className="text-lg font-semibold">{traditionalTitle}</h3>
            </div>
            <div className="col-span-1 text-center">
              <h3 className="text-lg font-semibold">{ourTitle}</h3>
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-white/10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-white/5 transition-colors"
              >
                <div className="col-span-1">
                  <h4 className="font-medium">{feature.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  {feature.traditional ? (
                    <div className="rounded-full bg-red-500/20 p-1">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                  ) : (
                    <div className="rounded-full bg-green-500/20 p-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  )}
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  {feature.our ? (
                    <div className="rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 p-1">
                      <Check className="h-5 w-5 text-pink-600" />
                    </div>
                  ) : (
                    <div className="rounded-full bg-red-500/20 p-1">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
