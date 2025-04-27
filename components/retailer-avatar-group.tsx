"use client"

import { EnhancedImage } from "@/components/ui/enhanced-image"

export function RetailerAvatarGroup() {
  // Prioritize these three retailers to be shown upfront
  const visibleRetailers = [
    {
      name: "Imraan",
      image: "/images/testimonials/imraan.png",
    },
    {
      name: "Nabi",
      image: "/images/testimonials/nabi.png",
    },
    {
      name: "Qadir",
      image: "/images/testimonials/qadir.png",
    },
  ]

  // Total number of retailers (30)
  const totalRetailers = 30
  const remainingCount = totalRetailers - visibleRetailers.length

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {visibleRetailers.map((retailer, index) => (
          <div
            key={index}
            className="inline-block h-12 w-12 rounded-full border-2 border-white/80 bg-white/90 overflow-hidden"
          >
            <EnhancedImage
              src={retailer.image}
              alt={retailer.name}
              width={48}
              height={48}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
        <div className="inline-block h-12 w-12 rounded-full border-2 border-white/80 bg-white/90 flex items-center justify-center text-primary font-bold">
          +{remainingCount}
        </div>
      </div>
      <p className="ml-3 text-sm font-medium">Trusted by 30+ retailers across 3 cities</p>
    </div>
  )
}
