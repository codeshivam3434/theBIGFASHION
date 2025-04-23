import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/layout/nav-bar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
// Import the Breadcrumbs component
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { siteConfig } from "@/lib/metadata"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["wholesale clothing", "fashion retail", "retail technology", "inventory management", "fashion analytics"],
  authors: [{ name: "BIG FASHION Team" }],
  creator: "BIG FASHION",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
    generator: 'v0.dev'
}

// Update the RootLayout component to include breadcrumbs
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NavBar />
          <Breadcrumbs />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
