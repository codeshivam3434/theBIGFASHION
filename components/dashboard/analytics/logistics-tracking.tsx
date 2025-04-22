"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Truck, Package, Clock, CheckCircle2, AlertTriangle, Search, Filter, Download, Map } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface LogisticsTrackingProps {
  dateRange?: { from: Date; to: Date }
}

export function LogisticsTracking({ dateRange }: LogisticsTrackingProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Logistics & Delivery Tracking</CardTitle>
          <CardDescription>Monitor shipments, deliveries, and logistics performance</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="shipments">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="shipments">Active Shipments</TabsTrigger>
              <TabsTrigger value="performance">Logistics Performance</TabsTrigger>
              <TabsTrigger value="returns">Returns Management</TabsTrigger>
            </TabsList>

            <TabsContent value="shipments" className="pt-4">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 md:w-[300px]">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search shipments..." className="w-full pl-8" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Shipments</CardTitle>
                      <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">245</div>
                      <p className="text-xs text-muted-foreground">Active shipments in transit</p>
                      <Progress value={65} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">On-Time Delivery</CardTitle>
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">92.5%</div>
                      <p className="text-xs text-muted-foreground">Last 30 days performance</p>
                      <Progress value={92} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Delayed Shipments</CardTitle>
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">Requiring attention</p>
                      <Progress value={15} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Avg. Delivery Time</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2.3 days</div>
                      <p className="text-xs text-muted-foreground">From dispatch to delivery</p>
                      <Progress value={75} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Shipments</CardTitle>
                    <CardDescription>Track current shipments and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Shipment ID</TableHead>
                          <TableHead>Retailer</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Estimated Delivery</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            id: "SHP-2458",
                            retailer: "Rajesh Textiles",
                            location: "Mumbai",
                            items: 24,
                            status: "In Transit",
                            estimatedDelivery: "May 25, 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            id: "SHP-2457",
                            retailer: "Sharma Fashions",
                            location: "Delhi",
                            items: 18,
                            status: "Out for Delivery",
                            estimatedDelivery: "May 24, 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            id: "SHP-2456",
                            retailer: "Patel Garments",
                            location: "Ahmedabad",
                            items: 32,
                            status: "Delayed",
                            estimatedDelivery: "May 26, 2024 (Delayed)",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            id: "SHP-2455",
                            retailer: "Singh Retailers",
                            location: "Jaipur",
                            items: 15,
                            status: "Processing",
                            estimatedDelivery: "May 27, 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            id: "SHP-2454",
                            retailer: "Kumar Enterprises",
                            location: "Bangalore",
                            items: 28,
                            status: "In Transit",
                            estimatedDelivery: "May 26, 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                        ].map((shipment, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{shipment.id}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={shipment.image} alt={shipment.retailer} />
                                  <AvatarFallback>{shipment.retailer.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span>{shipment.retailer}</span>
                              </div>
                            </TableCell>
                            <TableCell>{shipment.location}</TableCell>
                            <TableCell>{shipment.items} items</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  shipment.status === "Delayed"
                                    ? "destructive"
                                    : shipment.status === "In Transit"
                                      ? "secondary"
                                      : shipment.status === "Out for Delivery"
                                        ? "success"
                                        : "outline"
                                }
                              >
                                {shipment.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{shipment.estimatedDelivery}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline">
                                Track
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Shipments
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipment Tracking Map</CardTitle>
                      <CardDescription>Real-time location of active shipments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center border rounded-md">
                        <Map className="h-8 w-8 text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">Map Placeholder</span>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-green-500"></span>
                            <span className="text-sm">On Time (225)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                            <span className="text-sm">At Risk (8)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500"></span>
                            <span className="text-sm">Delayed (12)</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Issues</CardTitle>
                      <CardDescription>Shipments requiring attention</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            id: "SHP-2456",
                            retailer: "Patel Garments",
                            issue: "Weather Delay",
                            status: "Delayed",
                            impact: "1 day delay",
                            action: "Notified customer",
                          },
                          {
                            id: "SHP-2445",
                            retailer: "Mehta Fashions",
                            issue: "Address Incomplete",
                            status: "On Hold",
                            impact: "Delivery paused",
                            action: "Contacted customer",
                          },
                          {
                            id: "SHP-2432",
                            retailer: "Gupta Textiles",
                            issue: "Carrier Issue",
                            status: "Rerouted",
                            impact: "2 day delay",
                            action: "Changed carrier",
                          },
                        ].map((issue, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                            <div>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant={
                                    issue.status === "Delayed"
                                      ? "destructive"
                                      : issue.status === "On Hold"
                                        ? "warning"
                                        : "outline"
                                  }
                                >
                                  {issue.status}
                                </Badge>
                                <span className="font-medium">{issue.id}</span>
                              </div>
                              <p className="text-sm">{issue.retailer}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <p className="text-xs text-muted-foreground">Issue: {issue.issue}</p>
                                <p className="text-xs text-muted-foreground">Impact: {issue.impact}</p>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
                              Resolve
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Delivery Success Rate</CardTitle>
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">98.5%</div>
                      <p className="text-xs text-muted-foreground">Last 30 days performance</p>
                      <Progress value={98} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Avg. Transit Time</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1.8 days</div>
                      <p className="text-xs text-muted-foreground">Warehouse to destination</p>
                      <Progress value={85} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Shipping Cost</CardTitle>
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹125/kg</div>
                      <p className="text-xs text-muted-foreground">Average shipping cost</p>
                      <Progress value={65} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Carrier Performance</CardTitle>
                      <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4.2/5</div>
                      <p className="text-xs text-muted-foreground">Average carrier rating</p>
                      <Progress value={84} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Carrier Performance Comparison</CardTitle>
                    <CardDescription>Delivery metrics by logistics partner</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Carrier</TableHead>
                          <TableHead>On-Time Delivery</TableHead>
                          <TableHead>Avg. Transit Time</TableHead>
                          <TableHead>Cost per kg</TableHead>
                          <TableHead>Damage Rate</TableHead>
                          <TableHead>Overall Rating</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Express Logistics",
                            onTime: "96.5%",
                            transitTime: "1.5 days",
                            cost: "₹145/kg",
                            damageRate: "0.2%",
                            rating: "4.8/5",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            name: "Swift Carriers",
                            onTime: "94.2%",
                            transitTime: "1.8 days",
                            cost: "₹125/kg",
                            damageRate: "0.5%",
                            rating: "4.5/5",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            name: "Reliable Transport",
                            onTime: "92.8%",
                            transitTime: "2.0 days",
                            cost: "₹110/kg",
                            damageRate: "0.8%",
                            rating: "4.2/5",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            name: "Budget Movers",
                            onTime: "88.5%",
                            transitTime: "2.5 days",
                            cost: "₹95/kg",
                            damageRate: "1.2%",
                            rating: "3.8/5",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            name: "Premium Delivery",
                            onTime: "98.2%",
                            transitTime: "1.2 days",
                            cost: "₹175/kg",
                            damageRate: "0.1%",
                            rating: "4.9/5",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                        ].map((carrier, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={carrier.image} alt={carrier.name} />
                                  <AvatarFallback>{carrier.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{carrier.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{carrier.onTime}</TableCell>
                            <TableCell>{carrier.transitTime}</TableCell>
                            <TableCell>{carrier.cost}</TableCell>
                            <TableCell>{carrier.damageRate}</TableCell>
                            <TableCell>{carrier.rating}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Performance by Region</CardTitle>
                      <CardDescription>On-time delivery rates by location</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center border rounded-md">
                        <Map className="h-8 w-8 text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">Regional Map Placeholder</span>
                      </div>
                      <div className="space-y-4 mt-4">
                        {[
                          { region: "North India", onTime: "94.5%", avgTime: "1.9 days", issues: "Weather delays" },
                          { region: "South India", onTime: "96.2%", avgTime: "1.7 days", issues: "None significant" },
                          {
                            region: "East India",
                            onTime: "92.8%",
                            avgTime: "2.1 days",
                            issues: "Infrastructure challenges",
                          },
                          { region: "West India", onTime: "95.5%", avgTime: "1.8 days", issues: "Urban congestion" },
                        ].map((region, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{region.region}</p>
                              <div className="flex items-center gap-4 mt-1">
                                <p className="text-xs text-muted-foreground">On-time: {region.onTime}</p>
                                <p className="text-xs text-muted-foreground">Avg. Time: {region.avgTime}</p>
                              </div>
                            </div>
                            <Badge variant="outline">{region.issues}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Logistics Optimization</CardTitle>
                      <CardDescription>Recommendations to improve performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Route Optimization</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Optimizing delivery routes could reduce transit time by up to 15% and fuel costs by 12%.
                          </p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              Implement Route Optimization
                            </Button>
                          </div>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Carrier Allocation</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Reallocating 25% of shipments from Budget Movers to Swift Carriers would improve on-time
                            delivery by 2.8%.
                          </p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              Review Carrier Allocation
                            </Button>
                          </div>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Packaging Optimization</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Standardizing packaging sizes could reduce shipping costs by 8% and damage rates by 0.3%.
                          </p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              Explore Packaging Solutions
                            </Button>
                          </div>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Delivery Time Windows</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Implementing 2-hour delivery windows could improve first-attempt delivery success by 15%.
                          </p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              Set Up Time Windows
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="returns" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Return Rate</CardTitle>
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.2%</div>
                      <p className="text-xs text-muted-foreground">Of total shipments</p>
                      <Progress value={32} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Returns</CardTitle>
                      <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">18</div>
                      <p className="text-xs text-muted-foreground">Returns in process</p>
                      <Progress value={45} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Avg. Processing Time</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.5 days</div>
                      <p className="text-xs text-muted-foreground">Return receipt to resolution</p>
                      <Progress value={70} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Return Cost</CardTitle>
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹12,500</div>
                      <p className="text-xs text-muted-foreground">Average monthly cost</p>
                      <Progress value={50} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Returns</CardTitle>
                    <CardDescription>Currently processing return shipments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Return ID</TableHead>
                          <TableHead>Original Order</TableHead>
                          <TableHead>Retailer</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            id: "RTN-1245",
                            order: "ORD-5678",
                            retailer: "Rajesh Textiles",
                            items: "Designer Lehenga (2)",
                            reason: "Size Issue",
                            status: "In Transit",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            id: "RTN-1244",
                            order: "ORD-5665",
                            retailer: "Sharma Fashions",
                            items: "Formal Suit Set (1)",
                            reason: "Quality Issue",
                            status: "Received",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            id: "RTN-1243",
                            order: "ORD-5650",
                            retailer: "Patel Garments",
                            items: "Cotton Kurti Set (3)",
                            reason: "Wrong Item",
                            status: "Processing",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            id: "RTN-1242",
                            order: "ORD-5645",
                            retailer: "Singh Retailers",
                            items: "Silk Saree (1)",
                            reason: "Damaged",
                            status: "Inspecting",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            id: "RTN-1241",
                            order: "ORD-5632",
                            retailer: "Kumar Enterprises",
                            items: "Denim Jacket (2)",
                            reason: "Customer Changed Mind",
                            status: "Approved",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                        ].map((returnItem, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{returnItem.id}</TableCell>
                            <TableCell>{returnItem.order}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={returnItem.image} alt={returnItem.retailer} />
                                  <AvatarFallback>{returnItem.retailer.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span>{returnItem.retailer}</span>
                              </div>
                            </TableCell>
                            <TableCell>{returnItem.items}</TableCell>
                            <TableCell>{returnItem.reason}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  returnItem.status === "Approved"
                                    ? "success"
                                    : returnItem.status === "Inspecting" || returnItem.status === "Processing"
                                      ? "warning"
                                      : "secondary"
                                }
                              >
                                {returnItem.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline">
                                Process
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Returns
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Return Reasons Analysis</CardTitle>
                      <CardDescription>Understanding why products are returned</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            reason: "Size Issue",
                            percentage: "35%",
                            trend: "Stable",
                            recommendation: "Improve size guides and measurements",
                          },
                          {
                            reason: "Quality Issue",
                            percentage: "25%",
                            trend: "Decreasing",
                            recommendation: "Continue quality control improvements",
                          },
                          {
                            reason: "Wrong Item",
                            percentage: "15%",
                            trend: "Stable",
                            recommendation: "Enhance order verification process",
                          },
                          {
                            reason: "Damaged in Transit",
                            percentage: "12%",
                            trend: "Increasing",
                            recommendation: "Review packaging and handling procedures",
                          },
                          {
                            reason: "Customer Changed Mind",
                            percentage: "8%",
                            trend: "Stable",
                            recommendation: "Implement restocking fee for non-issue returns",
                          },
                          {
                            reason: "Late Delivery",
                            percentage: "5%",
                            trend: "Decreasing",
                            recommendation: "Continue delivery optimization efforts",
                          },
                        ].map((reason, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="w-full">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">{reason.reason}</span>
                                <span className="text-sm">{reason.percentage}</span>
                              </div>
                              <div className="relative h-2 w-full rounded-full bg-muted">
                                <div
                                  className="absolute h-full rounded-full bg-primary"
                                  style={{ width: reason.percentage }}
                                ></div>
                              </div>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-muted-foreground">Trend: {reason.trend}</span>
                                <span className="text-xs text-muted-foreground">{reason.recommendation}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Returns Management</CardTitle>
                      <CardDescription>Strategies to reduce returns and optimize processing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Return Rate Reduction</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Implementing detailed size guides and 360° product views could reduce size-related returns
                            by up to 20%.
                          </p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              Implement Size Guide
                            </Button>
                          </div>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Processing Optimization</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Centralizing returns processing could reduce handling time by 25% and improve inventory
                            recovery.
                          </p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              Explore Centralization
                            </Button>
                          </div>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Return Policy Adjustment</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Implementing a tiered return policy based on customer loyalty could reduce frivolous returns
                            by 15%.
                          </p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              Review Return Policy
                            </Button>
                          </div>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-4">
                          <h4 className="font-semibold">Quality Control</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Enhanced pre-shipment quality checks could reduce quality-related returns by up to 30%.
                          </p>
                          <div className="mt-2">
                            <Button size="sm" variant="outline">
                              Improve QC Process
                            </Button>
                          </div>
                        </div>
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
