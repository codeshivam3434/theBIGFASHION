"use client"

import { RealRetailerCard } from "@/components/real-retailer-card"
import FadeInSection from "@/components/fade-in-section"

export function RealRetailerGrid() {
  // Real retailer testimonials data - Only showing Qadir, Imraan, and Nabi for the solutions page
  const retailers = [
    {
      name: "Qadir",
      position: "Owner",
      location: "Chinchoti",
      shopName: "AK Men's Wear",
      image: "/images/testimonials/qadir.png",
      quote:
        "The platform's analytics have helped me understand which products sell best in my area. My profit margins have improved significantly.",
    },
    {
      name: "Imraan",
      position: "Owner",
      location: "Vasai West",
      shopName: "Trendyz",
      image: "/images/testimonials/imraan.png",
      quote:
        "Since partnering with BIGFASHION, I've been able to focus more on customer service while they handle the supply chain logistics.",
    },
    {
      name: "Nabi",
      position: "Owner",
      location: "Vasai West",
      shopName: "Groovy Collection",
      image: "/images/testimonials/nabi.png",
      quote:
        "The zero-risk inventory model has been a game-changer for my business. I can now offer premium brands without the financial burden.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {retailers.map((retailer, index) => (
            <RealRetailerCard
              key={index}
              name={retailer.name}
              position={retailer.position}
              location={retailer.location}
              shopName={retailer.shopName}
              image={retailer.image}
              quote={retailer.quote}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
