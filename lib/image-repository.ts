// Image categories for better organization
export type ImageCategory =
  | "hero"
  | "product"
  | "service"
  | "testimonial"
  | "feature"
  | "promotion"
  | "team"
  | "background"
  | "brand"
  | "app"

// Image repository with high-quality images
export const imageRepository = {
  hero: [
    {
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop",
      alt: "Fashion retail store with elegant displays",
      width: 1920,
      height: 1080,
    },
    {
      src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2670&auto=format&fit=crop",
      alt: "Premium clothing collection on display",
      width: 1920,
      height: 1080,
    },
  ],
  product: [
    {
      src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2649&auto=format&fit=crop",
      alt: "Premium cotton shirt",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2670&auto=format&fit=crop",
      alt: "Designer jeans collection",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=2574&auto=format&fit=crop",
      alt: "Casual blazer",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2673&auto=format&fit=crop",
      alt: "Summer dress",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2574&auto=format&fit=crop",
      alt: "Men's casual outfit",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2670&auto=format&fit=crop",
      alt: "Luxury accessories",
      width: 800,
      height: 600,
    },
  ],
  service: [
    {
      src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2670&auto=format&fit=crop",
      alt: "Custom tailoring service",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
      alt: "Style consultation",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop",
      alt: "Express alterations",
      width: 800,
      height: 600,
    },
  ],
  testimonial: [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
      alt: "Rajesh Kumar, Fashion Hub Owner",
      width: 200,
      height: 200,
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
      alt: "Priya Sharma, Style Studio Director",
      width: 200,
      height: 200,
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
      alt: "Amit Singh, Trendsetter Founder",
      width: 200,
      height: 200,
    },
  ],
  feature: [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      alt: "Advanced analytics dashboard",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
      alt: "Inventory management system",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop",
      alt: "Business partnership handshake",
      width: 800,
      height: 600,
    },
  ],
  promotion: [
    {
      src: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2670&auto=format&fit=crop",
      alt: "Summer sale promotion",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1490735891913-40897cdaafd1?q=80&w=2670&auto=format&fit=crop",
      alt: "Fashion show event",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671&auto=format&fit=crop",
      alt: "New collection arrival",
      width: 800,
      height: 600,
    },
  ],
  team: [
    {
      src: "https://images.unsplash.com/photo-1628069773461-269448102fd4?q=80&w=800&auto=format&fit=crop",
      alt: "CEO and founder",
      width: 400,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1628069773461-269448102fd4?q=80&w=800&auto=format&fit=crop",
      alt: "Head of operations",
      width: 400,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1628069773461-269448102fd4?q=80&w=800&auto=format&fit=crop",
      alt: "Lead designer",
      width: 400,
      height: 400,
    },
  ],
  background: [
    {
      src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671&auto=format&fit=crop",
      alt: "Fashion retail background",
      width: 1920,
      height: 1080,
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
      alt: "Clothing store interior",
      width: 1920,
      height: 1080,
    },
  ],
  brand: [
    {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
      alt: "Premium brand showcase",
      width: 800,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2670&auto=format&fit=crop",
      alt: "Fashion brand identity",
      width: 800,
      height: 400,
    },
  ],
  app: [
    {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
      alt: "Mobile app interface",
      width: 600,
      height: 1200,
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop",
      alt: "Dashboard on mobile device",
      width: 600,
      height: 1200,
    },
  ],
}

// Helper function to get a random image from a category
export function getRandomImage(category: ImageCategory) {
  const images = imageRepository[category]
  return images[Math.floor(Math.random() * images.length)]
}

// Helper function to get a specific image by index
export function getCategoryImage(category: ImageCategory, index = 0) {
  const images = imageRepository[category]
  return images[index % images.length]
}
