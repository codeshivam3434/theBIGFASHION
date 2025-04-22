import type React from "react"
import type { Metadata } from "next"
import NavBar from "@/components/layout/nav-bar"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "THE BIG FASHION - Empowering Fashion Retailers Across India",
  description:
    "THE BIG FASHION connects small and medium retailers with premium clothing brands through our innovative distribution platform.",
}

export default function PromotionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
