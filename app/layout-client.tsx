"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import NavBar from "@/components/layout/nav-bar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Analytics } from "@/components/analytics"
import { Suspense, ErrorBoundary } from "react"

const inter = Inter({ subsets: ["latin"] })

// Simple error boundary fallback
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="mb-4 text-2xl font-bold">Something went wrong</h2>
      <p className="mb-4 text-gray-600">We're sorry for the inconvenience.</p>
      <button onClick={resetErrorBoundary} className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
        Try again
      </button>
    </div>
  )
}

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  // Add error handling for client components
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Reset error state on route change
    setHasError(false)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NavBar />
          <Suspense fallback={null}>
            {/* Wrap analytics in try/catch to prevent it from breaking the app */}
            {!hasError && (
              <div className="analytics-wrapper">
                <Analytics />
              </div>
            )}
            <Breadcrumbs />
          </Suspense>
          <main id="main-content">
            {/* Use error boundary for the main content */}
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onError={() => setHasError(true)}
              onReset={() => setHasError(false)}
            >
              {children}
            </ErrorBoundary>
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
