"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, UserPlus } from "lucide-react"
import { motion } from "framer-motion"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import FadeInSection from "@/components/fade-in-section"
import AnimatedGradientBackground from "@/components/animated-gradient-background"

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
    agreeTerms: false,
  })
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
    agreeTerms: "",
  })

  const validateForm = () => {
    let valid = true
    const newErrors = {
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      password: "",
      agreeTerms: "",
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      valid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      valid = false
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required"
      valid = false
    }

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
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      valid = false
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions"
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
      agreeTerms: checked,
    })
    if (checked && errors.agreeTerms) {
      setErrors({
        ...errors,
        agreeTerms: "",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Redirect to email verification page
      router.push("/auth/verify-email")
    } catch (error) {
      console.error("Signup failed:", error)
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
              <h1 className="mt-6 text-3xl font-bold">Create an account</h1>
              <p className="mt-2 text-muted-foreground">Join our network of retail partners</p>
            </div>
          </FadeInSection>

          <FadeInSection direction="up" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="businessName" className="text-sm font-medium">
                  Business Name
                </label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={errors.businessName ? "border-destructive" : ""}
                />
                {errors.businessName && <p className="text-xs text-destructive">{errors.businessName}</p>}
              </div>

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
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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
                <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <label
                    htmlFor="agreeTerms"
                    className="text-sm leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.agreeTerms && <p className="text-xs text-destructive">{errors.agreeTerms}</p>}
              </div>

              <ButtonWithFeedback
                type="submit"
                className="w-full mt-6"
                isLoading={isLoading}
                loadingText="Creating account..."
              >
                <UserPlus className="mr-2 h-4 w-4" /> Create Account
              </ButtonWithFeedback>
            </form>
          </FadeInSection>

          <FadeInSection direction="up" delay={0.2}>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary hover:underline">
                  Sign in
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
            <h2 className="text-3xl font-bold mb-4">THE BIG FASHION Partner Benefits</h2>
            <div className="space-y-4 mt-6">
              <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg text-left">
                <h3 className="font-semibold mb-1">Faster Supply Chain</h3>
                <p className="text-sm text-muted-foreground">Direct access to manufacturers with expedited shipping</p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg text-left">
                <h3 className="font-semibold mb-1">Private Labeling</h3>
                <p className="text-sm text-muted-foreground">
                  Create your own branded line with our manufacturing expertise
                </p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg text-left">
                <h3 className="font-semibold mb-1">Flexible Ordering</h3>
                <p className="text-sm text-muted-foreground">
                  Start with smaller orders and scale up as your business grows
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
