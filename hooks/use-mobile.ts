"use client"

import { useState, useEffect } from "react"

// Export with the name that's being imported elsewhere
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile
}

// For backward compatibility, also export as useMobile
export const useMobile = useIsMobile
