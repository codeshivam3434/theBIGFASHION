"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"

export function RetailerSuccessStories() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Hear From Our Retailers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how fashion retailers across Tier 2 & 3 cities have transformed their businesses with our platform
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection direction="left">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* Video player with custom controls */}
              <div className="relative aspect-video bg-black">
                {/* Placeholder for actual video - in production, replace with actual video URL */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg?height=720&width=1280&query=happy fashion retailers using digital tools in modern store"
                  muted
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/videos/retailer-testimonial.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
                    isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                  onClick={togglePlay}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary/90 rounded-full p-4 cursor-pointer"
                  >
                    <Play className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Video controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-t from-black/70 to-transparent">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Real Results from Real Retailers</h3>

              <div className="space-y-8">
                {[
                  {
                    quote:
                      "Since implementing this platform, our inventory turnover has increased by 35% and we've reduced stockouts by nearly 60%.",
                    name: "Ananya Patel",
                    position: "Owner, Elegance Boutique, Kanpur",
                    image: "/placeholder.svg?height=100&width=100&query=indian female fashion retailer portrait",
                  },
                  {
                    quote:
                      "The analytics tools helped us identify emerging trends months before our competitors, giving us a significant edge in the market.",
                    name: "Vikram Singh",
                    position: "Director, Fashion Forward, Lucknow",
                    image: "/placeholder.svg?height=100&width=100&query=indian male fashion retailer portrait",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <EnhancedImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="italic mb-3">{testimonial.quote}</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="outline" className="group" asChild>
                  <a href="/partners">
                    View more success stories
                    <motion.span
                      className="inline-block transition-transform group-hover:translate-x-1"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.span>
                  </a>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
