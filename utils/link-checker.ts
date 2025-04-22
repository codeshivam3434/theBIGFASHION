"use client"

import { useEffect } from "react"

export function useLinkChecker() {
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== "development") return

    const checkLinks = () => {
      const links = document.querySelectorAll("a")

      links.forEach((link) => {
        const href = link.getAttribute("href")

        // Skip external links, anchor links, and javascript: links
        if (
          !href ||
          href.startsWith("http") ||
          href.startsWith("#") ||
          href.startsWith("tel:") ||
          href.startsWith("mailto:") ||
          href.startsWith("javascript:")
        ) {
          return
        }

        // Check if the link has an onClick handler
        const hasClickHandler = link.onclick !== null

        // Add a data attribute for visual identification in dev tools
        link.setAttribute("data-link-checked", "true")

        // Log the link for debugging
        console.log(`Link check: ${href}${hasClickHandler ? " (has click handler)" : ""}`)
      })

      // Check buttons with click handlers
      const buttons = document.querySelectorAll("button")
      buttons.forEach((button) => {
        const hasClickHandler = button.onclick !== null
        button.setAttribute("data-button-checked", hasClickHandler.toString())

        if (!hasClickHandler && !button.disabled && !button.form) {
          console.warn("Button without click handler:", button)
        }
      })
    }

    // Run the check after the DOM is fully loaded
    setTimeout(checkLinks, 1000)
  }, [])
}
