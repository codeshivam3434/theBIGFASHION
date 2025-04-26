"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, ArrowRight } from "lucide-react"
import BigApparelsLogo from "@/components/big-apparels-logo"
import { getVersionString } from "@/lib/version"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Top section with logo and mission */}
        <div className="max-w-3xl mb-14">
          <Link href="/" className="inline-block mb-8">
            <BigApparelsLogo size="lg" variant="default" />
          </Link>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            We are sparking a revolution, changing how fashion is bought and sold to improve lives. By using technology,
            we connect people and make quality fashion available everywhere, making them easier to access.
          </p>
        </div>

        {/* Subtle divider */}
        <div className="h-px bg-gray-100 w-full my-12"></div>

        {/* Navigation columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 - Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/solutions" label="solutions" />
              <FooterLink href="/partners" label="For Retailers" />
            </ul>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Products</h3>
            <ul className="space-y-4">
              <FooterLink href="/supplychain" label="Fashion Supply Chain" />
              <FooterLink href="/Financial" label="Financial Solutions" />
              <FooterLink href="/operations" label="Operation Handling" />
              <FooterLink href="/solutions" label="Solutions" />
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Legal</h3>
            <ul className="space-y-4">
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/faq" label="FAQ" />
            </ul>
          </div>
        </div>

        {/* Office location and contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-900">Mumbai (Headquarters)</h4>
              <p className="text-gray-700 font-medium">
                B-12, Sector 63, Andheri East,
                <br />
                Mumbai, Maharashtra 401208
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3 text-gray-900">Contact Us</h4>
            <p className="text-gray-700 font-medium mb-2">
              <a href="mailto:bigapparels@gmail.com" className="hover:text-primary transition-colors flex items-center">
                bigapparels@gmail.com
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </p>
            <p className="text-gray-700 font-medium">
              <a href="tel:+917033383119" className="hover:text-primary transition-colors flex items-center">
                +91 7033383119
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </p>
          </div>
        </div>

        {/* CTA section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 md:mb-0 text-gray-900">
            How can we help?{" "}
            <Link href="/contact" className="text-primary hover:underline inline-flex items-center">
              Contact us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </h3>

          <div className="flex space-x-5">
            <SocialIcon icon={<Twitter className="h-5 w-5" />} href="https://twitter.com" label="Twitter" />
            <SocialIcon icon={<Facebook className="h-5 w-5" />} href="https://facebook.com" label="Facebook" />
            <SocialIcon icon={<Instagram className="h-5 w-5" />} href="https://instagram.com" label="Instagram" />
            <SocialIcon icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" label="LinkedIn" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center font-bold text-gray-700">
          <p>© {currentYear} BigApparels Pvt Ltd. All rights reserved.</p>
        </div>
        <div className="mt-8 text-xs text-gray-500 text-center">{getVersionString()}</div>
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
        className="text-gray-700 hover:text-primary transition-colors font-medium text-base flex items-center group"
      >
        <span>{label}</span>
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 0, x: -5 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="ml-2"
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
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
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary transition-all hover:bg-gray-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}
