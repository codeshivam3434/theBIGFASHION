import Image from "next/image"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

interface TheBigFashionLogoProps {
  className?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "custom"
  width?: number
  height?: number
  variant?: "default" | "white"
}

export default function TheBigFashionLogo({
  className,
  size = "md",
  width,
  height,
  variant = "default",
}: TheBigFashionLogoProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Responsive size mapping
  const sizeClasses = {
    xs: "h-5 md:h-6",
    sm: "h-6 md:h-8",
    md: "h-8 md:h-10",
    lg: "h-10 md:h-12",
    xl: "h-12 md:h-16",
    custom: "",
  }

  // Choose logo based on variant
  const logoSrc =
    variant === "white" ? "/images/big-fashion-logo-white.png" : "/images/big-fashion-logo-transparent.jpeg"

  // Calculate responsive dimensions
  const responsiveWidth = width || (isMobile ? 180 : 240)
  const responsiveHeight = height || (isMobile ? 60 : 80)

  return (
    <div className={cn("relative flex items-center", className)}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="BIG FASHION"
        width={responsiveWidth}
        height={responsiveHeight}
        className={cn(
          "h-auto w-auto object-contain transition-all duration-300",
          size !== "custom" && sizeClasses[size],
        )}
        priority
      />
    </div>
  )
}
