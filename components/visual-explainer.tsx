"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { EnhancedImage } from "@/components/enhanced-image"

interface ExplainerStep {
  title: string
  description: string
  icon: React.ReactNode
  illustration: string
  color: string
}

interface VisualExplainerProps {
  title: string
  subtitle: string
  steps: ExplainerStep[]
  className?: string
}

export function VisualExplainer({ title, subtitle, steps, className }: VisualExplainerProps) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className={cn("py-12 md:py-20", className)}>
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-8 py-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className={`inline-flex items-center justify-center rounded-full bg-${step.color}/10 p-3 mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <EnhancedImage
                  src={step.illustration}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
