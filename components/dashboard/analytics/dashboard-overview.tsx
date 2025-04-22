"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, DollarSign, Package, ShoppingBag, Users } from "lucide-react"

interface DashboardOverviewProps {
  dateRange?: { from: Date; to: Date }
}

export function DashboardOverview({ dateRange }: DashboardOverviewProps) {
  // In a real application, this data would come from an API call
  const stats = [
    {
      title: "Total Revenue",
      value: "₹24,32,580",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Total Sales",
      value: "1,245",
      change: "+18.2%",
      trend: "up",
      icon: ShoppingBag,
    },
    {
      title: "Active Customers",
      value: "573",
      change: "+7.3%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Dead Stock Value",
      value: "₹3,45,210",
      change: "-5.1%",
      trend: "down",
      icon: Package,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs">
                {stat.trend === "up" ? (
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                <span className="ml-1 text-muted-foreground">from previous period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
