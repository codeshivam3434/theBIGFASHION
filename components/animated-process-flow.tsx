"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence, useAnimation, type PanInfo } from "framer-motion"
import {
  ChevronRight,
  ChevronLeft,
  Users,
  Zap,
  BarChart3,
  TrendingUp,
  ShoppingBag,
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

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
  const [swipeDirection, setSwipeDirection] = useState<null | "left" | "right">(null)
  const containerRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const progressControls = useAnimation()
  const isMobile = useIsMobile()

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
    // If clicking on a future step, animate through intermediate steps
    if (index > activeStep) {
      // Animate through each step with a delay
      const animateSteps = async () => {
        for (let i = activeStep + 1; i <= index; i++) {
          await new Promise((resolve) => setTimeout(resolve, 300))
          setActiveStep(i)
        }
      }
      animateSteps()
    } else {
      // If going backward, just jump to that step
      setActiveStep(index)
    }
    setAutoPlay(false) // Pause autoplay when user interacts
  }

  // Handle swipe gestures
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      // Swiped right - go to previous step
      setSwipeDirection("right")
      const prevStep = (activeStep - 1 + steps.length) % steps.length
      setActiveStep(prevStep)
      setTimeout(() => setSwipeDirection(null), 300)
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go to next step
      setSwipeDirection("left")
      const nextStep = (activeStep + 1) % steps.length
      setActiveStep(nextStep)
      setTimeout(() => setSwipeDirection(null), 300)
    }
    setAutoPlay(false)
  }

  // Auto-advance steps when in view
  useEffect(() => {
    if (!isInView || !autoPlay) return

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        // When reaching the end, reset to first step after a longer pause
        if (prev === steps.length - 1) {
          setTimeout(() => {
            setActiveStep(0)
          }, 1500)
          return prev
        }
        return prev + 1
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isInView, autoPlay, steps.length])

  // Reset to first step when section comes into view
  useEffect(() => {
    if (isInView) {
      setActiveStep(0)
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  // Update progress bar animation when active step changes
  useEffect(() => {
    progressControls.start({
      width: `${((activeStep + 1) / steps.length) * 100}%`,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    })
  }, [activeStep, progressControls, steps.length])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const illustrationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  const stepButtonVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: {
      scale: [1, 1.2, 1.1],
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: { duration: 0.4 },
    },
  }

  const iconVariants = {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    pulse: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  // Mobile swipe animation variants
  const swipeVariants = {
    initial: { opacity: 1, x: 0 },
    swipeLeft: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    swipeRight: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    enter: (direction: "left" | "right" | null) => ({
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      transition: { duration: 0 },
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden" ref={containerRef}>
      <motion.div className="container px-4" variants={containerVariants} initial="hidden" animate={controls}>
        <div className="text-center mb-10 md:mb-16">
          <motion.span
            className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4"
            variants={itemVariants}
          >
            Simple Process
          </motion.span>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
            How It Works
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={itemVariants}>
            Our streamlined process makes it easy to transform your fashion retail business
          </motion.p>
        </div>

        {/* Desktop Progress Bar and Steps */}
        <motion.div className="max-w-5xl mx-auto mb-12 hidden md:block" variants={itemVariants}>
          <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/80 to-primary"
              initial={{ width: "0%" }}
              animate={progressControls}
              style={{
                boxShadow: "0 0 10px rgba(244, 63, 94, 0.5), 0 0 20px rgba(244, 63, 94, 0.3)",
              }}
            />
          </div>

          <div className="flex justify-between mt-6">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={cn(
                  "flex flex-col items-center transition-all duration-300 relative",
                  index <= activeStep ? "opacity-100" : "opacity-70",
                )}
                variants={itemVariants}
                whileHover="hover"
                animate={index === activeStep ? "active" : "inactive"}
              >
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-white mb-3 shadow-md",
                    index < activeStep ? `bg-${step.color}` : index === activeStep ? `bg-${step.color}` : "bg-gray-200",
                  )}
                  variants={stepButtonVariants}
                  style={{
                    boxShadow:
                      index === activeStep
                        ? "0 0 15px rgba(244, 63, 94, 0.4)"
                        : index < activeStep
                          ? "0 0 10px rgba(16, 185, 129, 0.4)"
                          : "none",
                    background:
                      index < activeStep
                        ? "linear-gradient(135deg, #10b981, #059669)" // Green gradient for completed steps
                        : index === activeStep
                          ? step.color === "primary"
                            ? "linear-gradient(135deg, #f43f5e, #e11d48)"
                            : `var(--${step.color})`
                          : "#e5e7eb",
                  }}
                >
                  {index < activeStep ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="font-medium text-lg"
                    >
                      {index + 1}
                    </motion.span>
                  )}
                </motion.div>

                <motion.span
                  className="text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {step.title}
                </motion.span>

                {index === activeStep && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 16, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile Progress Indicator */}
        <motion.div className="mb-6 md:hidden" variants={itemVariants}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">Progress</span>
            <span className="text-sm font-medium text-primary">
              {activeStep + 1} of {steps.length}
            </span>
          </div>
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/80 to-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: "0 0 10px rgba(244, 63, 94, 0.3)",
              }}
            />
          </div>
        </motion.div>

        {/* Mobile Step Title */}
        <motion.div
          className="text-center mb-6 md:hidden"
          variants={itemVariants}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 w-14 h-14 mb-3">
            <motion.div variants={iconVariants} animate="pulse" className="text-primary">
              {steps[activeStep].icon}
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
        </motion.div>

        {/* Content Area */}
        <motion.div className="max-w-6xl mx-auto" variants={itemVariants} ref={contentRef}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeStep}
              drag={isMobile ? "x" : false}
              dragConstraints={contentRef}
              onDragEnd={handleDragEnd}
              custom={swipeDirection}
              variants={swipeVariants}
              initial="initial"
              animate="center"
              exit={swipeDirection === "left" ? "swipeLeft" : "swipeRight"}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <motion.div className="order-2 lg:order-1" variants={contentVariants}>
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 flex items-center justify-center h-[250px] md:h-[300px] relative overflow-hidden"
                  whileHover="hover"
                  variants={illustrationVariants}
                  style={{
                    boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-50"
                    animate={{
                      background: [
                        `linear-gradient(135deg, transparent, #f1f5f9)`,
                        `linear-gradient(135deg, transparent, #${steps[activeStep].color === "primary" ? "f43f5e" : steps[activeStep].color.split("-")[0]}10)`,
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(244,63,94,0.1))]"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />

                  <motion.div variants={illustrationVariants} className="relative z-10 transform-gpu">
                    {steps[activeStep].illustration}
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="order-1 lg:order-2" variants={contentVariants}>
                <motion.div
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {!isMobile && (
                    <motion.div
                      className={`inline-flex items-center justify-center rounded-full bg-${steps[activeStep].color}/10 p-4 mb-6`}
                      style={{
                        background:
                          steps[activeStep].color === "primary"
                            ? "rgba(244, 63, 94, 0.1)"
                            : `var(--${steps[activeStep].color}-light, rgba(244, 63, 94, 0.1))`,
                      }}
                    >
                      <motion.div
                        variants={iconVariants}
                        animate="pulse"
                        className={`text-${steps[activeStep].color}`}
                        style={{
                          color:
                            steps[activeStep].color === "primary"
                              ? "rgb(244, 63, 94)"
                              : `var(--${steps[activeStep].color}, rgb(244, 63, 94))`,
                        }}
                      >
                        {steps[activeStep].icon}
                      </motion.div>
                    </motion.div>
                  )}

                  {!isMobile && (
                    <motion.h3
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {steps[activeStep].title}
                    </motion.h3>
                  )}

                  <motion.p
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {steps[activeStep].description}
                  </motion.p>

                  {/* Mobile Swipe Hint */}
                  {isMobile && (
                    <motion.div
                      className="flex items-center justify-center text-sm text-gray-400 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      <span>Swipe to navigate</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.div>
                  )}

                  <motion.div
                    className="flex justify-between mt-6 border-t border-gray-100 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.button
                      onClick={() => handleStepClick((activeStep - 1 + steps.length) % steps.length)}
                      className="text-gray-500 hover:text-gray-900 flex items-center group transition-colors duration-300"
                      disabled={activeStep === 0}
                      whileHover={{ x: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="h-5 w-5 rotate-180 mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
                      <span className="text-sm font-medium">Previous</span>
                    </motion.button>

                    <motion.button
                      onClick={() => handleStepClick((activeStep + 1) % steps.length)}
                      className="text-primary hover:text-primary/80 flex items-center group transition-colors duration-300"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium">Next</span>
                      <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Mobile Step Navigation */}
        <motion.div className="mt-8 md:hidden" variants={itemVariants}>
          <div className="flex flex-wrap justify-center gap-2">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => handleStepClick(index)}
                className={cn(
                  "flex items-center px-3 py-2 rounded-full transition-all duration-300",
                  activeStep === index
                    ? "bg-primary text-white shadow-md"
                    : index < activeStep
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-gray-100 text-gray-600 border border-gray-200",
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {index < activeStep ? (
                  <CheckCircle className="h-4 w-4 mr-1.5" />
                ) : (
                  <span
                    className="w-4 h-4 inline-flex items-center justify-center rounded-full bg-white text-xs font-medium mr-1.5"
                    style={{
                      color: activeStep === index ? "#f43f5e" : "#64748b",
                      boxShadow: activeStep === index ? "0 0 0 1px rgba(255,255,255,0.4)" : "none",
                    }}
                  >
                    {index + 1}
                  </span>
                )}
                <span className="text-xs font-medium">{step.title}</span>
                {activeStep === index && <ArrowRight className="h-3 w-3 ml-1.5 animate-pulse" />}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Touch Navigation Buttons for Mobile */}
        <motion.div
          className="fixed bottom-6 left-0 right-0 flex justify-center space-x-4 z-10 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          variants={itemVariants}
        >
          <motion.button
            onClick={() => handleStepClick((activeStep - 1 + steps.length) % steps.length)}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200"
            whileTap={{ scale: 0.9 }}
            disabled={activeStep === 0}
            style={{ opacity: activeStep === 0 ? 0.5 : 1 }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </motion.button>

          <motion.button
            onClick={() => handleStepClick((activeStep + 1) % steps.length)}
            className="w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
