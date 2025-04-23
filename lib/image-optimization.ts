// Image optimization utilities

// Calculate optimal image dimensions based on device pixel ratio
export function getOptimalDimensions(
  width: number,
  height: number,
  maxWidth?: number,
  maxHeight?: number,
): { width: number; height: number } {
  // Get device pixel ratio (default to 1 if not available)
  const pixelRatio = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1

  // Calculate dimensions accounting for pixel ratio
  let optimalWidth = Math.round(width * pixelRatio)
  let optimalHeight = Math.round(height * pixelRatio)

  // Apply maximum constraints if provided
  if (maxWidth && optimalWidth > maxWidth) {
    const ratio = maxWidth / optimalWidth
    optimalWidth = maxWidth
    optimalHeight = Math.round(optimalHeight * ratio)
  }

  if (maxHeight && optimalHeight > maxHeight) {
    const ratio = maxHeight / optimalHeight
    optimalHeight = maxHeight
    optimalWidth = Math.round(optimalWidth * ratio)
  }

  return { width: optimalWidth, height: optimalHeight }
}

// Generate a placeholder SVG for lazy loading
export function generatePlaceholderSVG(width: number, height: number, color = "#e5e7eb"): string {
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}"/>
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

// Generate image sizes attribute for responsive images
export function generateSizesAttribute(mobileSize?: string, tabletSize?: string, desktopSize?: string): string {
  const sizes = []

  if (mobileSize) sizes.push(`(max-width: 640px) ${mobileSize}`)
  if (tabletSize) sizes.push(`(max-width: 1024px) ${tabletSize}`)
  if (desktopSize) sizes.push(desktopSize)

  return sizes.join(", ") || "100vw"
}

// Calculate aspect ratio from width and height
export function calculateAspectRatio(width: number, height: number): number {
  return width / height
}

// Get tailwind aspect ratio class from numeric ratio
export function getAspectRatioClass(ratio: number): string {
  // Common aspect ratios
  if (Math.abs(ratio - 1) < 0.01) return "aspect-square" // 1:1
  if (Math.abs(ratio - 16 / 9) < 0.01) return "aspect-video" // 16:9
  if (Math.abs(ratio - 4 / 3) < 0.01) return "aspect-4/3" // 4:3
  if (Math.abs(ratio - 3 / 2) < 0.01) return "aspect-3/2" // 3:2
  if (Math.abs(ratio - 3 / 4) < 0.01) return "aspect-3/4" // 3:4

  // If no match, return a custom aspect ratio
  return `aspect-[${ratio.toFixed(2)}]`
}
