"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Percent,
  ArrowRight,
  Calendar,
  Download,
  Filter,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface RevenueTrackingProps {
  dateRange: { from: Date; to: Date }
}

export function RevenueTracking({ dateRange }: RevenueTrackingProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Revenue & Profit Tracking</CardTitle>
          <CardDescription>Track your financial performance and profitability</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Revenue Overview</TabsTrigger>
              <TabsTrigger value="products">Product Profitability</TabsTrigger>
              <TabsTrigger value="comparison">Period Comparison</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Gross Revenue</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹24,58,245</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +18.2%
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={82} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹8,60,386</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +15.7%
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={75} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                      <Percent className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">35.0%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-red-500 font-medium inline-flex items-center">
                          <TrendingDown className="h-3 w-3 mr-1" /> -0.8%
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={35} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹3,605</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +5.2%
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={52} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue by Category</CardTitle>
                      <CardDescription>Distribution of revenue across product categories</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <PieChart className="h-8 w-8 text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">Revenue Chart Placeholder</span>
                      </div>
                      <div className="space-y-2 mt-4">
                        {[
                          { category: "Men's Wear", revenue: "₹8,60,386", percentage: "35%", growth: "+12.5%" },
                          { category: "Women's Wear", revenue: "₹7,37,474", percentage: "30%", growth: "+18.2%" },
                          { category: "Traditional", revenue: "₹4,91,649", percentage: "20%", growth: "+22.4%" },
                          { category: "Seasonal", revenue: "₹3,68,737", percentage: "15%", growth: "+8.7%" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`h-3 w-3 rounded-full bg-primary-${(index + 1) * 100}`}></div>
                              <span className="text-sm">{item.category}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">{item.revenue}</div>
                              <div className="text-xs text-muted-foreground">
                                {item.percentage} <span className="text-green-500">{item.growth}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue Trend</CardTitle>
                      <CardDescription>Monthly revenue trend for the current year</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <LineChart className="h-8 w-8 text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">Trend Chart Placeholder</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <p className="text-xs text-muted-foreground">This Month</p>
                          <p className="text-lg font-medium">₹24,58,245</p>
                        </div>
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <p className="text-xs text-muted-foreground">Last Month</p>
                          <p className="text-lg font-medium">₹20,78,965</p>
                        </div>
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <p className="text-xs text-muted-foreground">Growth</p>
                          <p className="text-lg font-medium text-green-500">+18.2%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenue by Retailer</CardTitle>
                    <CardDescription>Top performing retailers by revenue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Retailer</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Orders</TableHead>
                          <TableHead>Avg. Order Value</TableHead>
                          <TableHead>Growth</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Rajesh Textiles",
                            location: "Mumbai",
                            revenue: "₹5,45,000",
                            orders: 145,
                            aov: "₹3,758",
                            growth: "+22.5%",
                          },
                          {
                            name: "Sharma Fashions",
                            location: "Delhi",
                            revenue: "₹4,78,000",
                            orders: 132,
                            aov: "₹3,621",
                            growth: "+18.3%",
                          },
                          {
                            name: "Patel Garments",
                            location: "Ahmedabad",
                            revenue: "₹3,92,000",
                            orders: 118,
                            aov: "₹3,322",
                            growth: "+15.7%",
                          },
                          {
                            name: "Singh Retailers",
                            location: "Jaipur",
                            revenue: "₹3,45,000",
                            orders: 98,
                            aov: "₹3,520",
                            growth: "+12.9%",
                          },
                          {
                            name: "Kumar Enterprises",
                            location: "Bangalore",
                            revenue: "₹3,12,000",
                            orders: 92,
                            aov: "₹3,391",
                            growth: "+10.5%",
                          },
                        ].map((retailer, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{retailer.name}</TableCell>
                            <TableCell>{retailer.location}</TableCell>
                            <TableCell>{retailer.revenue}</TableCell>
                            <TableCell>{retailer.orders}</TableCell>
                            <TableCell>{retailer.aov}</TableCell>
                            <TableCell className="text-green-500">{retailer.growth}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Retailers <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="products" className="pt-4">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter by Category
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter by Margin
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Date Range
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Product Profitability</CardTitle>
                    <CardDescription>Profit margins by product</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Cost</TableHead>
                          <TableHead>Profit</TableHead>
                          <TableHead>Margin</TableHead>
                          <TableHead>Units Sold</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Designer Lehenga",
                            category: "Traditional",
                            revenue: "₹12,25,000",
                            cost: "₹7,35,000",
                            profit: "₹4,90,000",
                            margin: "40%",
                            units: 245,
                          },
                          {
                            name: "Formal Suit Set",
                            category: "Men's Wear",
                            revenue: "₹9,45,000",
                            cost: "₹5,67,000",
                            profit: "₹3,78,000",
                            margin: "40%",
                            units: 189,
                          },
                          {
                            name: "Cotton Kurti Set",
                            category: "Women's Wear",
                            revenue: "₹5,46,000",
                            cost: "₹3,27,600",
                            profit: "₹2,18,400",
                            margin: "40%",
                            units: 156,
                          },
                          {
                            name: "Silk Saree",
                            category: "Traditional",
                            revenue: "₹5,28,000",
                            cost: "₹3,43,200",
                            profit: "₹1,84,800",
                            margin: "35%",
                            units: 132,
                          },
                          {
                            name: "Denim Jacket",
                            category: "Men's Wear",
                            revenue: "₹3,84,000",
                            cost: "₹2,49,600",
                            profit: "₹1,34,400",
                            margin: "35%",
                            units: 128,
                          },
                          {
                            name: "Casual T-shirt",
                            category: "Men's Wear",
                            revenue: "₹2,94,000",
                            cost: "₹1,76,400",
                            profit: "₹1,17,600",
                            margin: "40%",
                            units: 420,
                          },
                          {
                            name: "Summer Dress",
                            category: "Women's Wear",
                            revenue: "₹3,15,000",
                            cost: "₹1,89,000",
                            profit: "₹1,26,000",
                            margin: "40%",
                            units: 105,
                          },
                        ].map((product, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.revenue}</TableCell>
                            <TableCell>{product.cost}</TableCell>
                            <TableCell>{product.profit}</TableCell>
                            <TableCell>{product.margin}</TableCell>
                            <TableCell>{product.units}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Highest Margin Products</CardTitle>
                      <CardDescription>Products with the best profit margins</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Designer Jewelry Set",
                            category: "Accessories",
                            margin: "65%",
                            revenue: "₹2,45,000",
                          },
                          { name: "Premium Silk Scarf", category: "Accessories", margin: "60%", revenue: "₹1,80,000" },
                          { name: "Handcrafted Clutch", category: "Accessories", margin: "55%", revenue: "₹1,65,000" },
                          { name: "Designer Sunglasses", category: "Accessories", margin: "50%", revenue: "₹1,25,000" },
                          { name: "Premium Leather Belt", category: "Accessories", margin: "50%", revenue: "₹95,000" },
                        ].map((product, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.category}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className="mb-1">
                                {product.margin}
                              </Badge>
                              <p className="text-xs text-muted-foreground">{product.revenue}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Lowest Margin Products</CardTitle>
                      <CardDescription>Products with the lowest profit margins</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Basic Cotton T-shirt", category: "Men's Wear", margin: "20%", revenue: "₹1,25,000" },
                          {
                            name: "Plain Socks (Pack of 3)",
                            category: "Accessories",
                            margin: "22%",
                            revenue: "₹75,000",
                          },
                          {
                            name: "Simple Cotton Handkerchief",
                            category: "Accessories",
                            margin: "25%",
                            revenue: "₹45,000",
                          },
                          { name: "Basic Underwear Set", category: "Innerwear", margin: "25%", revenue: "₹85,000" },
                          { name: "Plain Cotton Mask", category: "Accessories", margin: "25%", revenue: "₹35,000" },
                        ].map((product, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.category}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className="mb-1">
                                {product.margin}
                              </Badge>
                              <p className="text-xs text-muted-foreground">{product.revenue}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Margin Optimization Recommendations</CardTitle>
                    <CardDescription>AI-generated recommendations to improve profit margins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-primary/10 p-4">
                        <h4 className="font-semibold">Bundle Low-Margin Products</h4>
                        <p className="text-sm text-muted-foreground">
                          Create bundles combining low-margin basics with higher-margin accessories to increase overall
                          profitability by an estimated 15-20%.
                        </p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-4">
                        <h4 className="font-semibold">Optimize Pricing Strategy</h4>
                        <p className="text-sm text-muted-foreground">
                          Increasing prices of Designer Lehengas by 5% would have minimal impact on sales volume but
                          could increase profit by ₹61,250.
                        </p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-4">
                        <h4 className="font-semibold">Supplier Negotiation</h4>
                        <p className="text-sm text-muted-foreground">
                          Negotiating a 3% reduction in costs for Formal Suit Sets could increase margins from 40% to
                          42% without changing retail prices.
                        </p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-4">
                        <h4 className="font-semibold">Inventory Allocation</h4>
                        <p className="text-sm text-muted-foreground">
                          Allocating 15% more inventory to high-margin accessories could increase overall profit by an
                          estimated 8% in the next quarter.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="pt-4">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      This Week vs Last Week
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      This Month vs Last Month
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Custom Comparison
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export Report
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Current</p>
                          <p className="text-xl font-bold">₹24.58L</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Previous</p>
                          <p className="text-xl font-bold">₹20.79L</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">Change</p>
                        <Badge variant="outline" className="text-green-500">
                          +18.2%
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Orders</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Current</p>
                          <p className="text-xl font-bold">682</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Previous</p>
                          <p className="text-xl font-bold">602</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">Change</p>
                        <Badge variant="outline" className="text-green-500">
                          +13.3%
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                      <LineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Current</p>
                          <p className="text-xl font-bold">₹3,605</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Previous</p>
                          <p className="text-xl font-bold">₹3,425</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">Change</p>
                        <Badge variant="outline" className="text-green-500">
                          +5.2%
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                      <Percent className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Current</p>
                          <p className="text-xl font-bold">35.0%</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Previous</p>
                          <p className="text-xl font-bold">35.8%</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">Change</p>
                        <Badge variant="outline" className="text-red-500">
                          -0.8%
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Category Comparison</CardTitle>
                    <CardDescription>Performance comparison by product category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead>Current Revenue</TableHead>
                          <TableHead>Previous Revenue</TableHead>
                          <TableHead>Change</TableHead>
                          <TableHead>Current Margin</TableHead>
                          <TableHead>Previous Margin</TableHead>
                          <TableHead>Change</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Men's Wear",
                            currentRevenue: "₹8,60,386",
                            previousRevenue: "₹7,27,636",
                            revenueChange: "+18.2%",
                            currentMargin: "38%",
                            previousMargin: "37%",
                            marginChange: "+1.0%",
                          },
                          {
                            name: "Women's Wear",
                            currentRevenue: "₹7,37,474",
                            previousRevenue: "₹6,23,690",
                            revenueChange: "+18.2%",
                            currentMargin: "40%",
                            previousMargin: "40%",
                            marginChange: "0.0%",
                          },
                          {
                            name: "Traditional",
                            currentRevenue: "₹4,91,649",
                            previousRevenue: "₹4,15,793",
                            revenueChange: "+18.2%",
                            currentMargin: "35%",
                            previousMargin: "38%",
                            marginChange: "-3.0%",
                          },
                          {
                            name: "Seasonal",
                            currentRevenue: "₹3,68,737",
                            previousRevenue: "₹3,11,845",
                            revenueChange: "+18.2%",
                            currentMargin: "30%",
                            previousMargin: "32%",
                            marginChange: "-2.0%",
                          },
                        ].map((category, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{category.name}</TableCell>
                            <TableCell>{category.currentRevenue}</TableCell>
                            <TableCell>{category.previousRevenue}</TableCell>
                            <TableCell className="text-green-500">{category.revenueChange}</TableCell>
                            <TableCell>{category.currentMargin}</TableCell>
                            <TableCell>{category.previousMargin}</TableCell>
                            <TableCell
                              className={
                                category.marginChange.startsWith("+")
                                  ? "text-green-500"
                                  : category.marginChange === "0.0%"
                                    ? ""
                                    : "text-red-500"
                              }
                            >
                              {category.marginChange}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ROI Calculator</CardTitle>
                    <CardDescription>Calculate return on investment for promotions and campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {[
                          {
                            name: "Summer Sale Campaign",
                            cost: "₹1,25,000",
                            revenue: "₹5,45,000",
                            roi: "336%",
                            status: "Completed",
                          },
                          {
                            name: "Festive Collection Launch",
                            cost: "₹2,50,000",
                            revenue: "₹8,75,000",
                            roi: "250%",
                            status: "Completed",
                          },
                          {
                            name: "Loyalty Program Promotion",
                            cost: "₹75,000",
                            revenue: "₹3,25,000",
                            roi: "333%",
                            status: "Completed",
                          },
                          {
                            name: "Influencer Marketing",
                            cost: "₹1,50,000",
                            revenue: "₹4,25,000",
                            roi: "183%",
                            status: "Completed",
                          },
                          {
                            name: "End of Season Sale",
                            cost: "₹1,00,000",
                            revenue: "₹3,85,000",
                            roi: "285%",
                            status: "Completed",
                          },
                          {
                            name: "New Collection Preview",
                            cost: "₹2,00,000",
                            revenue: "₹6,50,000",
                            roi: "225%",
                            status: "Ongoing",
                          },
                        ].map((campaign, index) => (
                          <Card key={index} className="border-none shadow-none">
                            <CardHeader className="px-2 py-3">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">{campaign.name}</CardTitle>
                                <Badge variant={campaign.status === "Completed" ? "outline" : "default"}>
                                  {campaign.status}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="px-2 py-0">
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Cost</p>
                                  <p className="font-medium">{campaign.cost}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Revenue</p>
                                  <p className="font-medium">{campaign.revenue}</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-muted-foreground">ROI</p>
                                  <p className="font-medium text-green-500">{campaign.roi}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">ROI Insights</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="rounded-lg bg-primary/10 p-3">
                              <p className="text-sm">
                                <span className="font-medium">Highest ROI:</span> Summer Sale Campaign (336%) and
                                Loyalty Program Promotion (333%)
                              </p>
                            </div>
                            <div className="rounded-lg bg-primary/10 p-3">
                              <p className="text-sm">
                                <span className="font-medium">Recommendation:</span> Increase investment in loyalty
                                programs and seasonal sales by 20% for the next quarter
                              </p>
                            </div>
                            <div className="rounded-lg bg-primary/10 p-3">
                              <p className="text-sm">
                                <span className="font-medium">Opportunity:</span> Influencer Marketing shows lower ROI
                                (183%) - consider optimizing influencer selection and content strategy
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
