"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SalesByTimeChart } from "./charts/sales-by-time-chart"
import { SalesByCategoryChart } from "./charts/sales-by-category-chart"
import { SalesByBrandChart } from "./charts/sales-by-brand-chart"
import { SalesLeaderboardChart } from "./charts/sales-leaderboard-chart"
import { ProductPerformanceChart } from "./charts/product-performance-chart"

interface SalesPerformanceProps {
  dateRange?: { from: Date; to: Date }
}

export function SalesPerformance({ dateRange }: SalesPerformanceProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Sales Performance</CardTitle>
          <CardDescription>Track your sales performance over time, by product, category, and brand</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="time">
            <TabsList>
              <TabsTrigger value="time">Time</TabsTrigger>
              <TabsTrigger value="category">Category</TabsTrigger>
              <TabsTrigger value="brand">Brand</TabsTrigger>
            </TabsList>
            <TabsContent value="time" className="pt-4">
              <SalesByTimeChart timeframe="monthly" />
            </TabsContent>
            <TabsContent value="category" className="pt-4">
              <SalesByCategoryChart />
            </TabsContent>
            <TabsContent value="brand" className="pt-4">
              <SalesByBrandChart />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card className="row-span-2">
        <CardHeader>
          <CardTitle>Sales Leaderboard</CardTitle>
          <CardDescription>Top performing products and retailers</CardDescription>
        </CardHeader>
        <CardContent>
          <SalesLeaderboardChart />
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Product Performance</CardTitle>
          <CardDescription>Identify best-sellers, slow movers, and high-margin items</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductPerformanceChart />
        </CardContent>
      </Card>
    </div>
  )
}
