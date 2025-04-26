"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AnimatedStats from "@/components/animated-stats"
import InteractiveFeatureCards from "@/components/interactive-feature-cards"
import AnimatedProcessFlow from "@/components/animated-process-flow"
import RetailerSuccessStories from "@/components/retailer-success-stories"
import TeamSection from "@/components/team-section"
import VideoTestimonialsSection from "@/components/video-testimonials-section"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      <HeroSection />
      <AnimatedStats />
      <InteractiveFeatureCards />
      <AnimatedProcessFlow />
      <RetailerSuccessStories />
      <TeamSection />
      <VideoTestimonialsSection />
    </>
  )
}
