"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  color?: string
}

interface ProcessFlowProps {
  title?: string
  subtitle?: string
  steps: ProcessStep[]
  className?: string
  vertical?: boolean
}

export function ProcessFlow({ title, subtitle, steps, className, vertical = false }: ProcessFlowProps) {
  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
          </div>
        )}

        <div className={cn("relative", vertical ? "space-y-12" : "")}>
          {/* Connection Line */}
          {!vertical && (
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 hidden md:block"></div>
          )}
          {vertical && (
            <div className="absolute top-0 bottom-0 left-[39px] w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block"></div>
          )}

          <div className={cn("relative z-10", vertical ? "" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8")}>
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 h-full flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary/20 mr-4">{step.number}</span>
                  <div className="rounded-full bg-primary/10 p-3 flex items-center justify-center">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground flex-grow">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
