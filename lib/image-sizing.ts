// Standard image sizes for consistent display across the site
export const imageSizes = {
  // Product images
  product: {
    thumbnail: { width: 100, height: 100 },
    small: { width: 200, height: 200 },
    medium: { width: 400, height: 300 },
    large: { width: 800, height: 600 },
  },

  // Feature images
  feature: {
    small: { width: 300, height: 200 },
    medium: { width: 500, height: 350 },
    large: { width: 800, height: 600 },
  },

  // Hero images
  hero: {
    mobile: { width: 640, height: 960 },
    desktop: { width: 1920, height: 1080 },
  },

  // Testimonial images
  testimonial: {
    avatar: { width: 64, height: 64 },
    portrait: { width: 300, height: 400 },
  },

  // Gallery images
  gallery: {
    thumbnail: { width: 150, height: 150 },
    preview: { width: 600, height: 400 },
    fullscreen: { width: 1200, height: 800 },
  },

  // Blog/article images
  article: {
    thumbnail: { width: 300, height: 200 },
    featured: { width: 900, height: 500 },
    inline: { width: 700, height: 400 },
  },

  // Team member images
  team: {
    avatar: { width: 100, height: 100 },
    profile: { width: 400, height: 500 },
  },

  // Partner/client logos
  logo: {
    small: { width: 100, height: 50 },
    medium: { width: 200, height: 100 },
    large: { width: 300, height: 150 },
  },

  // Banner images
  banner: {
    small: { width: 800, height: 200 },
    medium: { width: 1200, height: 300 },
    large: { width: 1800, height: 400 },
  },
}

// Helper function to get responsive sizes based on breakpoints
export function getResponsiveSizes(baseSize: { width: number; height: number }, scale = 1) {
  return {
    xs: Math.round(baseSize.width * 0.5 * scale),
    sm: Math.round(baseSize.width * 0.7 * scale),
    md: Math.round(baseSize.width * 0.8 * scale),
    lg: Math.round(baseSize.width * 0.9 * scale),
    xl: baseSize.width,
    xxl: Math.round(baseSize.width * 1.2 * scale),
  }
}
