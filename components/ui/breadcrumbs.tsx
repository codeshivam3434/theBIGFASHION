"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbsProps {
  homeElement?: React.ReactNode
  separator?: React.ReactNode
  containerClasses?: string
  listClasses?: string
  activeItemClasses?: string
  inactiveItemClasses?: string
  transformLabel?: (label: string) => string
}

export function Breadcrumbs({
  homeElement = <Home className="h-4 w-4" />,
  separator = <ChevronRight className="h-4 w-4" />,
  containerClasses = "py-3 px-4",
  listClasses = "flex items-center space-x-2 text-sm",
  activeItemClasses = "text-primary font-medium",
  inactiveItemClasses = "text-muted-foreground hover:text-foreground transition-colors",
  transformLabel = (label) => label.charAt(0).toUpperCase() + label.slice(1).replace(/-/g, " "),
}: BreadcrumbsProps) {
  const pathname = usePathname()

  // Don't render breadcrumbs on the homepage
  if (pathname === "/") return null

  // Split the pathname into segments
  const segments = pathname.split("/").filter(Boolean)

  // Create the breadcrumb items
  const items = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    const label = transformLabel(segment)
    const isLast = index === segments.length - 1

    return {
      href,
      label,
      isLast,
    }
  })

  return (
    <nav aria-label="Breadcrumbs" className={containerClasses}>
      <ol className={listClasses}>
        <li>
          <Link href="/" className={inactiveItemClasses}>
            {homeElement}
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <span className="mx-1 text-muted-foreground" aria-hidden="true">
              {separator}
            </span>
            {item.isLast ? (
              <span className={activeItemClasses} aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className={inactiveItemClasses}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
