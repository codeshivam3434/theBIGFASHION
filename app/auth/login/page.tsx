"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, LogIn } from "lucide-react"
import { motion } from "framer-motion"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import FadeInSection from "@/components/fade-in-section"
import AnimatedGradientBackground from "@/components/animated-gradient-background"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const validateForm = () => {
    let valid = true
    const newErrors = { email: "", password: "" }

    if (!formData.email) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      rememberMe: checked,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Redirect to dashboard on successful login
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex w-full lg:w-1/2 flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <FadeInSection direction="up">
            <div className="mb-8 text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
                <span>THE</span>
                <span className="text-primary">BIG FASHION</span>
              </Link>
              <h1 className="mt-6 text-3xl font-bold">Welcome back</h1>
              <p className="mt-2 text-muted-foreground">Sign in to access your retailer dashboard</p>
            </div>
          </FadeInSection>

          <FadeInSection direction="up" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? "border-destructive pr-10" : "pr-10"}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="rememberMe" checked={formData.rememberMe} onCheckedChange={handleCheckboxChange} />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>

              <ButtonWithFeedback type="submit" className="w-full" isLoading={isLoading} loadingText="Signing in...">
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </ButtonWithFeedback>
            </form>
          </FadeInSection>

          <FadeInSection direction="up" delay={0.2}>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Right side - Decorative */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <AnimatedGradientBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Grow your retail business with us</h2>
            <p className="text-muted-foreground mb-6">
              Access premium wholesale products, manage orders, and track your business performance all in one place.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-1">500+</h3>
                <p className="text-sm text-muted-foreground">Active Partners</p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-1">5,000+</h3>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-1">25+</h3>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-1">98%</h3>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
