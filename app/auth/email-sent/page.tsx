"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, CheckCircle, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import FadeInSection from "@/components/fade-in-section"

export default function EmailSentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "reset"
  const [isResending, setIsResending] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)

  // Email type determines the messaging
  const isReset = type === "reset"
  const isVerification = type === "verify"

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleResend = async () => {
    setIsResending(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setCountdown(60)
      setCanResend(false)
    } catch (error) {
      console.error("Resend failed:", error)
    } finally {
      setIsResending(false)
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

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div className="rounded-full bg-primary/10 p-6">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
            </motion.div>

            <h1 className="mt-6 text-3xl font-bold">{isReset ? "Check your email" : "Verification email sent"}</h1>
            <p className="mt-4 text-muted-foreground">
              {isReset ? (
                <>We've sent a password reset link to your email address.</>
              ) : (
                <>We've sent a verification link to your email address.</>
              )}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection direction="up" delay={0.1}>
          <div className="rounded-lg border bg-muted/30 p-6">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">
                  {isReset ? "Reset instructions sent" : "Verification instructions sent"}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {isReset ? (
                    <>
                      Please check your email inbox and follow the instructions to reset your password. The link will
                      expire in 30 minutes.
                    </>
                  ) : (
                    <>
                      Please check your email inbox and click the verification link to activate your account. The link
                      will expire in 24 hours.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection direction="up" delay={0.2}>
          <div className="mt-8 space-y-4 text-center">
            <p className="text-sm text-muted-foreground">Didn't receive the email? Check your spam folder or</p>
            <ButtonWithFeedback
              variant="outline"
              onClick={handleResend}
              isLoading={isResending}
              loadingText="Resending..."
              disabled={!canResend}
            >
              {canResend ? "Resend email" : `Resend email (${countdown}s)`}
            </ButtonWithFeedback>

            <Link
              href={isReset ? "/auth/login" : "/auth/login"}
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              {isReset ? "Back to login" : "Back to login"}
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
