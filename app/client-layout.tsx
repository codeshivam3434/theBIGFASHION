"use client"

import type React from "react"

import { Inter } from "next/font/google"
import NavBar from "@/components/layout/nav-bar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className={inter.className}>
        <NavBar />
        <Suspense fallback={null}>
          <Breadcrumbs />
        </Suspense>
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}
