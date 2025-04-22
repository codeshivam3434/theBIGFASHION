"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Mail } from "lucide-react"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Input } from "@/components/ui/input"
import FadeInSection from "@/components/fade-in-section"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const validateForm = () => {
    if (!email) {
      setError("Email is required")
      return false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid")
      return false
    }
    return true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Redirect to email sent page
      router.push("/auth/email-sent?type=reset")
    } catch (error) {
      console.error("Password reset request failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <FadeInSection direction="up">
          <div className="mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
              <span>FASHION</span>
              <span className="text-primary">FUSION</span>
            </Link>
            <h1 className="mt-6 text-3xl font-bold">Forgot Password</h1>
            <p className="mt-2 text-muted-foreground">
              Enter your email and we'll send you a link to reset your password
            </p>
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
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                className={error ? "border-destructive" : ""}
              />
              {error && <p className="text-xs text-destructive">{error}</p>}
            </div>

            <ButtonWithFeedback
              type="submit"
              className="w-full"
              isLoading={isLoading}
              loadingText="Sending reset link..."
            >
              <Mail className="mr-2 h-4 w-4" /> Send Reset Link
            </ButtonWithFeedback>
          </form>
        </FadeInSection>

        <FadeInSection direction="up" delay={0.2}>
          <div className="mt-8 text-center">
            <Link href="/auth/login" className="inline-flex items-center text-sm text-primary hover:underline">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to login
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
