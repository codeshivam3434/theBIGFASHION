"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComparisonFeature {
  name: string
  description?: string
  traditional: boolean
  our: boolean
}

interface FeatureComparisonProps {
  title: string
  subtitle?: string
  traditionalTitle: string
  ourTitle: string
  features: ComparisonFeature[]
  className?: string
}

export function FeatureComparison({
  title,
  subtitle,
  traditionalTitle,
  ourTitle,
  features,
  className,
}: FeatureComparisonProps) {
  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="col-span-1"></div>
              <motion.div
                className="col-span-1 bg-muted/50 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-2">{traditionalTitle}</h3>
                <p className="text-sm text-muted-foreground">Traditional Approach</p>
              </motion.div>
              <motion.div
                className="col-span-1 bg-primary/10 p-6 rounded-xl text-center border-2 border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-primary">{ourTitle}</h3>
                <p className="text-sm text-primary/80">Our Solution</p>
              </motion.div>
            </div>

            {/* Features */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 gap-4 mb-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="col-span-1 p-4">
                  <h4 className="font-medium">{feature.name}</h4>
                  {feature.description && <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>}
                </div>
                <div className="col-span-1 p-4 text-center">
                  {feature.traditional ? (
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="col-span-1 p-4 text-center">
                  {feature.our ? (
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-6 w-6 text-red-500 mx-auto" />
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
