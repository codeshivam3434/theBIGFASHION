"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DateRangePicker } from "@/components/dashboard/analytics/date-range-picker"
import { DashboardOverview } from "@/components/dashboard/analytics/dashboard-overview"
import { SalesPerformance } from "@/components/dashboard/analytics/sales-performance"
import { CustomerInsights } from "@/components/dashboard/analytics/customer-insights"
import { InventoryManagement } from "@/components/dashboard/analytics/inventory-management"
import { ProductSuggestions } from "@/components/dashboard/analytics/product-suggestions"
import { MarketIntelligence } from "@/components/dashboard/analytics/market-intelligence"
import { MarketingAutomation } from "@/components/dashboard/analytics/marketing-automation"
import { RevenueTracking } from "@/components/dashboard/analytics/revenue-tracking"
import { DeadStockProtection } from "@/components/dashboard/analytics/dead-stock-protection"
import { LogisticsTracking } from "@/components/dashboard/analytics/logistics-tracking"
import { DemandPrediction } from "@/components/dashboard/analytics/demand-prediction"
import { RetailerCompetition } from "@/components/dashboard/analytics/retailer-competition"
import { CustomReports } from "@/components/dashboard/analytics/custom-reports"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw, Share2 } from "lucide-react"

export default function WholesaleAnalytics() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  })

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wholesale 2.0 Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights to maximize sales and minimize dead stock</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button size="sm" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm" variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      <DashboardOverview dateRange={dateRange} />

      <Tabs defaultValue="sales" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <TabsTrigger value="sales">Sales Performance</TabsTrigger>
          <TabsTrigger value="customers">Customer Insights</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="suggestions">Product Suggestions</TabsTrigger>
          <TabsTrigger value="market">Market Intelligence</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="space-y-4 pt-4">
          <SalesPerformance dateRange={dateRange} />
          <RevenueTracking dateRange={dateRange} />
        </TabsContent>
        <TabsContent value="customers" className="space-y-4 pt-4">
          <CustomerInsights dateRange={dateRange} />
        </TabsContent>
        <TabsContent value="inventory" className="space-y-4 pt-4">
          <InventoryManagement dateRange={dateRange} />
          <DeadStockProtection dateRange={dateRange} />
          <LogisticsTracking dateRange={dateRange} />
        </TabsContent>
        <TabsContent value="suggestions" className="space-y-4 pt-4">
          <ProductSuggestions dateRange={dateRange} />
          <DemandPrediction dateRange={dateRange} />
        </TabsContent>
        <TabsContent value="market" className="space-y-4 pt-4">
          <MarketIntelligence dateRange={dateRange} />
          <RetailerCompetition dateRange={dateRange} />
        </TabsContent>
        <TabsContent value="marketing" className="space-y-4 pt-4">
          <MarketingAutomation dateRange={dateRange} />
          <CustomReports dateRange={dateRange} />
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Analytics</CardTitle>
          <CardDescription>Dive deeper into your data with AI-powered insights and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="insights">
            <TabsList>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
              <TabsTrigger value="predictions">Predictions</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="reports">Custom Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="insights" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Sales Anomalies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      AI has detected a 27% increase in denim sales this week compared to the last 3 months average.
                      This may be due to the new collection launch and social media campaign.
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Customer Behavior</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Customers who purchase premium t-shirts are 3.5x more likely to return within 15 days to purchase
                      matching accessories.
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Inventory Risk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      12 products are at high risk of becoming dead stock within 30 days based on current sales velocity
                      and seasonal trends.
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="predictions" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Sales Forecast</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Based on historical data and market trends, we predict a 22% increase in overall sales for the
                      upcoming festival season (Oct-Nov).
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Trend Prediction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our AI predicts that pastel colors and oversized fits will be trending in the next quarter based
                      on social media analysis and early adopter purchases.
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Stock Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      To meet projected demand, you should increase inventory of premium denim by 35% and casual shirts
                      by 28% before the end of the month.
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="recommendations" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Pricing Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Increasing prices of premium jeans by 8% would optimize profit margins without significantly
                      impacting sales volume based on price elasticity analysis.
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Bundle Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Creating a "Complete Look" bundle with shirt, jeans, and accessories could increase average order
                      value by 32% based on purchase pattern analysis.
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Dead Stock Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Running a limited-time 25% discount on slow-moving winter collection items could clear 78% of
                      potential dead stock before the season ends.
                    </p>
                    <Button variant="link" className="mt-2 px-0">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="pt-4">
              <CustomReports dateRange={dateRange} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
