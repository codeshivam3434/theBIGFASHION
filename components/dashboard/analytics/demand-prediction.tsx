"use client"

import { Input } from "@/components/ui/input"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Brain, TrendingUp, Calendar, BarChart, LineChart, ArrowRight, Download, Filter, Search } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DemandPredictionProps {
  dateRange?: { from: Date; to: Date }
}

export function DemandPrediction({ dateRange }: DemandPredictionProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Demand Prediction</CardTitle>
          <CardDescription>Forecast future demand and optimize inventory planning</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="forecast">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="forecast">Sales Forecast</TabsTrigger>
              <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
              <TabsTrigger value="planning">Inventory Planning</TabsTrigger>
            </TabsList>

            <TabsContent value="forecast" className="pt-4">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Next 30 Days
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Next Quarter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Next 6 Months
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export Forecast
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Predicted Revenue</CardTitle>
                      <Brain className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹28,45,000</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +16.2%
                        </span>{" "}
                        vs. current period
                      </p>
                      <Progress value={75} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Predicted Orders</CardTitle>
                      <BarChart className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">785</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +12.5%
                        </span>{" "}
                        vs. current period
                      </p>
                      <Progress value={68} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Forecast Accuracy</CardTitle>
                      <Brain className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">92.5%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +2.3%
                        </span>{" "}
                        vs. last forecast
                      </p>
                      <Progress value={92} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Growth Categories</CardTitle>
                      <LineChart className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">Women's Wear, Traditional, Accessories</p>
                      <Progress value={60} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Sales Forecast by Category</CardTitle>
                    <CardDescription>AI-predicted sales for the next 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center">
                      <LineChart className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Sales Forecast Chart Placeholder</span>
                    </div>

                    <Table className="mt-4">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead>Current Period</TableHead>
                          <TableHead>Forecast</TableHead>
                          <TableHead>Change</TableHead>
                          <TableHead>Confidence</TableHead>
                          <TableHead>Key Drivers</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            category: "Women's Wear",
                            current: "₹7,37,474",
                            forecast: "₹8,92,350",
                            change: "+21.0%",
                            confidence: "95%",
                            drivers: ["Seasonal Trend", "Marketing Campaign"],
                          },
                          {
                            category: "Men's Wear",
                            current: "₹8,60,386",
                            forecast: "₹9,46,425",
                            change: "+10.0%",
                            confidence: "92%",
                            drivers: ["New Collection", "Pricing Strategy"],
                          },
                          {
                            category: "Traditional",
                            current: "₹4,91,649",
                            forecast: "₹5,89,979",
                            change: "+20.0%",
                            confidence: "94%",
                            drivers: ["Festival Season", "Wedding Season"],
                          },
                          {
                            category: "Seasonal",
                            current: "₹3,68,737",
                            forecast: "₹4,16,246",
                            change: "+12.9%",
                            confidence: "88%",
                            drivers: ["Weather Patterns", "Tourism Increase"],
                          },
                        ].map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.category}</TableCell>
                            <TableCell>{item.current}</TableCell>
                            <TableCell>{item.forecast}</TableCell>
                            <TableCell className="text-green-500">{item.change}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{item.confidence}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {item.drivers.map((driver, i) => (
                                  <Badge key={i} variant="secondary">
                                    {driver}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Product-Level Forecast</CardTitle>
                    <CardDescription>Detailed sales predictions for top products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Designer Lehenga",
                          category: "Traditional",
                          current: 245,
                          forecast: 294,
                          change: "+20.0%",
                          confidence: "94%",
                          image:
                            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Formal Suit Set",
                          category: "Men's Wear",
                          current: 189,
                          forecast: 208,
                          change: "+10.0%",
                          confidence: "92%",
                          image:
                            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Cotton Kurti Set",
                          category: "Women's Wear",
                          current: 156,
                          forecast: 187,
                          change: "+20.0%",
                          confidence: "95%",
                          image:
                            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Silk Saree",
                          category: "Traditional",
                          current: 132,
                          forecast: 158,
                          change: "+20.0%",
                          confidence: "93%",
                          image:
                            "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Denim Jacket",
                          category: "Men's Wear",
                          current: 128,
                          forecast: 141,
                          change: "+10.0%",
                          confidence: "90%",
                          image:
                            "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                      ].map((product, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                          <Avatar className="h-12 w-12 rounded-md">
                            <AvatarImage src={product.image} alt={product.name} />
                            <AvatarFallback className="rounded-md">{product.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.category}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Current</p>
                              <p className="font-medium">{product.current} units</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Forecast</p>
                              <p className="font-medium">{product.forecast} units</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Change</p>
                              <p className="font-medium text-green-500">{product.change}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Confidence</p>
                              <Badge variant="outline">{product.confidence}</Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Emerging Trends</CardTitle>
                      <CardDescription>Upcoming fashion trends detected by AI</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            trend: "Sustainable Fashion",
                            growth: "+45%",
                            confidence: "Very High",
                            timeframe: "Next 3-6 months",
                            description: "Eco-friendly materials and production processes gaining significant traction",
                          },
                          {
                            trend: "Oversized Silhouettes",
                            growth: "+38%",
                            confidence: "High",
                            timeframe: "Next 2-4 months",
                            description: "Loose-fitting, comfortable clothing styles across all categories",
                          },
                          {
                            trend: "Pastel Color Palette",
                            growth: "+32%",
                            confidence: "High",
                            timeframe: "Next 1-3 months",
                            description: "Soft, muted colors replacing bright and bold options",
                          },
                          {
                            trend: "Fusion Ethnic Wear",
                            growth: "+28%",
                            confidence: "Medium",
                            timeframe: "Next 3-5 months",
                            description: "Traditional designs with modern elements and styling",
                          },
                        ].map((trend, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{trend.trend}</h4>
                              <Badge className="bg-green-500">{trend.growth}</Badge>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">Confidence: {trend.confidence}</Badge>
                              <Badge variant="outline">Timeframe: {trend.timeframe}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{trend.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Seasonal Factors</CardTitle>
                      <CardDescription>Upcoming events affecting demand</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            event: "Wedding Season",
                            impact: "Very High",
                            timeframe: "Oct-Dec 2024",
                            categories: ["Traditional", "Formal Wear", "Accessories"],
                            recommendation: "Increase inventory of premium traditional wear and accessories by 30%",
                          },
                          {
                            event: "Festival Season",
                            impact: "High",
                            timeframe: "Sep-Nov 2024",
                            categories: ["Traditional", "Ethnic Wear", "Gift Items"],
                            recommendation: "Focus on festive collections with bright colors and traditional designs",
                          },
                          {
                            event: "Summer Vacation",
                            impact: "Medium",
                            timeframe: "Apr-Jun 2024",
                            categories: ["Casual Wear", "Beachwear", "Travel Accessories"],
                            recommendation: "Prepare lightweight, breathable fabrics and vacation essentials",
                          },
                          {
                            event: "Back to College",
                            impact: "Medium",
                            timeframe: "Jul-Aug 2024",
                            categories: ["Casual Wear", "Backpacks", "Footwear"],
                            recommendation: "Target youth-oriented styles and affordable fashion options",
                          },
                        ].map((event, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{event.event}</h4>
                              <Badge
                                variant={
                                  event.impact === "Very High"
                                    ? "default"
                                    : event.impact === "High"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                Impact: {event.impact}
                              </Badge>
                            </div>
                            <p className="text-sm mb-2">
                              <span className="text-muted-foreground">Timeframe:</span> {event.timeframe}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {event.categories.map((category, i) => (
                                <Badge key={i} variant="outline">
                                  {category}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground">{event.recommendation}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>External Factors</CardTitle>
                      <CardDescription>Market conditions affecting demand</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            factor: "Economic Outlook",
                            impact: "Medium",
                            trend: "Stable",
                            description:
                              "Consumer spending expected to remain stable with slight growth in premium segments",
                            recommendation:
                              "Maintain balanced inventory across price points with slight increase in premium offerings",
                          },
                          {
                            factor: "Competitor Activity",
                            impact: "High",
                            trend: "Increasing",
                            description: "Major competitors launching new collections and aggressive promotions",
                            recommendation:
                              "Focus on unique value propositions and customer experience to differentiate",
                          },
                          {
                            factor: "Supply Chain",
                            impact: "Medium",
                            trend: "Improving",
                            description: "Logistics costs stabilizing with improved delivery times",
                            recommendation:
                              "Optimize inventory levels and consider just-in-time restocking for popular items",
                          },
                          {
                            factor: "Social Media Trends",
                            impact: "High",
                            trend: "Volatile",
                            description: "Rapid shifts in fashion preferences driven by influencers and viral content",
                            recommendation: "Implement agile production and maintain flexible inventory allocation",
                          },
                        ].map((factor, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{factor.factor}</h4>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">Impact: {factor.impact}</Badge>
                                <Badge
                                  variant={
                                    factor.trend === "Improving"
                                      ? "success"
                                      : factor.trend === "Stable"
                                        ? "secondary"
                                        : factor.trend === "Volatile"
                                          ? "warning"
                                          : "destructive"
                                  }
                                >
                                  {factor.trend}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{factor.description}</p>
                            <div className="bg-primary/10 p-2 rounded text-xs">
                              <span className="font-medium">Recommendation:</span> {factor.recommendation}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Historical Trend Analysis</CardTitle>
                    <CardDescription>Pattern recognition from past sales data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center">
                      <LineChart className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Historical Trend Chart Placeholder</span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 mt-4">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Cyclical Patterns</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="space-y-3">
                            {[
                              {
                                pattern: "Seasonal Peaks",
                                description:
                                  "Sales consistently peak during October-November (festival season) and January-February (wedding season)",
                                confidence: "Very High",
                              },
                              {
                                pattern: "Monthly Cycle",
                                description:
                                  "First week of each month shows 15-20% higher sales compared to last week of previous month",
                                confidence: "High",
                              },
                              {
                                pattern: "Annual Growth",
                                description: "Year-over-year growth averaging 18-22% for the past 3 years",
                                confidence: "Medium",
                              },
                            ].map((item, index) => (
                              <div key={index} className="rounded-lg bg-muted/50 p-3">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-medium">{item.pattern}</h4>
                                  <Badge variant="outline">Confidence: {item.confidence}</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Anomaly Detection</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="space-y-3">
                            {[
                              {
                                anomaly: "Unexpected Surge",
                                description:
                                  "Pastel-colored ethnic wear saw 45% higher than predicted sales in March 2024",
                                cause: "Viral social media trend featuring similar designs",
                                status: "Monitored",
                              },
                              {
                                anomaly: "Category Decline",
                                description: "Formal men's wear experienced 12% lower sales than predicted in Q1 2024",
                                cause: "Shift towards business casual and remote work culture",
                                status: "Addressed",
                              },
                              {
                                anomaly: "Regional Variation",
                                description: "Northern regions showing 18% higher growth than southern regions",
                                cause: "Different seasonal patterns and local events",
                                status: "Monitored",
                              },
                            ].map((item, index) => (
                              <div key={index} className="rounded-lg bg-muted/50 p-3">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-medium">{item.anomaly}</h4>
                                  <Badge variant={item.status === "Addressed" ? "success" : "warning"}>
                                    {item.status}
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                                <p className="text-xs mt-1">
                                  <span className="font-medium">Cause:</span> {item.cause}
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="planning" className="pt-4">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 md:w-[300px]">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search products..." className="w-full pl-8" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter by Category
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export Plan
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Inventory Planning Recommendations</CardTitle>
                    <CardDescription>AI-generated inventory recommendations for the next 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Current Stock</TableHead>
                          <TableHead>Predicted Demand</TableHead>
                          <TableHead>Recommended Stock</TableHead>
                          <TableHead>Action</TableHead>
                          <TableHead>Priority</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Designer Lehenga",
                            category: "Traditional",
                            currentStock: 45,
                            predictedDemand: 75,
                            recommendedStock: 85,
                            action: "Restock +40",
                            priority: "High",
                            image:
                              "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                          {
                            name: "Formal Suit Set",
                            category: "Men's Wear",
                            currentStock: 12,
                            predictedDemand: 52,
                            recommendedStock: 60,
                            action: "Restock +48",
                            priority: "Critical",
                            image:
                              "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                          {
                            name: "Cotton Kurti Set",
                            category: "Women's Wear",
                            currentStock: 0,
                            predictedDemand: 47,
                            recommendedStock: 55,
                            action: "Restock +55",
                            priority: "Critical",
                            image:
                              "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                          {
                            name: "Silk Saree",
                            category: "Traditional",
                            currentStock: 18,
                            predictedDemand: 40,
                            recommendedStock: 45,
                            action: "Restock +27",
                            priority: "Medium",
                            image:
                              "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                          {
                            name: "Winter Jacket",
                            category: "Seasonal",
                            currentStock: 85,
                            predictedDemand: 15,
                            recommendedStock: 25,
                            action: "Reduce -60",
                            priority: "Medium",
                            image:
                              "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                        ].map((product, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 rounded-md">
                                  <AvatarImage src={product.image} alt={product.name} />
                                  <AvatarFallback className="rounded-md">{product.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{product.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.currentStock} units</TableCell>
                            <TableCell>{product.predictedDemand} units</TableCell>
                            <TableCell>{product.recommendedStock} units</TableCell>
                            <TableCell>
                              <Badge variant={product.action.includes("+") ? "default" : "destructive"}>
                                {product.action}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  product.priority === "Critical"
                                    ? "destructive"
                                    : product.priority === "High"
                                      ? "warning"
                                      : "outline"
                                }
                              >
                                {product.priority}
                              </Badge>
                            </TableCell>
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
                      <CardTitle>Optimal Order Schedule</CardTitle>
                      <CardDescription>Recommended ordering timeline</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            timeframe: "Immediate (0-7 days)",
                            products: [
                              { name: "Cotton Kurti Set", quantity: 55, priority: "Critical" },
                              { name: "Formal Suit Set", quantity: 48, priority: "Critical" },
                            ],
                            reason: "Out of stock or critically low inventory with high predicted demand",
                          },
                          {
                            timeframe: "Short-term (8-14 days)",
                            products: [
                              { name: "Designer Lehenga", quantity: 40, priority: "High" },
                              { name: "Silk Saree", quantity: 27, priority: "Medium" },
                            ],
                            reason: "Current stock sufficient for 2 weeks based on demand forecast",
                          },
                          {
                            timeframe: "Medium-term (15-30 days)",
                            products: [
                              { name: "Summer Dress", quantity: 35, priority: "Low" },
                              { name: "Casual T-shirt", quantity: 60, priority: "Low" },
                            ],
                            reason: "Adequate stock with steady demand, plan ahead for seasonal shift",
                          },
                        ].map((schedule, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">{schedule.timeframe}</h4>
                            <div className="space-y-2 mb-2">
                              {schedule.products.map((product, i) => (
                                <div key={i} className="flex items-center justify-between text-sm">
                                  <span>{product.name}</span>
                                  <div className="flex items-center gap-2">
                                    <span>{product.quantity} units</span>
                                    <Badge
                                      variant={
                                        product.priority === "Critical"
                                          ? "destructive"
                                          : product.priority === "High"
                                            ? "warning"
                                            : "outline"
                                      }
                                    >
                                      {product.priority}
                                    </Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground">{schedule.reason}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Inventory Optimization</CardTitle>
                      <CardDescription>Strategies to balance inventory and demand</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Excess Inventory Management</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Recommendations for products with excess inventory:
                          </p>
                          <ul className="text-sm space-y-2 mt-2">
                            <li className="flex items-start gap-2">
                              <span className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs mt-0.5">
                                1
                              </span>
                              <div>
                                <p className="font-medium">Winter Jacket (85 units)</p>
                                <p className="text-xs text-muted-foreground">
                                  Create bundle offers with complementary products or implement progressive discounting
                                  starting at 20%
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs mt-0.5">
                                2
                              </span>
                              <div>
                                <p className="font-medium">Casual Hoodie (65 units)</p>
                                <p className="text-xs text-muted-foreground">
                                  Reallocate to regions with higher demand or create special promotions for loyalty
                                  program members
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Just-in-Time Inventory</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Products suitable for just-in-time ordering:
                          </p>
                          <ul className="text-sm space-y-2 mt-2">
                            <li className="flex items-start gap-2">
                              <span className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mt-0.5">
                                1
                              </span>
                              <div>
                                <p className="font-medium">Cotton Kurti Set</p>
                                <p className="text-xs text-muted-foreground">
                                  Consistent demand with reliable supplier lead time of 5-7 days
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mt-0.5">
                                2
                              </span>
                              <div>
                                <p className="font-medium">Casual T-shirt</p>
                                <p className="text-xs text-muted-foreground">
                                  High-volume, predictable demand with multiple supplier options
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Safety Stock Recommendations</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Products requiring higher safety stock levels:
                          </p>
                          <ul className="text-sm space-y-2 mt-2">
                            <li className="flex items-start gap-2">
                              <span className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs mt-0.5">
                                1
                              </span>
                              <div>
                                <p className="font-medium">Designer Lehenga</p>
                                <p className="text-xs text-muted-foreground">
                                  High-value item with longer lead time and seasonal demand spikes
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs mt-0.5">
                                2
                              </span>
                              <div>
                                <p className="font-medium">Silk Saree</p>
                                <p className="text-xs text-muted-foreground">
                                  Premium product with supply chain variability and consistent demand
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Supplier Planning</CardTitle>
                    <CardDescription>Optimize supplier relationships and ordering</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Supplier</TableHead>
                          <TableHead>Products</TableHead>
                          <TableHead>Lead Time</TableHead>
                          <TableHead>Reliability</TableHead>
                          <TableHead>Order Value</TableHead>
                          <TableHead>Recommended Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Textile Masters",
                            products: ["Cotton Kurti Set", "Casual T-shirt"],
                            leadTime: "5-7 days",
                            reliability: "High",
                            orderValue: "₹2,85,000",
                            action: "Place order immediately",
                          },
                          {
                            name: "Fashion Fabrics",
                            products: ["Designer Lehenga", "Silk Saree"],
                            leadTime: "10-14 days",
                            reliability: "Medium",
                            orderValue: "₹3,45,000",
                            action: "Order with 5-day buffer",
                          },
                          {
                            name: "Trendy Tailors",
                            products: ["Formal Suit Set", "Casual Hoodie"],
                            leadTime: "7-10 days",
                            reliability: "High",
                            orderValue: "₹2,25,000",
                            action: "Place order immediately",
                          },
                          {
                            name: "Seasonal Styles",
                            products: ["Winter Jacket", "Summer Dress"],
                            leadTime: "12-15 days",
                            reliability: "Medium",
                            orderValue: "₹1,75,000",
                            action: "Negotiate expedited delivery",
                          },
                        ].map((supplier, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{supplier.name}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {supplier.products.map((product, i) => (
                                  <Badge key={i} variant="outline">
                                    {product}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>{supplier.leadTime}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  supplier.reliability === "High"
                                    ? "success"
                                    : supplier.reliability === "Medium"
                                      ? "warning"
                                      : "destructive"
                                }
                              >
                                {supplier.reliability}
                              </Badge>
                            </TableCell>
                            <TableCell>{supplier.orderValue}</TableCell>
                            <TableCell>{supplier.action}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
