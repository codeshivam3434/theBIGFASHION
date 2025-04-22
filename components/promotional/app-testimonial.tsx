"use client"

import { motion } from "framer-motion"
import FadeInSection from "@/components/fade-in-section"

interface AppTestimonialProps {
  quote: string
  name: string
  role: string
  index: number
}

export function AppTestimonial({ quote, name, role, index }: AppTestimonialProps) {
  return (
    <FadeInSection delay={index * 0.1} direction="up">
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col"
        whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
      >
        <div className="mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-5 h-5 text-yellow-400 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <p className="text-muted-foreground flex-1 italic">"{quote}"</p>
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </motion.div>
    </FadeInSection>
  )
}
