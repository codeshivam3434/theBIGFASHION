"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import FadeInSection from "./fade-in-section"

interface ProcessFlowProps {
  title: string
  subtitle?: string
  steps: {
    number: string
    title: string
    description: string
    icon?: React.ReactNode
  }[]
  className?: string
  bgClassName?: string
  titleClassName?: string
  subtitleClassName?: string
  stepNumberClassName?: string
  stepTitleClassName?: string
  stepDescriptionClassName?: string
  stepIconClassName?: string
  stepArrowClassName?: string
}

export function ProcessFlow({
  title,
  subtitle,
  steps,
  className = "",
  bgClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  stepNumberClassName = "",
  stepTitleClassName = "",
  stepDescriptionClassName = "",
  stepIconClassName = "",
  stepArrowClassName = "",
}: ProcessFlowProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className={cn("absolute inset-0 -z-10", bgClassName)}></div>
      <div className="container">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Our Process
            </span>
            <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", titleClassName)}>{title}</h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            {subtitle && <p className={cn("max-w-2xl mx-auto text-muted-foreground", subtitleClassName)}>{subtitle}</p>}
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <FadeInSection key={index} delay={index * 0.2}>
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div
                      className={cn(
                        "flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold",
                        stepNumberClassName,
                      )}
                    >
                      {step.number}
                    </div>
                    {step.icon && (
                      <div
                        className={cn(
                          "absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center",
                          stepIconClassName,
                        )}
                      >
                        {step.icon}
                      </div>
                    )}
                  </div>
                  <h3 className={cn("text-xl font-bold mb-3", stepTitleClassName)}>{step.title}</h3>
                  <p className={cn("text-muted-foreground", stepDescriptionClassName)}>{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "50%" }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      className="flex items-center justify-end"
                    >
                      <div className="h-0.5 bg-primary/30 flex-grow"></div>
                      <ArrowRight className={cn("w-5 h-5 text-primary/70", stepArrowClassName)} />
                    </motion.div>
                  </div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
