"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, KeyRound } from "lucide-react"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Input } from "@/components/ui/input"
import FadeInSection from "@/components/fade-in-section"

export default function VerifyOTPPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [error, setError] = useState("")
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return

    const newOtp = [...otp]
    // Take only the last character if multiple are pasted
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    // Clear error when user types
    if (error) setError("")

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("")
      setOtp(newOtp)

      // Focus the last input
      inputRefs.current[5]?.focus()
    }
  }

  const validateForm = () => {
    if (otp.some((digit) => !digit)) {
      setError("Please enter all 6 digits")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Redirect to reset password page or dashboard based on context
      router.push("/auth/reset-password")
    } catch (error) {
      console.error("OTP verification failed:", error)
      setError("Invalid verification code. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setCountdown(60)
      setCanResend(false)
      setOtp(["", "", "", "", "", ""])
      inputRefs.current[0]?.focus()
    } catch (error) {
      console.error("Resend failed:", error)
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
            <h1 className="mt-6 text-3xl font-bold">Verification Code</h1>
            <p className="mt-2 text-muted-foreground">Enter the 6-digit code sent to your email</p>
          </div>
        </FadeInSection>

        <FadeInSection direction="up" delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`h-14 w-12 text-center text-xl ${error ? "border-destructive" : ""}`}
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              {error && <p className="text-center text-xs text-destructive">{error}</p>}
              <p className="text-center text-xs text-muted-foreground">
                Didn't receive the code?{" "}
                {canResend ? (
                  <button
                    type="button"
                    className="text-primary hover:underline"
                    onClick={handleResend}
                    disabled={isLoading}
                  >
                    Resend code
                  </button>
                ) : (
                  <span>Resend in {countdown}s</span>
                )}
              </p>
            </div>

            <ButtonWithFeedback type="submit" className="w-full" isLoading={isLoading} loadingText="Verifying...">
              <KeyRound className="mr-2 h-4 w-4" /> Verify Code
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
