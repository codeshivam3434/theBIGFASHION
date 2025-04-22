"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface SalesLeaderboardChartProps {
  dateRange?: { from: Date; to: Date }
}

export function SalesLeaderboardChart({ dateRange }: SalesLeaderboardChartProps) {
  const products = [
    {
      name: "Designer Lehenga",
      category: "Traditional",
      sales: 245,
      growth: 18.5,
      image:
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Formal Suit Set",
      category: "Men's Wear",
      sales: 189,
      growth: 12.3,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cotton Kurti Set",
      category: "Women's Wear",
      sales: 156,
      growth: 9.7,
      image:
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Silk Saree",
      category: "Traditional",
      sales: 132,
      growth: 8.5,
      image:
        "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Denim Jacket",
      category: "Men's Wear",
      sales: 128,
      growth: 7.2,
      image:
        "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <div className="space-y-6">
      {products.map((product, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="flex-none">
            <Badge
              variant={index < 3 ? "default" : "outline"}
              className="w-6 h-6 rounded-full p-0 flex items-center justify-center"
            >
              {index + 1}
            </Badge>
          </div>
          <Avatar className="h-10 w-10 rounded-md">
            <AvatarImage src={product.image} alt={product.name} />
            <AvatarFallback className="rounded-md">{product.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{product.name}</p>
            <p className="text-xs text-muted-foreground">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{product.sales} units</p>
            <div className="flex items-center justify-end">
              <Progress value={product.growth * 5} className="h-1 w-16 mr-2" />
              <p className="text-xs text-green-500">+{product.growth}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
