"use client"

import { RealRetailerCard } from "@/components/real-retailer-card"
import FadeInSection from "@/components/fade-in-section"

export function RealRetailerGrid() {
  // Real retailer testimonials data - Only showing Qadir and Imran Khan for the solutions page
  const retailers = [
    {
      id: "qadir",
      name: "Qadir",
      role: "Fashion Retailer, Virar",
      image: "/images/testimonials/qadir.png",
      content:
        "The Big Fashion has transformed how I manage my inventory. Their platform is intuitive and the analytics help me make better purchasing decisions. My store's profitability has increased by 35% since partnering with them.",
    },
    {
      id: "imran-khan",
      name: "Imran Khan",
      role: "Clothing Store Owner, Nalasopara",
      image: "/images/testimonials/nabi.png", // Using the same image as before
      content:
        "As a small retailer, I was struggling with inventory management and supplier relationships. The Big Fashion's platform simplified everything. Their team is responsive and the ordering system is seamless.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Retailers, Real Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how fashion retailers across Tier 2 & 3 cities have transformed their businesses with our platform
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {retailers.map((retailer, index) => (
            <RealRetailerCard
              key={index}
              name={retailer.name}
              position={retailer.role}
              location={retailer.location}
              shopName={retailer.shopName}
              image={retailer.image}
              quote={retailer.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
