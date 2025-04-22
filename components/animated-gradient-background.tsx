"use client"

import { useEffect, useRef } from "react"

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      generateGradient()
    }

    const colors = [
      { r: 36, g: 24, b: 82 }, // deep purple
      { r: 48, g: 54, b: 144 }, // blue
      { r: 39, g: 110, b: 114 }, // teal
    ]

    let circles: { x: number; y: number; radius: number; color: number; vx: number; vy: number }[] = []

    const generateGradient = () => {
      circles = []

      // Generate 3-5 large gradient circles
      const numCircles = Math.floor(Math.random() * 3) + 3

      for (let i = 0; i < numCircles; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const radius = Math.max(width, height) * (Math.random() * 0.4 + 0.3) // 30-70% of screen size
        const color = Math.floor(Math.random() * colors.length)
        const vx = (Math.random() - 0.5) * 0.2
        const vy = (Math.random() - 0.5) * 0.2

        circles.push({ x, y, radius, color, vx, vy })
      }
    }

    const drawGradient = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(10, 10, 20, 1)"
      ctx.fillRect(0, 0, width, height)

      // Move circles
      circles.forEach((circle) => {
        circle.x += circle.vx
        circle.y += circle.vy

        // Bounce at edges
        if (circle.x < -circle.radius) circle.x = width + circle.radius
        if (circle.x > width + circle.radius) circle.x = -circle.radius
        if (circle.y < -circle.radius) circle.y = height + circle.radius
        if (circle.y > height + circle.radius) circle.y = -circle.radius
      })

      // Draw gradient circles
      circles.forEach((circle) => {
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)

        const color = colors[circle.color]
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`)
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Initialize
    resize()
    window.addEventListener("resize", resize)

    // Animation loop
    let animationFrame: number
    const animate = () => {
      drawGradient()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 opacity-80"
      style={{ filter: "blur(100px)" }}
    />
  )
}

