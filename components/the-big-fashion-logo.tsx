import { Zap } from "lucide-react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "full" | "icon"
}

export function TheBigFashionLogo({ className = "", size = "md", variant = "full" }: LogoProps) {
  const sizes = {
    sm: {
      icon: "h-4 w-4",
      text: "text-sm",
    },
    md: {
      icon: "h-5 w-5",
      text: "text-base",
    },
    lg: {
      icon: "h-6 w-6",
      text: "text-lg",
    },
  }

  if (variant === "icon") {
    return <Zap className={`text-primary ${sizes[size].icon} ${className}`} />
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Zap className={`text-primary ${sizes[size].icon} mr-1`} />
      <span className={`font-bold ${sizes[size].text}`}>THE BIG</span>
      <span className={`text-primary ${sizes[size].text}`}>FASHION</span>
    </div>
  )
}
