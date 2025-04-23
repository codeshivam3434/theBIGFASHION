"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface VideoTestimonialProps {
  src: string
  posterImage: string
  name: string
  position: string
  company: string
  quote: string
  className?: string
}

export function VideoTestimonial({
  src,
  posterImage,
  name,
  position,
  company,
  quote,
  className,
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
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

  // Pause video when component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])

  return (
    <motion.div
      className={cn("rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          poster={posterImage}
          playsInline
          muted={isMuted}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video controls overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300",
            isHovering || !isPlaying ? "opacity-100" : "opacity-0",
          )}
        >
          <button
            onClick={togglePlay}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>

          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="p-6">
        <p className="text-lg italic mb-4">{quote}</p>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-muted-foreground">{position}</p>
          <p className="text-primary">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}
