"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomerSegmentChart } from "./charts/customer-segment-chart"
import { CustomerRetentionChart } from "./charts/customer-retention-chart"
import { CustomerLifetimeValueChart } from "./charts/customer-lifetime-value-chart"

export function CustomerInsights() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1 md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Customer Segmentation</CardTitle>
          <CardDescription>Distribution of customer types based on purchase behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <CustomerSegmentChart />
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">Loyal Customers</span>
              <span className="text-xl font-bold">36.3%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">High Spenders</span>
              <span className="text-xl font-bold">25.6%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">Occasional Buyers</span>
              <span className="text-xl font-bold">19.1%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">New Customers</span>
              <span className="text-xl font-bold">19.0%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Insights</CardTitle>
          <CardDescription>Key metrics about your customer base</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">Total Customers</span>
              <span className="text-2xl font-bold">12,486</span>
              <span className="text-xs text-green-500">+12.3% from last month</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">New Customers</span>
              <span className="text-2xl font-bold">2,174</span>
              <span className="text-xs text-green-500">+18.6% from last month</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">Repeat Purchase Rate</span>
              <span className="text-2xl font-bold">68.4%</span>
              <span className="text-xs text-green-500">+5.2% from last month</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">Average Order Value</span>
              <span className="text-2xl font-bold">$128.50</span>
              <span className="text-xs text-green-500">+3.7% from last month</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-1 md:col-span-1 lg:col-span-1">
        <CardHeader>
          <CardTitle>Customer Retention</CardTitle>
          <CardDescription>Monthly retention rates</CardDescription>
        </CardHeader>
        <CardContent>
          <CustomerRetentionChart />
        </CardContent>
      </Card>
      <Card className="col-span-1 md:col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Customer Lifetime Value</CardTitle>
          <CardDescription>Average revenue per customer segment</CardDescription>
        </CardHeader>
        <CardContent>
          <CustomerLifetimeValueChart />
        </CardContent>
      </Card>
    </div>
  )
}
