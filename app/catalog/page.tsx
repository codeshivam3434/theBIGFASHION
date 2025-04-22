"use client"

import Image from "next/image"
import { Filter, ChevronDown, Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ButtonWithFeedback } from "@/components/ui/button-with-feedback"
import { Input } from "@/components/ui/input"
import FadeInSection from "@/components/fade-in-section"
import HoverCardEffect from "@/components/hover-card-effect"
import { useState } from "react"

export default function CatalogPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryOpen, setCategoryOpen] = useState(false)

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Product catalog"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
          <motion.h1
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Wholesale Catalog
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our extensive collection of premium wholesale clothing for your retail business.
          </motion.p>
        </div>
      </section>

      {/* Catalog Filters */}
      <section className="border-b sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                {activeFilters.length > 0 && (
                  <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {activeFilters.length}
                  </span>
                )}
              </Button>
              <div className="relative">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setCategoryOpen(!categoryOpen)}
                >
                  Category
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${categoryOpen ? "rotate-180" : ""}`}
                  />
                </Button>
                <AnimatePresence>
                  {categoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-1 w-56 rounded-md border bg-background shadow-lg"
                    >
                      <div className="p-2">
                        {["Men's Wear", "Women's Wear", "Seasonal", "Custom"].map((category) => (
                          <button
                            key={category}
                            className="flex w-full items-center rounded-md px-3 py-2 text-sm hover:bg-muted"
                            onClick={() => {
                              addFilter(category)
                              setCategoryOpen(false)
                            }}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                Price Range
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                MOQ
                <ChevronDown className="h-4 w-4" />
              </Button>
              <AnimatePresence>
                {activeFilters.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 mt-2 md:mt-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {activeFilters.map((filter) => (
                      <motion.span
                        key={filter}
                        className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {filter}
                        <button className="ml-1 rounded-full" onClick={() => removeFilter(filter)}>
                          <X className="h-3 w-3" />
                        </button>
                      </motion.span>
                    ))}
                    {activeFilters.length > 1 && (
                      <motion.button
                        className="text-xs text-muted-foreground hover:text-foreground"
                        onClick={() => setActiveFilters([])}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Clear all
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full md:w-[300px] pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12">
        <div className="container">
          <FadeInSection>
            <h2 className="text-2xl font-bold mb-8">Categories</h2>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Men's Wear", image: "/placeholder.svg?height=300&width=300" },
              { name: "Women's Wear", image: "/placeholder.svg?height=300&width=300" },
              { name: "Seasonal Collections", image: "/placeholder.svg?height=300&width=300" },
              { name: "Custom Manufacturing", image: "/placeholder.svg?height=300&width=300" },
            ].map((category, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => addFilter(category.name.split(" ")[0])}
                >
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="py-12">
        <div className="container">
          <FadeInSection>
            <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Classic Oxford Shirt",
                category: "Men's Wear",
                image: "/placeholder.svg?height=400&width=300",
                price: "$12.50 - $9.75",
                moq: "100 units",
              },
              {
                name: "Slim Fit Chinos",
                category: "Men's Wear",
                image: "/placeholder.svg?height=400&width=300",
                price: "$14.25 - $11.50",
                moq: "100 units",
              },
              {
                name: "Floral Summer Dress",
                category: "Women's Wear",
                image: "/placeholder.svg?height=400&width=300",
                price: "$16.75 - $13.25",
                moq: "100 units",
              },
              {
                name: "Casual Blazer",
                category: "Men's Wear",
                image: "/placeholder.svg?height=400&width=300",
                price: "$22.50 - $18.75",
                moq: "50 units",
              },
              {
                name: "High-Waist Jeans",
                category: "Women's Wear",
                image: "/placeholder.svg?height=400&width=300",
                price: "$15.25 - $12.50",
                moq: "100 units",
              },
              {
                name: "Linen Blend Shirt",
                category: "Men's Wear",
                image: "/placeholder.svg?height=400&width=300",
                price: "$13.75 - $10.25",
                moq: "100 units",
              },
              {
                name: "Pleated Midi Skirt",
                category: "Women's Wear",
                image: "/placeholder.svg?height=400&width=300",
                price: "$14.50 - $11.75",
                moq: "100 units",
              },
              {
                name: "Lightweight Sweater",
                category: "Seasonal Collections",
                image: "/placeholder.svg?height=400&width=300",
                price: "$17.25 - $14.50",
                moq: "75 units",
              },
            ].map((product, index) => (
              <FadeInSection key={index} delay={index * 0.05} direction="up">
                <HoverCardEffect className="group h-full">
                  <div className="flex flex-col h-full">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-4 flex flex-col flex-1">
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm font-medium">Wholesale: {product.price}</p>
                        <p className="text-sm text-muted-foreground">MOQ: {product.moq}</p>
                      </div>
                      <motion.div className="mt-auto pt-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <ButtonWithFeedback variant="outline" className="w-full">
                          View Details
                        </ButtonWithFeedback>
                      </motion.div>
                    </div>
                  </div>
                </HoverCardEffect>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection direction="up" className="mt-12 flex justify-center">
            <ButtonWithFeedback>Load More Products</ButtonWithFeedback>
          </FadeInSection>
        </div>
      </section>

      {/* Bulk Pricing */}
      <section className="bg-muted/60 py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        </div>
        <div className="container relative z-10">
          <FadeInSection>
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bulk Pricing Tiers</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Our tiered pricing structure rewards larger orders with better rates.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard",
                description: "For smaller retailers just getting started",
                features: ["100-249 units per style", "Standard wholesale pricing", "Standard shipping times"],
                featured: false,
              },
              {
                title: "Premium",
                description: "For established retailers with consistent volume",
                features: [
                  "250-499 units per style",
                  "10% discount on wholesale pricing",
                  "Priority shipping",
                  "Basic customization options",
                ],
                featured: true,
              },
              {
                title: "Enterprise",
                description: "For large retailers with high volume needs",
                features: [
                  "500+ units per style",
                  "15-20% discount on wholesale pricing",
                  "Express shipping",
                  "Advanced customization options",
                  "Dedicated account manager",
                ],
                featured: false,
              },
            ].map((tier, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <motion.div
                  className={`flex flex-col p-6 h-full ${
                    tier.featured ? "bg-primary text-primary-foreground" : "bg-background"
                  } rounded-lg shadow-sm`}
                  whileHover={{
                    y: -10,
                    boxShadow: tier.featured ? "0 20px 30px rgba(0,0,0,0.2)" : "0 15px 25px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-xl font-bold mb-3">{tier.title}</h3>
                  <p
                    className={`text-sm ${tier.featured ? "text-primary-foreground/90" : "text-muted-foreground"} mb-6`}
                  >
                    {tier.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`mr-2 ${tier.featured ? "" : "text-primary"}`}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <ButtonWithFeedback variant={tier.featured ? "secondary" : "outline"}>
                      Contact Sales
                    </ButtonWithFeedback>
                  </motion.div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Can't find what you're looking for?
              </h2>
              <p className="max-w-2xl text-muted-foreground mb-8">
                We offer custom manufacturing services tailored to your specific needs. Our team can help you create
                unique pieces for your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <ButtonWithFeedback>Request Custom Quote</ButtonWithFeedback>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <ButtonWithFeedback variant="outline">Download Full Catalog</ButtonWithFeedback>
                </motion.div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}

