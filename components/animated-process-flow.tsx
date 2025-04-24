"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronRight, Users, Zap, BarChart3, TrendingUp, ShoppingBag, Truck, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProcessStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  illustration: React.ReactNode
  color: string
}

export function AnimatedProcessFlow() {
  const [activeStep, setActiveStep] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  // Auto-advance steps when in view
  useEffect(() => {
    if (!isInView || !autoPlay) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isInView, autoPlay])

  // Reset to first step when section comes into view
  useEffect(() => {
    if (isInView) {
      setActiveStep(0)
    }
  }, [isInView])

  const steps: ProcessStep[] = [
    {
      id: "connect",
      title: "Connect",
      description: "Schedule a consultation with our team to discuss your fashion retail business needs and goals.",
      icon: <Users className="h-6 w-6" />,
      color: "primary",
      illustration: (
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="40" width="200" height="120" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="100" cy="80" r="20" fill="#f1f5f9" />
          <circle cx="200" cy="80" r="20" fill="#f1f5f9" />
          <path
            d="M90 80C90 74.477 94.477 70 100 70C105.523 70 110 74.477 110 80C110 85.523 105.523 90 100 90C94.477 90 90 85.523 90 80Z"
            fill="#f1f5f9"
            stroke="#475569"
            strokeWidth="2"
          />
          <path
            d="M190 80C190 74.477 194.477 70 200 70C205.523 70 210 74.477 210 80C210 85.523 205.523 90 200 90C194.477 90 190 85.523 190 80Z"
            fill="#f1f5f9"
            stroke="#475569"
            strokeWidth="2"
          />
          <path
            d="M100 100C100 100 120 120 150 120C180 120 200 100 200 100"
            stroke="#475569"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M150 40V20" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M150 180V160" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M50 100H30" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M270 100H250" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="150" cy="20" r="5" fill="#f43f5e" />
          <circle cx="150" cy="180" r="5" fill="#f43f5e" />
          <circle cx="30" cy="100" r="5" fill="#f43f5e" />
          <circle cx="270" cy="100" r="5" fill="#f43f5e" />
        </svg>
      ),
    },
    {
      id: "onboard",
      title: "Onboard",
      description:
        "We'll set up your account, integrate our platform with your business, and provide comprehensive training.",
      icon: <Zap className="h-6 w-6" />,
      color: "amber-500",
      illustration: (
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="40" width="180" height="120" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <rect x="80" y="60" width="140" height="80" rx="5" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <path d="M100 80H200" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 100H180" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 120H160" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <circle cx="240" cy="60" r="15" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          <path d="M240 55V65" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <path d="M235 60H245" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 100H40" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M260 100H240" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="40" cy="100" r="5" fill="#f59e0b" />
          <circle cx="260" cy="100" r="5" fill="#f59e0b" />
          <path d="M150 40V20" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M150 180V160" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="150" cy="20" r="5" fill="#f59e0b" />
          <circle cx="150" cy="180" r="5" fill="#f59e0b" />
        </svg>
      ),
    },
    {
      id: "optimize",
      title: "Optimize",
      description:
        "Use our tools to streamline operations, manage inventory, and make data-driven decisions for your fashion business.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "blue-500",
      illustration: (
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="40" width="200" height="120" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <path d="M80 140V80" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M110 140V100" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M140 140V70" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M170 140V90" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M200 140V60" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M230 140V110" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M70 140H240" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <circle cx="80" cy="80" r="5" fill="#3b82f6" />
          <circle cx="110" cy="100" r="5" fill="#3b82f6" />
          <circle cx="140" cy="70" r="5" fill="#3b82f6" />
          <circle cx="170" cy="90" r="5" fill="#3b82f6" />
          <circle cx="200" cy="60" r="5" fill="#3b82f6" />
          <circle cx="230" cy="110" r="5" fill="#3b82f6" />
          <path
            d="M80 80L110 100L140 70L170 90L200 60L230 110"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2 2"
          />
          <path d="M150 40V20" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M150 180V160" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="150" cy="20" r="5" fill="#3b82f6" />
          <circle cx="150" cy="180" r="5" fill="#3b82f6" />
        </svg>
      ),
    },
    {
      id: "order",
      title: "Order",
      description:
        "Browse our extensive fashion catalog and place orders with zero inventory risk through our innovative platform.",
      icon: <ShoppingBag className="h-6 w-6" />,
      color: "emerald-500",
      illustration: (
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="70" y="40" width="160" height="120" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <rect x="90" y="60" width="120" height="80" rx="5" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <path d="M110 80H190" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M110 100H170" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M110 120H150" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <rect x="170" y="110" width="30" height="20" rx="5" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
          <path
            d="M180 120L185 125L190 115"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M150 40V20" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M150 180V160" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="150" cy="20" r="5" fill="#10b981" />
          <circle cx="150" cy="180" r="5" fill="#10b981" />
          <path d="M70 100H50" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M250 100H230" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="50" cy="100" r="5" fill="#10b981" />
          <circle cx="250" cy="100" r="5" fill="#10b981" />
        </svg>
      ),
    },
    {
      id: "deliver",
      title: "Deliver",
      description:
        "Our specialized logistics network ensures fast and reliable delivery of fashion products to your store.",
      icon: <Truck className="h-6 w-6" />,
      color: "violet-500",
      illustration: (
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 120H250" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <rect x="70" y="70" width="80" height="50" rx="5" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
          <rect x="150" y="80" width="80" height="40" rx="5" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
          <circle cx="90" cy="120" r="15" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <circle cx="210" cy="120" r="15" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <path
            d="M230 80L240 80C245.523 80 250 84.4772 250 90V120"
            stroke="#475569"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M150 100H130" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M90 120V130" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M210 120V130" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="90" cy="130" r="5" fill="#8b5cf6" />
          <circle cx="210" cy="130" r="5" fill="#8b5cf6" />
          <path d="M150 70V50" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M150 150V130" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="150" cy="50" r="5" fill="#8b5cf6" />
          <circle cx="150" cy="150" r="5" fill="#8b5cf6" />
        </svg>
      ),
    },
    {
      id: "scale",
      title: "Scale",
      description:
        "Grow your fashion retail business with our ongoing support, advanced features, and data-driven insights.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "rose-500",
      illustration: (
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="40" width="200" height="120" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <path d="M80 140L220 60" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 140H240" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M80 140V60" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <circle cx="120" cy="120" r="10" fill="#fecdd3" stroke="#f43f5e" strokeWidth="2" />
          <circle cx="160" cy="100" r="10" fill="#fecdd3" stroke="#f43f5e" strokeWidth="2" />
          <circle cx="200" cy="80" r="10" fill="#fecdd3" stroke="#f43f5e" strokeWidth="2" />
          <path d="M220 60L200 60V80" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M150 40V20" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M150 180V160" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <circle cx="150" cy="20" r="5" fill="#f43f5e" />
          <circle cx="150" cy="180" r="5" fill="#f43f5e" />
        </svg>
      ),
    },
  ]

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setAutoPlay(false) // Pause autoplay when user interacts
  }

  return (
    <section className="py-20 bg-white overflow-hidden" ref={containerRef}>
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to transform your fashion retail business
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={cn(
                  "flex flex-col items-center transition-all duration-300 relative",
                  index <= activeStep ? "opacity-100" : "opacity-50",
                )}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-white mb-2",
                    index < activeStep ? `bg-${step.color}` : index === activeStep ? `bg-${step.color}` : "bg-gray-300",
                  )}
                  animate={{
                    scale: index === activeStep ? [1, 1.2, 1] : 1,
                    backgroundColor: index <= activeStep ? `var(--${step.color})` : "#d1d5db",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {index < activeStep ? <CheckCircle className="h-5 w-5" /> : <span>{index + 1}</span>}
                </motion.div>
                <span
                  className={cn(
                    "text-xs font-medium hidden md:block",
                    index <= activeStep ? "text-gray-900" : "text-gray-500",
                  )}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Illustration */}
              <div className="order-2 lg:order-1">
                <motion.div
                  className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center h-[300px] relative overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Animated background elements */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 opacity-50"
                    animate={{
                      background: [
                        `linear-gradient(to bottom right, transparent, #f1f5f9)`,
                        `linear-gradient(to bottom right, transparent, #${steps[activeStep].color === "primary" ? "f43f5e" : steps[activeStep].color.split("-")[0]}10)`,
                      ],
                    }}
                    transition={{ duration: 1 }}
                  />

                  {/* Animated illustration */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative z-10"
                  >
                    {steps[activeStep].illustration}
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="bg-white p-8 rounded-2xl">
                  <div
                    className={`inline-flex items-center justify-center rounded-full bg-${steps[activeStep].color}/10 p-3 mb-6`}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`text-${steps[activeStep].color}`}
                    >
                      {steps[activeStep].icon}
                    </motion.div>
                  </div>
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {steps[activeStep].title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {steps[activeStep].description}
                  </motion.p>

                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={() => handleStepClick((activeStep - 1 + steps.length) % steps.length)}
                      className="text-gray-500 hover:text-gray-700 flex items-center"
                      disabled={activeStep === 0}
                    >
                      <ChevronRight className="h-5 w-5 rotate-180 mr-1" />
                      <span className="text-sm">Previous</span>
                    </button>

                    <button
                      onClick={() => handleStepClick((activeStep + 1) % steps.length)}
                      className="text-primary hover:text-primary/80 flex items-center"
                    >
                      <span className="text-sm">Next</span>
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
