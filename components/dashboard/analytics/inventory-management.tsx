"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  RefreshCw,
  Clock,
  XCircle,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { InventoryLevelChart } from "@/components/dashboard/analytics/charts/inventory-level-chart"
import { InventoryTurnoverChart } from "@/components/dashboard/analytics/charts/inventory-turnover-chart"
import { DeadStockAnalysisChart } from "@/components/dashboard/analytics/charts/dead-stock-analysis-chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function InventoryManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search inventory..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
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
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="in-stock">In Stock</SelectItem>
              <SelectItem value="low-stock">Low Stock</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              <SelectItem value="dead-stock">Dead Stock</SelectItem>
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
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,12,45,780</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 font-medium inline-flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" /> -2.3%
              </span>{" "}
              from last month
            </p>
            <Progress value={45} className="h-1 mt-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-500 font-medium inline-flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +8.5%
              </span>{" "}
              from last week
            </p>
            <Progress value={65} className="h-1 mt-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dead Stock Items</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 font-medium inline-flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +12.5%
              </span>{" "}
              from last month
            </p>
            <Progress value={75} className="h-1 mt-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Turnover</CardTitle>
            <RefreshCw className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2x</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium inline-flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +0.3x
              </span>{" "}
              from last quarter
            </p>
            <Progress value={55} className="h-1 mt-3" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Inventory Levels</CardTitle>
            <CardDescription>Stock levels by category over time</CardDescription>
          </CardHeader>
          <CardContent>
            <InventoryLevelChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Inventory Turnover</CardTitle>
            <CardDescription>How quickly products are selling</CardDescription>
          </CardHeader>
          <CardContent>
            <InventoryTurnoverChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Status</CardTitle>
          <CardDescription>Current stock levels and alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Reorder Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Days in Stock</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Designer Lehenga",
                  category: "Traditional",
                  currentStock: 45,
                  reorderLevel: 20,
                  status: "in-stock",
                  daysInStock: 15,
                  image:
                    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Formal Suit Set",
                  category: "Men's Wear",
                  currentStock: 12,
                  reorderLevel: 15,
                  status: "low-stock",
                  daysInStock: 28,
                  image:
                    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Cotton Kurti Set",
                  category: "Women's Wear",
                  currentStock: 0,
                  reorderLevel: 25,
                  status: "out-of-stock",
                  daysInStock: 0,
                  image:
                    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Winter Jacket",
                  category: "Seasonal",
                  currentStock: 85,
                  reorderLevel: 30,
                  status: "dead-stock",
                  daysInStock: 120,
                  image:
                    "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Silk Saree",
                  category: "Traditional",
                  currentStock: 18,
                  reorderLevel: 20,
                  status: "low-stock",
                  daysInStock: 45,
                  image:
                    "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  <TableCell>{product.reorderLevel} units</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        product.status === "in-stock"
                          ? "success"
                          : product.status === "low-stock"
                            ? "warning"
                            : product.status === "out-of-stock"
                              ? "destructive"
                              : "secondary"
                      }
                    >
                      {product.status === "in-stock"
                        ? "In Stock"
                        : product.status === "low-stock"
                          ? "Low Stock"
                          : product.status === "out-of-stock"
                            ? "Out of Stock"
                            : "Dead Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock
                        className={`h-4 w-4 ${
                          product.daysInStock > 90
                            ? "text-red-500"
                            : product.daysInStock > 60
                              ? "text-amber-500"
                              : "text-green-500"
                        }`}
                      />
                      <span>{product.daysInStock} days</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {product.status === "low-stock" || product.status === "out-of-stock" ? (
                      <Button size="sm" variant="outline">
                        Reorder
                      </Button>
                    ) : product.status === "dead-stock" ? (
                      <Button size="sm" variant="outline">
                        Clearance
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Export Inventory</Button>
          <Button>Manage Inventory</Button>
        </CardFooter>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Dead Stock Analysis</CardTitle>
            <CardDescription>Products with low turnover rate</CardDescription>
          </CardHeader>
          <CardContent>
            <DeadStockAnalysisChart />
            <div className="space-y-4 mt-4">
              <h3 className="text-sm font-medium">Recommended Actions</h3>
              <div className="space-y-3">
                {[
                  {
                    product: "Winter Jacket",
                    action: "Clearance Sale",
                    discount: "40% off",
                    reason: "Seasonal item with 120 days in stock",
                    image:
                      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    product: "Casual Hoodie",
                    action: "Bundle Offer",
                    discount: "Buy 1 Get 1 Free",
                    reason: "Low demand, 95 days in stock",
                    image:
                      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    product: "Lightweight Sweater",
                    action: "Return to Supplier",
                    discount: "Exchange for trending items",
                    reason: "Out of season, 85 days in stock",
                    image:
                      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                    <Avatar className="h-10 w-10 rounded-md">
                      <AvatarImage src={item.image} alt={item.product} />
                      <AvatarFallback className="rounded-md">{item.product.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{item.product}</p>
                        <Badge variant="outline">{item.action}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.reason}</p>
                      <p className="text-xs font-medium text-green-600">{item.discount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Predictive Restocking</CardTitle>
            <CardDescription>AI-powered inventory recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Restock Recommendations</h3>
              <div className="space-y-3">
                {[
                  {
                    product: "Formal Suit Set",
                    currentStock: 12,
                    recommendedStock: 30,
                    reason: "High demand, approaching wedding season",
                    urgency: "high",
                    image:
                      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    product: "Cotton Kurti Set",
                    currentStock: 0,
                    recommendedStock: 50,
                    reason: "Out of stock, consistent seller",
                    urgency: "critical",
                    image:
                      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    product: "Silk Saree",
                    currentStock: 18,
                    recommendedStock: 35,
                    reason: "Approaching festival season",
                    urgency: "medium",
                    image:
                      "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                    <Avatar className="h-10 w-10 rounded-md">
                      <AvatarImage src={item.image} alt={item.product} />
                      <AvatarFallback className="rounded-md">{item.product.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{item.product}</p>
                        <Badge
                          variant={
                            item.urgency === "critical"
                              ? "destructive"
                              : item.urgency === "high"
                                ? "warning"
                                : "default"
                          }
                        >
                          {item.urgency.charAt(0).toUpperCase() + item.urgency.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.reason}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs">
                          Current: <span className="font-medium">{item.currentStock} units</span>
                        </p>
                        <p className="text-xs">
                          Recommended: <span className="font-medium">{item.recommendedStock} units</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-medium mt-6">Seasonal Forecasting</h3>
              <div className="space-y-3">
                {[
                  {
                    season: "Winter Collection",
                    timeframe: "Order by August",
                    recommendation: "Focus on premium wool and cashmere items",
                    forecast: "20% increase from last year",
                  },
                  {
                    season: "Wedding Season",
                    timeframe: "Order by September",
                    recommendation: "Increase designer lehengas and sherwanis",
                    forecast: "35% projected growth in category",
                  },
                  {
                    season: "Festival Collection",
                    timeframe: "Order by July",
                    recommendation: "Traditional wear with modern designs",
                    forecast: "High demand expected in October-November",
                  },
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium">{item.season}</p>
                      <Badge variant="outline">{item.timeframe}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.recommendation}</p>
                    <p className="text-xs text-green-600 mt-1">{item.forecast}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
