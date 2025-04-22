"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertTriangle,
  Clock,
  TrendingDown,
  BarChart,
  ArrowRight,
  RefreshCw,
  Tag,
  Search,
  Filter,
  ArrowUpRight,
  Package,
  Truck,
  RotateCcw,
  Check,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DeadStockProtectionProps {
  dateRange: { from: Date; to: Date }
}

export function DeadStockProtection({ dateRange }: DeadStockProtectionProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Dead Stock Protection</CardTitle>
          <CardDescription>Identify and manage slow-moving inventory before it becomes dead stock</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="at-risk">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="at-risk">At-Risk Inventory</TabsTrigger>
              <TabsTrigger value="strategies">Clearance Strategies</TabsTrigger>
              <TabsTrigger value="reverse">Reverse Logistics</TabsTrigger>
            </TabsList>

            <TabsContent value="at-risk" className="pt-4">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 md:w-[300px]">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search products..." className="w-full pl-8" />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="mens">Men's Wear</SelectItem>
                        <SelectItem value="womens">Women's Wear</SelectItem>
                        <SelectItem value="traditional">Traditional</SelectItem>
                        <SelectItem value="seasonal">Seasonal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      More Filters
                    </Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Dead Stock Value</CardTitle>
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹3,45,210</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-red-500 font-medium inline-flex items-center">
                          <TrendingDown className="h-3 w-3 mr-1" /> -5.1%
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={45} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Dead Stock Items</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">18</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-red-500 font-medium inline-flex items-center">
                          <TrendingDown className="h-3 w-3 mr-1" /> -3 items
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={35} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">At-Risk Items</CardTitle>
                      <Clock className="h-4 w-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">32</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-amber-500 font-medium inline-flex items-center">
                          <TrendingDown className="h-3 w-3 mr-1" /> +8 items
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={65} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Dead Stock Days Limit</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">45 days</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingDown className="h-3 w-3 mr-1" /> -15 days
                        </span>{" "}
                        from previous setting
                      </p>
                      <Progress value={45} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>At-Risk Inventory</CardTitle>
                    <CardDescription>Products approaching dead stock status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Days in Stock</TableHead>
                          <TableHead>Risk Level</TableHead>
                          <TableHead>Value at Risk</TableHead>
                          <TableHead>Last Sale</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Winter Jacket",
                            category: "Seasonal",
                            daysInStock: 38,
                            riskLevel: "High",
                            valueAtRisk: "₹85,000",
                            lastSale: "25 days ago",
                            image:
                              "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                          {
                            name: "Casual Hoodie",
                            category: "Men's Wear",
                            daysInStock: 35,
                            riskLevel: "High",
                            valueAtRisk: "₹45,000",
                            lastSale: "22 days ago",
                            image:
                              "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                          {
                            name: "Lightweight Sweater",
                            category: "Seasonal",
                            daysInStock: 32,
                            riskLevel: "Medium",
                            valueAtRisk: "₹38,000",
                            lastSale: "18 days ago",
                            image:
                              "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                          {
                            name: "Formal Blazer",
                            category: "Men's Wear",
                            daysInStock: 28,
                            riskLevel: "Medium",
                            valueAtRisk: "₹65,000",
                            lastSale: "15 days ago",
                            image:
                              "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                          {
                            name: "Printed Scarf",
                            category: "Accessories",
                            daysInStock: 25,
                            riskLevel: "Low",
                            valueAtRisk: "₹12,000",
                            lastSale: "12 days ago",
                            image:
                              "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          },
                        ].map((product, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 rounded-md">
                                  <AvatarImage src={product.image || "/placeholder.svg"} alt={product.name} />
                                  <AvatarFallback className="rounded-md">{product.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{product.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Clock
                                  className={`h-4 w-4 ${
                                    product.daysInStock > 35
                                      ? "text-red-500"
                                      : product.daysInStock > 30
                                        ? "text-amber-500"
                                        : "text-yellow-500"
                                  }`}
                                />
                                <span>{product.daysInStock} days</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  product.riskLevel === "High"
                                    ? "destructive"
                                    : product.riskLevel === "Medium"
                                      ? "warning"
                                      : "outline"
                                }
                              >
                                {product.riskLevel}
                              </Badge>
                            </TableCell>
                            <TableCell>{product.valueAtRisk}</TableCell>
                            <TableCell>{product.lastSale}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline">
                                Take Action
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All At-Risk Items <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dead Stock Analysis</CardTitle>
                    <CardDescription>Understanding the causes of dead stock</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Dead Stock by Category</h3>
                        <div className="space-y-4">
                          {[
                            { category: "Seasonal", percentage: "45%", value: "₹1,55,345" },
                            { category: "Men's Wear", percentage: "25%", value: "₹86,303" },
                            { category: "Women's Wear", percentage: "15%", value: "₹51,782" },
                            { category: "Traditional", percentage: "10%", value: "₹34,521" },
                            { category: "Accessories", percentage: "5%", value: "₹17,260" },
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                              <div className="w-full">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-medium">{item.category}</span>
                                  <span className="text-sm">{item.percentage}</span>
                                </div>
                                <div className="relative h-2 w-full rounded-full bg-muted">
                                  <div
                                    className="absolute h-full rounded-full bg-primary"
                                    style={{ width: item.percentage }}
                                  ></div>
                                </div>
                                <div className="mt-1 text-xs text-muted-foreground text-right">{item.value}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Common Causes</h3>
                        <div className="space-y-4">
                          {[
                            {
                              cause: "Seasonal End",
                              percentage: "40%",
                              description: "Items from past seasons that didn't sell",
                            },
                            { cause: "Overstock", percentage: "25%", description: "Excessive inventory purchased" },
                            {
                              cause: "Trend Changes",
                              percentage: "20%",
                              description: "Fashion trends changed faster than expected",
                            },
                            {
                              cause: "Quality Issues",
                              percentage: "10%",
                              description: "Products with minor defects or issues",
                            },
                            {
                              cause: "Pricing Strategy",
                              percentage: "5%",
                              description: "Items priced too high for the market",
                            },
                          ].map((item, index) => (
                            <div key={index} className="rounded-lg border p-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium">{item.cause}</span>
                                <Badge variant="outline">{item.percentage}</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="strategies" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Clearance Sale</CardTitle>
                      <CardDescription>Discount-based strategy for quick inventory clearance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Strategy Overview</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Apply progressive discounts based on days in inventory:
                          </p>
                          <ul className="text-sm space-y-1 mt-2">
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                              30-35 days: 20% discount
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                              36-40 days: 30% discount
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-red-500"></span>
                              41+ days: 40-50% discount
                            </li>
                          </ul>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h4 className="font-semibold">Effectiveness</h4>
                          <div className="mt-2 space-y-2">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Clearance Rate</span>
                                <span className="text-sm font-medium">75%</span>
                              </div>
                              <Progress value={75} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Profit Retention</span>
                                <span className="text-sm font-medium">45%</span>
                              </div>
                              <Progress value={45} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Implementation Ease</span>
                                <span className="text-sm font-medium">90%</span>
                              </div>
                              <Progress value={90} className="h-1" />
                            </div>
                          </div>
                        </div>

                        <Button className="w-full">
                          <Tag className="mr-2 h-4 w-4" />
                          Apply to Selected Items
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Bundle Offers</CardTitle>
                      <CardDescription>Combine slow-moving items with popular products</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Strategy Overview</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Create attractive bundles combining at-risk items with best-sellers:
                          </p>
                          <ul className="text-sm space-y-1 mt-2">
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-green-500"></span>
                              "Complete Look" bundles
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-green-500"></span>
                              "Buy One Get One" offers
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-green-500"></span>
                              "Gift with Purchase" promotions
                            </li>
                          </ul>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h4 className="font-semibold">Effectiveness</h4>
                          <div className="mt-2 space-y-2">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Clearance Rate</span>
                                <span className="text-sm font-medium">65%</span>
                              </div>
                              <Progress value={65} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Profit Retention</span>
                                <span className="text-sm font-medium">70%</span>
                              </div>
                              <Progress value={70} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Implementation Ease</span>
                                <span className="text-sm font-medium">75%</span>
                              </div>
                              <Progress value={75} className="h-1" />
                            </div>
                          </div>
                        </div>

                        <Button className="w-full">
                          <Package className="mr-2 h-4 w-4" />
                          Create Bundle Offers
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Flash Sales</CardTitle>
                      <CardDescription>Limited-time offers to create urgency</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Strategy Overview</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Create time-limited promotions to drive quick sales:
                          </p>
                          <ul className="text-sm space-y-1 mt-2">
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                              24-hour flash sales
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                              Weekend special offers
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                              "Last chance" promotions
                            </li>
                          </ul>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h4 className="font-semibold">Effectiveness</h4>
                          <div className="mt-2 space-y-2">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Clearance Rate</span>
                                <span className="text-sm font-medium">85%</span>
                              </div>
                              <Progress value={85} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Profit Retention</span>
                                <span className="text-sm font-medium">40%</span>
                              </div>
                              <Progress value={40} className="h-1" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Implementation Ease</span>
                                <span className="text-sm font-medium">80%</span>
                              </div>
                              <Progress value={80} className="h-1" />
                            </div>
                          </div>
                        </div>

                        <Button className="w-full">
                          <Clock className="mr-2 h-4 w-4" />
                          Schedule Flash Sale
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Strategies</CardTitle>
                    <CardDescription>AI-powered recommendations based on your inventory</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product Category</TableHead>
                          <TableHead>Risk Level</TableHead>
                          <TableHead>Recommended Strategy</TableHead>
                          <TableHead>Expected Clearance</TableHead>
                          <TableHead>Profit Retention</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            category: "Winter Jackets",
                            riskLevel: "High",
                            strategy: "Flash Sale + Email Campaign",
                            clearance: "85%",
                            profit: "35%",
                          },
                          {
                            category: "Men's Casual Wear",
                            riskLevel: "Medium",
                            strategy: "Bundle with Accessories",
                            clearance: "70%",
                            profit: "65%",
                          },
                          {
                            category: "Women's Formal Wear",
                            riskLevel: "Low",
                            strategy: "Targeted Discounts",
                            clearance: "60%",
                            profit: "75%",
                          },
                          {
                            category: "Seasonal Accessories",
                            riskLevel: "High",
                            strategy: "Gift with Purchase",
                            clearance: "90%",
                            profit: "30%",
                          },
                        ].map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.category}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  item.riskLevel === "High"
                                    ? "destructive"
                                    : item.riskLevel === "Medium"
                                      ? "warning"
                                      : "outline"
                                }
                              >
                                {item.riskLevel}
                              </Badge>
                            </TableCell>
                            <TableCell>{item.strategy}</TableCell>
                            <TableCell>{item.clearance}</TableCell>
                            <TableCell>{item.profit}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline">
                                <ArrowUpRight className="mr-2 h-4 w-4" />
                                Apply
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reverse" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Return to Supplier</CardTitle>
                      <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹1,25,000</div>
                      <p className="text-xs text-muted-foreground">Potential recovery value from supplier returns</p>
                      <div className="mt-4">
                        <Button size="sm" className="w-full">
                          Manage Returns
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Recycle & Upcycle</CardTitle>
                      <RotateCcw className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹45,000</div>
                      <p className="text-xs text-muted-foreground">
                        Potential value from recycling and upcycling initiatives
                      </p>
                      <div className="mt-4">
                        <Button size="sm" className="w-full">
                          Explore Options
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Donation Value</CardTitle>
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹75,000</div>
                      <p className="text-xs text-muted-foreground">Tax benefits from charitable donations</p>
                      <div className="mt-4">
                        <Button size="sm" className="w-full">
                          Manage Donations
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Reverse Logistics Options</CardTitle>
                    <CardDescription>Alternative strategies for dead stock management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Strategy</TableHead>
                          <TableHead>Applicable Products</TableHead>
                          <TableHead>Recovery Value</TableHead>
                          <TableHead>Implementation Effort</TableHead>
                          <TableHead>Timeline</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            strategy: "Return to Supplier",
                            products: "Winter Collection, Seasonal Items",
                            value: "60-80% of cost",
                            effort: "Medium",
                            timeline: "2-4 weeks",
                          },
                          {
                            strategy: "Bulk Sale to Discounters",
                            products: "All Categories",
                            value: "30-40% of cost",
                            effort: "Low",
                            timeline: "1-2 weeks",
                          },
                          {
                            strategy: "Charitable Donation",
                            products: "Apparel, Accessories",
                            value: "Tax benefits",
                            effort: "Low",
                            timeline: "1 week",
                          },
                          {
                            strategy: "Recycle/Upcycle",
                            products: "Fabric Items, Raw Materials",
                            value: "20-30% of cost",
                            effort: "High",
                            timeline: "4-6 weeks",
                          },
                          {
                            strategy: "International Market Sale",
                            products: "Off-season Items",
                            value: "50-70% of cost",
                            effort: "High",
                            timeline: "6-8 weeks",
                          },
                        ].map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.strategy}</TableCell>
                            <TableCell>{item.products}</TableCell>
                            <TableCell>{item.value}</TableCell>
                            <TableCell>{item.effort}</TableCell>
                            <TableCell>{item.timeline}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline">
                                Explore
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Supplier Return Policies</CardTitle>
                      <CardDescription>Manage your supplier agreements for returns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            supplier: "Fashion Fabrics Ltd.",
                            policy: "60% refund within 45 days",
                            categories: "Fabrics, Raw Materials",
                            relationship: "Strong",
                          },
                          {
                            supplier: "Trendy Apparel Co.",
                            policy: "Full credit on next order within 30 days",
                            categories: "Ready-made Garments",
                            relationship: "Good",
                          },
                          {
                            supplier: "Seasonal Collections Inc.",
                            policy: "No returns, exchange only",
                            categories: "Seasonal Items",
                            relationship: "Average",
                          },
                          {
                            supplier: "Premium Textiles",
                            policy: "75% refund within 60 days",
                            categories: "Premium Fabrics",
                            relationship: "Excellent",
                          },
                        ].map((item, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{item.supplier}</h4>
                              <Badge variant="outline">{item.relationship}</Badge>
                            </div>
                            <p className="text-sm mt-1">{item.policy}</p>
                            <p className="text-xs text-muted-foreground mt-1">Categories: {item.categories}</p>
                            <Button variant="ghost" size="sm" className="mt-2 px-0">
                              View Agreement
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Sustainability Impact</CardTitle>
                      <CardDescription>Environmental benefits of reverse logistics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
                          <h4 className="font-semibold text-green-700 dark:text-green-300">Environmental Impact</h4>
                          <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                            Your reverse logistics efforts have saved:
                          </p>
                          <div className="grid grid-cols-2 gap-4 mt-3">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-700 dark:text-green-300">2.5 tons</div>
                              <p className="text-xs text-green-600 dark:text-green-400">
                                Fabric waste diverted from landfill
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-700 dark:text-green-300">4,500 kg</div>
                              <p className="text-xs text-green-600 dark:text-green-400">CO₂ emissions reduced</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h4 className="font-semibold">Sustainability Certifications</h4>
                          <div className="grid grid-cols-2 gap-4 mt-3">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="h-4 w-4 text-green-700" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">Green Business</p>
                                <p className="text-xs text-muted-foreground">Certified 2023</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-blue-700"
                                >
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                  <path d="M12 8v8" />
                                  <path d="M8 12h8" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Zero Waste</p>
                                <p className="text-xs text-muted-foreground">In Progress</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                          >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="M12 8v8" />
                            <path d="M8 12h8" />
                          </svg>
                          Improve Sustainability Score
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
