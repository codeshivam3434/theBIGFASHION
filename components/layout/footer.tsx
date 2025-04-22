"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span>FASHION</span>
              <span className="text-primary">FUSION</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting manufacturers and retailers with premium fashion solutions since 2016.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-4 w-4" />} href="https://facebook.com" label="Facebook" />
              <SocialIcon icon={<Twitter className="h-4 w-4" />} href="https://twitter.com" label="Twitter" />
              <SocialIcon icon={<Instagram className="h-4 w-4" />} href="https://instagram.com" label="Instagram" />
              <SocialIcon icon={<Linkedin className="h-4 w-4" />} href="https://linkedin.com" label="LinkedIn" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/catalog" label="Catalog" />
              <FooterLink href="/partners" label="For Retailers" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/terms" label="Terms of Service" />
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/shipping" label="Shipping Policy" />
              <FooterLink href="/refunds" label="Refund Policy" />
              <FooterLink href="/faq" label="FAQ" />
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                1234 Fashion Avenue, Suite 500
              </li>
              <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                New York, NY 10001
              </li>
              <li className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline">
                <a href="mailto:contact@fashionfusion.com">contact@fashionfusion.com</a>
              </li>
              <li className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline">
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} Fashion Fusion. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground hover:underline">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface FooterLinkProps {
  href: string
  label: string
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
      >
        {label}
      </Link>
    </li>
  )
}

interface SocialIconProps {
  icon: React.ReactNode
  href: string
  label: string
}

function SocialIcon({ icon, href, label }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}

