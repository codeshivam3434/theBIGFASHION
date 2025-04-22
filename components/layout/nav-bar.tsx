"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
          isScrolled ? "bg-background/95 border-b shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span>FASHION</span>
            <span className="text-primary">FUSION</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <NavLink href="/" label="Home" isActive={pathname === "/"} />
            <NavLink href="/about" label="About Us" isActive={pathname.startsWith("/about")} />
            <NavLink href="/catalog" label="Catalog" isActive={pathname.startsWith("/catalog")} />
            <NavLink href="/partners" label="For Retailers" isActive={pathname.startsWith("/partners")} />
            <NavLink href="/contact" label="Contact" isActive={pathname.startsWith("/contact")} />
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/partners"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
            >
              Become a Partner
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link href={href} className="relative text-sm font-medium transition-colors hover:text-primary">
      {label}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
          layoutId="navbar-indicator"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}

