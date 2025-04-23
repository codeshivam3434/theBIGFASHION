"use client"

import { useState, useEffect } from "react"

type Orientation = "portrait" | "landscape"

export function useOrientation(): Orientation {
  const [orientation, setOrientation] = useState<Orientation>("portrait")

  useEffect(() => {
    const handleOrientationChange = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches
      setOrientation(isPortrait ? "portrait" : "landscape")
    }

    // Set initial orientation
    handleOrientationChange()

    // Add event listeners
    window.addEventListener("orientationchange", handleOrientationChange)
    window.addEventListener("resize", handleOrientationChange)

    // Clean up
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange)
      window.removeEventListener("resize", handleOrientationChange)
    }
  }, [])

  return orientation
}
