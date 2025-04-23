import Image from "next/image"
import { cn } from "@/lib/utils"

interface TheBigFashionLogoProps {
  className?: string
}

export default function TheBigFashionLogo({ className }: TheBigFashionLogoProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/images/big-fashion-logo.png"
        alt="BIG FASHION"
        width={120}
        height={40}
        className="h-auto w-auto"
        priority
      />
    </div>
  )
}
