"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import FadeInSection from "@/components/fade-in-section"

// Define the testimonial data structure
interface Testimonial {
  id: number
  name: string
  position: string
  location: string
  shopName: string
  image: string
  quote: string
}

export function RealRetailerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Real retailer testimonials with their images - Only showing Vishal Gupta, Mohit, and Suraj for the partners page
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Vishal Gupta",
      position: "Owner",
      location: "Vijaypur",
      shopName: "Rangoli Readymade",
      image: "/images/testimonials/vishal-gupta.jpeg",
      quote:
        "Since implementing BIGFASHION, our inventory management has become much more efficient and we've seen a significant increase in sales turnover.",
    },
    {
      id: 2,
      name: "Mohit",
      position: "Manager",
      location: "Hussepur",
      shopName: "Pintu Vastralay",
      image: "/images/testimonials/mohit.jpeg",
      quote:
        "The platform has helped us expand our product range without increasing our inventory costs. It's been a game changer for our business.",
    },
    {
      id: 3,
      name: "Suraj Rauniyar",
      position: "Owner",
      location: "Salempur",
      shopName: "Suraj Fashion",
      image: "/images/testimonials/suraj-rauniyar.png",
      quote:
        "BIGFASHION has revolutionized how I manage my inventory. I can now offer a wider variety of products with minimal risk.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Real Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Retail Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from the retailers who have transformed their businesses with BIGFASHION
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  className="w-full md:w-1/2 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl blur-md"></div>
                    <div className="relative aspect-square rounded-xl overflow-hidden border-4 border-white shadow-xl">
                      <EnhancedImage
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center top" }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="font-bold">{testimonials[activeIndex].shopName}</p>
                    <p className="text-sm">{testimonials[activeIndex].location}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-xl italic mb-8">"{testimonials[activeIndex].quote}"</blockquote>
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                        <p className="text-gray-600">
                          {testimonials[activeIndex].position}, {testimonials[activeIndex].shopName}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full h-12 w-12">
                      <ChevronLeft className="h-6 w-6" />
                      <span className="sr-only">Previous testimonial</span>
                    </Button>

                    <div className="flex items-center gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`h-3 rounded-full transition-all duration-300 ${
                            activeIndex === index ? "bg-primary w-8" : "bg-gray-300 w-3 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>

                    <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full h-12 w-12">
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">Next testimonial</span>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
