"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import FadeInSection from "@/components/fade-in-section"

interface Testimonial {
  name: string
  position: string
  location: string
  shopName: string
  image: string
  quote: string
  rating: number
  metrics: string
}

export function TestimonialShowcase() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Testimonials with consistent image sizing
  const testimonials: Testimonial[] = [
    {
      name: "Qadir",
      position: "Owner",
      location: "Chinchoti",
      shopName: "AK Men's Wear",
      image: "/images/testimonials/qadir.png",
      quote:
        "The platform's analytics have helped me understand which products sell best in my area. My profit margins have improved significantly.",
      rating: 5,
      metrics: "30% higher margins",
    },
    {
      name: "Imran khan",
      position: "Owner",
      location: "Vasai West",
      shopName: "Trendyz",
      image: "/images/testimonials/nabi.png",
      quote:
        "The zero-risk inventory model has been a game-changer for my business. I can now offer premium brands without the financial burden.",
      rating: 5,
      metrics: "Added 15 new brands",
    },
    {
      name: "Vishal Gupta",
      position: "Owner",
      location: "Vijaypur",
      shopName: "Rangoli Readymade",
      image: "/images/testimonials/vishal-gupta.jpeg",
      quote:
        "This platform completely transformed our retail operations. We've seen a 40% increase in sales and 60% reduction in stockouts.",
      rating: 5,
      metrics: "40% sales increase",
    },
    {
      name: "Mohit",
      position: "Manager",
      location: "Hussepur",
      shopName: "Pintu Vastralay",
      image: "/images/testimonials/mohit.jpeg",
      quote:
        "The risk-free logistics model allowed us to expand our product range without increasing our inventory costs. Game changer!",
      rating: 5,
      metrics: "2x product range",
    },
    {
      name: "Suraj Rauniyar",
      position: "Owner",
      location: "Salempur",
      shopName: "Suraj Fashion",
      image: "/images/testimonials/suraj-rauniyar.png",
      quote:
        "BIGFASHION has revolutionized how I manage my inventory. I can now offer a wider variety of products with minimal risk.",
      rating: 5,
      metrics: "50% more product variety",
    },
    {
      name: "Nabi",
      position: "Owner",
      location: "Vasai West",
      shopName: "Groovy Collection",
      image: "/images/testimonials/imraan.png",
      quote:
        "Since partnering with BIGFASHION, I've been able to focus more on customer service while they handle the supply chain logistics.",
      rating: 5,
      metrics: "25% time saved on operations",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isInView, testimonials.length])

  // Set in view when component mounts
  useEffect(() => {
    setIsInView(true)
  }, [])

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Client Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Retail Partners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing community of retailers who are transforming their businesses
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-10 -left-4 md:-left-10 text-9xl text-primary opacity-10 pointer-events-none">
            "
          </div>
          <div className="absolute bottom-10 -right-4 md:-right-10 text-9xl text-primary opacity-10 pointer-events-none rotate-180">
            "
          </div>

          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  activeTestimonial === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col md:flex-row items-center gap-8"
                    >
                      <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full blur-md"></div>
                          <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <EnhancedImage
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={192}
                              height={192}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: "center top" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-2/3">
                        <div className="flex mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">"{testimonial.quote}"</p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                          <div className="text-center sm:text-left">
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600">
                              {testimonial.position}, {testimonial.shopName}
                            </p>
                            <p className="text-gray-500">{testimonial.location}</p>
                          </div>
                          <div className="mt-2 sm:mt-0 sm:ml-4 sm:pl-4 sm:border-l border-gray-200">
                            <div className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                              {testimonial.metrics}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            <div className="flex justify-center mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full mx-1 transition-all duration-300 ${
                    activeTestimonial === index ? "bg-primary w-8" : "bg-gray-200 w-4 hover:bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/partners" className="inline-flex items-center text-primary font-medium group">
            <span className="relative">
              Read more success stories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
