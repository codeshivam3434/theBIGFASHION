"use client"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex flex-col"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold" onClick={onClose}>
              <span>FASHION</span>
              <span className="text-primary">FUSION</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <MobileMenuLink href="/" label="Home" onClick={onClose} />
            <MobileMenuLink href="/about" label="About Us" onClick={onClose} />
            <MobileMenuLink href="/catalog" label="Catalog" onClick={onClose} />
            <MobileMenuLink href="/partners" label="For Retailers" onClick={onClose} />
            <MobileMenuLink href="/contact" label="Contact" onClick={onClose} />
          </div>
          <div className="mt-auto p-4 border-t">
            <Link
              href="/partners"
              className="flex h-12 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              onClick={onClose}
            >
              Become a Partner
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface MobileMenuLinkProps {
  href: string
  label: string
  onClick: () => void
}

function MobileMenuLink({ href, label, onClick }: MobileMenuLinkProps) {
  return (
    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        className="flex h-12 items-center px-4 text-base font-medium border-b border-border/40 hover:bg-muted"
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  )
}

