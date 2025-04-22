"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Map, Trophy, TrendingUp, TrendingDown, Users, Store, Search, Filter, Download, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface RetailerCompetitionProps {
  dateRange?: { from: Date; to: Date }
}

export function RetailerCompetition({ dateRange }: RetailerCompetitionProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Retailer Competition & Performance</CardTitle>
          <CardDescription>Track retailer performance and manage exclusive territories</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="leaderboard">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="leaderboard">Retailer Leaderboard</TabsTrigger>
              <TabsTrigger value="territories">Exclusive Territories</TabsTrigger>
              <TabsTrigger value="incentives">Performance Incentives</TabsTrigger>
            </TabsList>

            <TabsContent value="leaderboard" className="pt-4">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 md:w-[300px]">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search retailers..." className="w-full pl-8" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter by Region
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export Leaderboard
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Retailers</CardTitle>
                      <Store className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">245</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +12
                        </span>{" "}
                        from last quarter
                      </p>
                      <Progress value={75} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Avg. Performance Score</CardTitle>
                      <Trophy className="h-4 w-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">78.5</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +3.2
                        </span>{" "}
                        from last quarter
                      </p>
                      <Progress value={78} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Top Performers</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">32</div>
                      <p className="text-xs text-muted-foreground">Retailers with 90+ score</p>
                      <Progress value={32} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Underperformers</CardTitle>
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">18</div>
                      <p className="text-xs text-muted-foreground">Retailers below 60 score</p>
                      <Progress value={18} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Retailer Leaderboard</CardTitle>
                    <CardDescription>Performance ranking of all retailers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Rank</TableHead>
                          <TableHead>Retailer</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Sales Performance</TableHead>
                          <TableHead>Growth</TableHead>
                          <TableHead>Customer Satisfaction</TableHead>
                          <TableHead>Overall Score</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            rank: 1,
                            name: "Rajesh Textiles",
                            location: "Mumbai",
                            sales: "₹5,45,000",
                            growth: "+22.5%",
                            satisfaction: "4.8/5",
                            score: 95.2,
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            rank: 2,
                            name: "Sharma Fashions",
                            location: "Delhi",
                            sales: "₹4,78,000",
                            growth: "+18.3%",
                            satisfaction: "4.7/5",
                            score: 92.8,
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            rank: 3,
                            name: "Patel Garments",
                            location: "Ahmedabad",
                            sales: "₹3,92,000",
                            growth: "+15.7%",
                            satisfaction: "4.6/5",
                            score: 90.5,
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            rank: 4,
                            name: "Singh Retailers",
                            location: "Jaipur",
                            sales: "₹3,45,000",
                            growth: "+12.9%",
                            satisfaction: "4.5/5",
                            score: 88.2,
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            rank: 5,
                            name: "Kumar Enterprises",
                            location: "Bangalore",
                            sales: "₹3,12,000",
                            growth: "+10.5%",
                            satisfaction: "4.4/5",
                            score: 85.7,
                            image: "/placeholder.svg?height=40&width=40",
                          },
                        ].map((retailer, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="flex items-center justify-center">
                                <div
                                  className={`h-6 w-6 rounded-full flex items-center justify-center text-white text-xs ${
                                    retailer.rank === 1
                                      ? "bg-amber-500"
                                      : retailer.rank === 2
                                        ? "bg-gray-400"
                                        : retailer.rank === 3
                                          ? "bg-amber-700"
                                          : "bg-muted"
                                  }`}
                                >
                                  {retailer.rank}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={retailer.image} alt={retailer.name} />
                                  <AvatarFallback>{retailer.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{retailer.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{retailer.location}</TableCell>
                            <TableCell>{retailer.sales}</TableCell>
                            <TableCell className="text-green-500">{retailer.growth}</TableCell>
                            <TableCell>{retailer.satisfaction}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Progress value={retailer.score} className="h-2 w-16" />
                                <span>{retailer.score}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline">
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Retailers <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                      <CardDescription>How retailers are evaluated</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            metric: "Sales Volume",
                            weight: "40%",
                            description: "Total sales value in the last quarter",
                            topPerformer: "Rajesh Textiles (₹5,45,000)",
                          },
                          {
                            metric: "Growth Rate",
                            weight: "25%",
                            description: "Year-over-year sales growth percentage",
                            topPerformer: "Rajesh Textiles (+22.5%)",
                          },
                          {
                            metric: "Customer Satisfaction",
                            weight: "20%",
                            description: "Average customer rating (1-5 scale)",
                            topPerformer: "Rajesh Textiles (4.8/5)",
                          },
                          {
                            metric: "Inventory Turnover",
                            weight: "10%",
                            description: "How quickly inventory is sold and replaced",
                            topPerformer: "Sharma Fashions (4.2x)",
                          },
                          {
                            metric: "Return Rate",
                            weight: "5%",
                            description: "Percentage of sales returned by customers",
                            topPerformer: "Patel Garments (1.8%)",
                          },
                        ].map((metric, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">{metric.metric}</h4>
                              <Badge variant="outline">Weight: {metric.weight}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{metric.description}</p>
                            <div className="flex items-center gap-2">
                              <Trophy className="h-4 w-4 text-amber-500" />
                              <p className="text-sm">Top Performer: {metric.topPerformer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Improvement</CardTitle>
                      <CardDescription>Recommendations for underperforming retailers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            retailer: "Mehta Fashions",
                            score: 58.2,
                            issues: ["Low sales volume", "Poor inventory turnover", "High return rate"],
                            recommendations: [
                              "Staff training on product knowledge",
                              "Optimize inventory based on local demand",
                              "Implement quality check before delivery",
                            ],
                          },
                          {
                            retailer: "Gupta Textiles",
                            score: 62.5,
                            issues: ["Declining growth rate", "Below average customer satisfaction"],
                            recommendations: [
                              "Refresh store layout and merchandising",
                              "Customer service training program",
                              "Implement feedback collection system",
                            ],
                          },
                          {
                            retailer: "Verma Retailers",
                            score: 55.8,
                            issues: ["Consistently low sales", "Poor location utilization"],
                            recommendations: [
                              "Consider location change or renovation",
                              "Targeted local marketing campaign",
                              "Exclusive product offerings",
                            ],
                          },
                        ].map((retailer, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{retailer.retailer}</h4>
                              <Badge variant="destructive">Score: {retailer.score}</Badge>
                            </div>
                            <div className="mb-2">
                              <p className="text-sm font-medium">Issues:</p>
                              <ul className="text-sm text-muted-foreground ml-5 list-disc">
                                {retailer.issues.map((issue, i) => (
                                  <li key={i}>{issue}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Recommendations:</p>
                              <ul className="text-sm text-muted-foreground ml-5 list-disc">
                                {retailer.recommendations.map((rec, i) => (
                                  <li key={i}>{rec}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-3">
                              <Button size="sm" variant="outline" className="w-full">
                                Create Improvement Plan
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="territories" className="pt-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Exclusive Territory Management</CardTitle>
                    <CardDescription>Manage and optimize retailer territories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center border rounded-md">
                      <Map className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Territory Map Placeholder</span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Territories</CardTitle>
                          <Map className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">48</div>
                          <p className="text-xs text-muted-foreground">Defined exclusive areas</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Exclusive Retailers</CardTitle>
                          <Store className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">32</div>
                          <p className="text-xs text-muted-foreground">With territory rights</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Territory Coverage</CardTitle>
                          <Map className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">78%</div>
                          <p className="text-xs text-muted-foreground">Of target market areas</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Avg. Territory Value</CardTitle>
                          <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">₹12.5L</div>
                          <p className="text-xs text-muted-foreground">Quarterly sales potential</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Exclusive Territories</CardTitle>
                    <CardDescription>Current territory assignments and performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Territory</TableHead>
                          <TableHead>Retailer</TableHead>
                          <TableHead>Population</TableHead>
                          <TableHead>Market Potential</TableHead>
                          <TableHead>Current Performance</TableHead>
                          <TableHead>Exclusivity Until</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            territory: "Mumbai Central",
                            retailer: "Rajesh Textiles",
                            population: "1.2M",
                            potential: "₹8.5L/quarter",
                            performance: "92%",
                            until: "Dec 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            territory: "Delhi North",
                            retailer: "Sharma Fashions",
                            population: "950K",
                            potential: "₹7.2L/quarter",
                            performance: "88%",
                            until: "Nov 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            territory: "Ahmedabad City",
                            retailer: "Patel Garments",
                            population: "780K",
                            potential: "₹5.8L/quarter",
                            performance: "85%",
                            until: "Oct 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            territory: "Jaipur Central",
                            retailer: "Singh Retailers",
                            population: "650K",
                            potential: "₹4.5L/quarter",
                            performance: "78%",
                            until: "Sep 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            territory: "Bangalore East",
                            retailer: "Kumar Enterprises",
                            population: "820K",
                            potential: "₹6.2L/quarter",
                            performance: "82%",
                            until: "Dec 2024",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                        ].map((territory, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{territory.territory}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={territory.image} alt={territory.retailer} />
                                  <AvatarFallback>{territory.retailer.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span>{territory.retailer}</span>
                              </div>
                            </TableCell>
                            <TableCell>{territory.population}</TableCell>
                            <TableCell>{territory.potential}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Progress
                                  value={Number.parseInt(territory.performance)}
                                  className="h-2 w-16"
                                  style={{
                                    backgroundColor:
                                      Number.parseInt(territory.performance) > 85
                                        ? "var(--green-500)"
                                        : Number.parseInt(territory.performance) > 75
                                          ? "var(--amber-500)"
                                          : "var(--red-500)",
                                  }}
                                />
                                <span>{territory.performance}</span>
                              </div>
                            </TableCell>
                            <TableCell>{territory.until}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline">
                                Manage
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Territories <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Territory Optimization</CardTitle>
                      <CardDescription>Recommendations for territory adjustments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            territory: "Mumbai West",
                            currentRetailer: "Mehta Fashions",
                            issue: "Underperforming (58% of potential)",
                            recommendation: "Reassign to Rajesh Textiles or open for competition",
                            potential: "₹6.8L/quarter",
                            impact: "Potential 30% increase in territory sales",
                          },
                          {
                            territory: "Delhi South",
                            currentRetailer: "None (Open)",
                            issue: "Untapped exclusive territory",
                            recommendation: "Assign to Sharma Fashions based on proximity",
                            potential: "₹5.5L/quarter",
                            impact: "New revenue stream and market coverage",
                          },
                          {
                            territory: "Pune Central",
                            currentRetailer: "Verma Retailers",
                            issue: "Consistently underperforming (55%)",
                            recommendation: "Open for competition or reassign",
                            potential: "₹7.2L/quarter",
                            impact: "Potential 40% increase in territory sales",
                          },
                        ].map((territory, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{territory.territory}</h4>
                              <Badge variant="outline">Potential: {territory.potential}</Badge>
                            </div>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Current Retailer:</span> {territory.currentRetailer}
                            </p>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Issue:</span> {territory.issue}
                            </p>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Recommendation:</span> {territory.recommendation}
                            </p>
                            <p className="text-sm mb-3">
                              <span className="font-medium">Impact:</span> {territory.impact}
                            </p>
                            <Button size="sm" variant="outline" className="w-full">
                              Implement Change
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Territory Expansion</CardTitle>
                      <CardDescription>Opportunities for new exclusive territories</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            region: "Hyderabad",
                            areas: ["Hyderabad Central", "Hyderabad North", "Hyderabad East"],
                            population: "2.5M combined",
                            potential: "₹15.8L/quarter combined",
                            strategy: "Divide into 3 territories with exclusive rights",
                            timeline: "Q3 2024",
                          },
                          {
                            region: "Kolkata",
                            areas: ["Kolkata Central", "Kolkata South"],
                            population: "1.8M combined",
                            potential: "₹12.5L/quarter combined",
                            strategy: "Identify top performers from nearby regions",
                            timeline: "Q4 2024",
                          },
                          {
                            region: "Chennai",
                            areas: ["Chennai Central", "Chennai North", "Chennai West"],
                            population: "2.2M combined",
                            potential: "₹14.2L/quarter combined",
                            strategy: "Open application process for existing retailers",
                            timeline: "Q1 2025",
                          },
                        ].map((expansion, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{expansion.region} Expansion</h4>
                              <Badge variant="outline">Timeline: {expansion.timeline}</Badge>
                            </div>
                            <div className="mb-2">
                              <p className="text-sm font-medium">Potential Territories:</p>
                              <ul className="text-sm text-muted-foreground ml-5 list-disc">
                                {expansion.areas.map((area, i) => (
                                  <li key={i}>{area}</li>
                                ))}
                              </ul>
                            </div>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Population:</span> {expansion.population}
                            </p>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Market Potential:</span> {expansion.potential}
                            </p>
                            <p className="text-sm mb-3">
                              <span className="font-medium">Strategy:</span> {expansion.strategy}
                            </p>
                            <Button size="sm" variant="outline" className="w-full">
                              Develop Expansion Plan
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="incentives" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Incentives</CardTitle>
                      <Trophy className="h-4 w-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">Current incentive programs</p>
                      <Progress value={80} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Incentive Budget</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹12.5L</div>
                      <p className="text-xs text-muted-foreground">Quarterly allocation</p>
                      <Progress value={65} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Participating Retailers</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">185</div>
                      <p className="text-xs text-muted-foreground">Out of 245 total retailers</p>
                      <Progress value={75} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">ROI on Incentives</CardTitle>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.2x</div>
                      <p className="text-xs text-muted-foreground">Return on incentive investment</p>
                      <Progress value={85} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Incentive Programs</CardTitle>
                    <CardDescription>Current performance rewards and competitions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Program</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Eligibility</TableHead>
                          <TableHead>Reward</TableHead>
                          <TableHead>Timeline</TableHead>
                          <TableHead>Participants</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Sales Champion",
                            type: "Competition",
                            eligibility: "All Retailers",
                            reward: "₹1,00,000 + Trophy",
                            timeline: "Q2 2024",
                            participants: "245",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            name: "Growth Accelerator",
                            type: "Tiered Rewards",
                            eligibility: "All Retailers",
                            reward: "Up to 2% additional margin",
                            timeline: "Ongoing",
                            participants: "185",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            name: "Premium Partner",
                            type: "Status Program",
                            eligibility: "90+ Performance Score",
                            reward: "Priority stock, 3% margin boost",
                            timeline: "Annual",
                            participants: "32",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            name: "Category Domination",
                            type: "Competition",
                            eligibility: "All Retailers",
                            reward: "₹50,000 per category",
                            timeline: "Q2 2024",
                            participants: "178",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                          {
                            name: "Customer Excellence",
                            type: "Recognition",
                            eligibility: "4.5+ Customer Rating",
                            reward: "Digital badge, marketing support",
                            timeline: "Quarterly",
                            participants: "68",
                            image: "/placeholder.svg?height=40&width=40",
                          },
                        ].map((program, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{program.name}</TableCell>
                            <TableCell>{program.type}</TableCell>
                            <TableCell>{program.eligibility}</TableCell>
                            <TableCell>{program.reward}</TableCell>
                            <TableCell>{program.timeline}</TableCell>
                            <TableCell>{program.participants}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline">
                                Manage
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Programs <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Incentive Performance</CardTitle>
                      <CardDescription>Impact of incentive programs on retailer performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            program: "Sales Champion",
                            participation: "98%",
                            salesLift: "+18.5%",
                            roi: "3.8x",
                            feedback: "Highly motivating, creates healthy competition",
                          },
                          {
                            program: "Growth Accelerator",
                            participation: "75%",
                            salesLift: "+12.2%",
                            roi: "3.2x",
                            feedback: "Clear targets, progressive rewards appreciated",
                          },
                          {
                            program: "Premium Partner",
                            participation: "13%",
                            salesLift: "+22.5%",
                            roi: "4.5x",
                            feedback: "Exclusive benefits drive performance",
                          },
                          {
                            program: "Category Domination",
                            participation: "72%",
                            salesLift: "+15.8%",
                            roi: "3.1x",
                            feedback: "Focuses attention on specific categories",
                          },
                        ].map((program, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{program.program}</h4>
                              <Badge variant="outline">ROI: {program.roi}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                              <div>
                                <p className="text-xs text-muted-foreground">Participation</p>
                                <p className="text-sm font-medium">{program.participation}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Sales Lift</p>
                                <p className="text-sm font-medium text-green-500">{program.salesLift}</p>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              <span className="font-medium">Feedback:</span> {program.feedback}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>New Incentive Ideas</CardTitle>
                      <CardDescription>Proposed programs to drive retailer performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Inventory Efficiency",
                            type: "Reward Program",
                            description: "Rewards for maintaining optimal inventory levels and turnover",
                            reward: "Up to 1.5% additional margin",
                            expectedImpact: "15% improvement in inventory efficiency",
                            timeline: "Launch Q3 2024",
                          },
                          {
                            name: "Digital Excellence",
                            type: "Recognition + Reward",
                            description: "Rewards for digital adoption and online presence",
                            reward: "Digital marketing support + ₹25,000",
                            expectedImpact: "30% increase in digital engagement",
                            timeline: "Launch Q3 2024",
                          },
                          {
                            name: "Exclusive Collection Challenge",
                            type: "Competition",
                            description: "Competition for best performance selling exclusive collections",
                            reward: "Early access to new collections + ₹50,000",
                            expectedImpact: "25% increase in exclusive collection sales",
                            timeline: "Launch Q4 2024",
                          },
                        ].map((idea, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{idea.name}</h4>
                              <Badge variant="outline">{idea.type}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{idea.description}</p>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Reward:</span> {idea.reward}
                            </p>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Expected Impact:</span> {idea.expectedImpact}
                            </p>
                            <p className="text-sm mb-3">
                              <span className="font-medium">Timeline:</span> {idea.timeline}
                            </p>
                            <Button size="sm" variant="outline" className="w-full">
                              Develop Program
                            </Button>
                          </div>
                        ))}
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
