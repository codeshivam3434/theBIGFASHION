"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Home, Info, Lightbulb, Store, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import TheBigFashionLogo from "@/components/the-big-fashion-logo"
import { useMobile } from "@/hooks/use-mobile"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  // Navigation items with icons for visual appeal
  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-1" /> },
    { name: "About", href: "/about", icon: <Info className="h-4 w-4 mr-1" /> },
    { name: "Solutions", href: "/solutions", icon: <Lightbulb className="h-4 w-4 mr-1" /> },
    { name: "For Retailers", href: "/partners", icon: <Store className="h-4 w-4 mr-1" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="h-4 w-4 mr-1" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between max-w-screen-2xl mx-auto px-4">
        <Link href="/" className="flex items-center flex-shrink-0 mr-10 min-w-[120px]">
          <TheBigFashionLogo className={`h-10 w-auto ${isScrolled ? "text-primary" : "text-primary"}`} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end flex-grow space-x-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href} className="flex-shrink-0">
                <motion.div
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : isScrolled
                        ? "text-gray-800 hover:text-primary hover:bg-primary/5"
                        : "text-gray-800 hover:text-primary hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
          <div className="ml-4 flex space-x-2 flex-shrink-0">
            <Button
              asChild
              size="sm"
              variant={isScrolled ? "outline" : "outline"}
              className="text-gray-800 border-gray-800 hover:text-primary hover:border-primary"
            >
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild size="sm" variant="default">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md text-gray-800 hover:text-primary hover:bg-primary/5`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="fixed inset-0 top-[60px] bg-background z-40 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-6 space-y-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        className={`flex items-center justify-between p-3 rounded-md ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-gray-800 hover:bg-primary/5 hover:text-primary"
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center">
                          {item.icon}
                          <span className="ml-2 font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  )
                })}
              </nav>
              <div className="pt-4 border-t">
                <Button className="w-full" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
