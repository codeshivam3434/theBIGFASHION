"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface BrandLogoProps {
  name: string
  logo: string
}

export function BrandLogo({ name, logo }: BrandLogoProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center justify-center h-32"
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Image src={logo || "/placeholder.svg"} alt={name} width={160} height={80} className="max-h-16 w-auto" />
    </motion.div>
  )
}
