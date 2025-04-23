"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { EnhancedImage } from "@/components/enhanced-image"

interface BeforeAfterComparisonProps {
  title?: string
  subtitle?: string
  beforeTitle: string
  afterTitle: string
  beforeImage: string
  afterImage: string
  beforePoints: string[]
  afterPoints: string[]
  className?: string
}

export function BeforeAfterComparison({
  title,
  subtitle,
  beforeTitle,
  afterTitle,
  beforeImage,
  afterImage,
  beforePoints,
  afterPoints,
  className,
}: BeforeAfterComparisonProps) {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before")

  return (
    <div className={cn("py-12", className)}>
      <div className="container px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Before & After
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
          </div>
        )}

        {/* <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={cn(
                "relative inline-flex items-center rounded-l-md px-6 py-3 text-sm font-medium focus:z-10 focus:outline-none transition-all",
                activeTab === "before"
                  ? "bg-muted text-foreground"
                  : "bg-background text-muted-foreground hover:bg-muted/50",
              )}
              onClick={() => setActiveTab("before")}
            >
              {beforeTitle}
            </button>
            <button
              type="button"
              className={cn(
                "relative -ml-px inline-flex items-center rounded-r-md px-6 py-3 text-sm font-medium focus:z-10 focus:outline-none transition-all",
                activeTab === "after"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-muted/50",
              )}
              onClick={() => setActiveTab("after")}
            >
              {afterTitle}
            </button>
          </div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
            <div className="p-6 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{beforeTitle}</h3>
            </div>
            <div className="relative aspect-video">
              <EnhancedImage src={beforeImage} alt={beforeTitle} fill className="object-cover" />
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3">
                {beforePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
            <div className="p-6 bg-primary/10 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary">{afterTitle}</h3>
            </div>
            <div className="relative aspect-video">
              <EnhancedImage src={afterImage} alt={afterTitle} fill className="object-cover" />
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3">
                {afterPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
