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
  AlertTriangle,
  Eye,
  ShoppingBag,
  Map,
  Search,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface MarketIntelligenceProps {
  dateRange: { from: Date; to: Date }
}

export function MarketIntelligence({ dateRange }: MarketIntelligenceProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Market Intelligence</CardTitle>
          <CardDescription>
            Track competitor pricing, market trends, and exclusive product opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="competitors">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
              <TabsTrigger value="trends">Market Trends</TabsTrigger>
              <TabsTrigger value="exclusives">Exclusive Products</TabsTrigger>
            </TabsList>

            <TabsContent value="competitors" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Price Competitiveness</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">82%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +5.2%
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={82} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Product Range</CardTitle>
                      <PieChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">68%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-red-500 font-medium inline-flex items-center">
                          <TrendingDown className="h-3 w-3 mr-1" /> -3.1%
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={68} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Market Share</CardTitle>
                      <LineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +2.5%
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={24} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Customer Sentiment</CardTitle>
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4.2/5</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium inline-flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" /> +0.3
                        </span>{" "}
                        from last month
                      </p>
                      <Progress value={84} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Competitor Price Comparison</CardTitle>
                    <CardDescription>How your prices compare to major competitors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          category: "Men's Formal Wear",
                          yourPrice: "₹2,499",
                          competitors: [
                            { name: "Competitor A", price: "₹2,799", difference: "+12%" },
                            { name: "Competitor B", price: "₹2,399", difference: "-4%" },
                            { name: "Competitor C", price: "₹2,649", difference: "+6%" },
                          ],
                          recommendation: "Your pricing is competitive. Consider slight increase.",
                        },
                        {
                          category: "Women's Ethnic Wear",
                          yourPrice: "₹3,299",
                          competitors: [
                            { name: "Competitor A", price: "₹2,999", difference: "-9%" },
                            { name: "Competitor B", price: "₹3,499", difference: "+6%" },
                            { name: "Competitor C", price: "₹3,199", difference: "-3%" },
                          ],
                          recommendation: "Your pricing is higher than average. Consider promotions.",
                        },
                        {
                          category: "Casual T-shirts",
                          yourPrice: "₹599",
                          competitors: [
                            { name: "Competitor A", price: "₹649", difference: "+8%" },
                            { name: "Competitor B", price: "₹699", difference: "+17%" },
                            { name: "Competitor C", price: "₹549", difference: "-8%" },
                          ],
                          recommendation: "Your pricing is competitive. Maintain current strategy.",
                        },
                      ].map((item, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{item.category}</h4>
                            <Badge variant="outline">Your Price: {item.yourPrice}</Badge>
                          </div>
                          <div className="space-y-2">
                            {item.competitors.map((competitor, i) => (
                              <div key={i} className="flex items-center justify-between text-sm">
                                <span>{competitor.name}</span>
                                <div className="flex items-center">
                                  <span className="mr-2">{competitor.price}</span>
                                  <Badge
                                    variant={competitor.difference.startsWith("+") ? "destructive" : "success"}
                                    className="text-xs"
                                  >
                                    {competitor.difference}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 text-xs bg-primary/10 p-2 rounded">
                            <AlertTriangle className="h-3 w-3 inline-block mr-1 text-primary" />
                            <span>{item.recommendation}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Color Trends</CardTitle>
                      <CardDescription>Popular colors this season</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { color: "Pastel Pink", hex: "#FFD1DC", growth: "+28%" },
                          { color: "Sage Green", hex: "#9CAF88", growth: "+24%" },
                          { color: "Lavender", hex: "#E6E6FA", growth: "+22%" },
                          { color: "Terracotta", hex: "#E2725B", growth: "+18%" },
                          { color: "Navy Blue", hex: "#000080", growth: "+15%" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-full" style={{ backgroundColor: item.hex }}></div>
                              <span className="text-sm">{item.color}</span>
                            </div>
                            <Badge variant="outline" className="text-green-500">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {item.growth}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Style Trends</CardTitle>
                      <CardDescription>Emerging styles and patterns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { style: "Oversized Fits", category: "Casual Wear", growth: "+32%" },
                          { style: "Sustainable Fashion", category: "All Categories", growth: "+29%" },
                          { style: "Minimalist Designs", category: "Formal Wear", growth: "+25%" },
                          { style: "Retro Patterns", category: "Casual Wear", growth: "+22%" },
                          { style: "Fusion Ethnic", category: "Traditional", growth: "+20%" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">{item.style}</p>
                              <p className="text-xs text-muted-foreground">{item.category}</p>
                            </div>
                            <Badge variant="outline" className="text-green-500">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {item.growth}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Seasonal Forecast</CardTitle>
                      <CardDescription>Upcoming seasonal trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { season: "Summer 2024", trend: "Breathable Fabrics", confidence: "92%" },
                          { season: "Monsoon 2024", trend: "Water-resistant Materials", confidence: "88%" },
                          { season: "Festive 2024", trend: "Metallic Accents", confidence: "85%" },
                          { season: "Winter 2024", trend: "Layered Looks", confidence: "82%" },
                          { season: "Spring 2025", trend: "Floral Patterns", confidence: "78%" },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">{item.season}</p>
                              <p className="text-xs text-muted-foreground">{item.trend}</p>
                            </div>
                            <Badge variant="secondary">{item.confidence}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Regional Trend Variations</CardTitle>
                    <CardDescription>How trends vary across different regions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        {
                          region: "North India",
                          icon: <Map className="h-4 w-4 text-primary" />,
                          trends: [
                            { category: "Traditional", trend: "Embroidered Kurtas", growth: "+24%" },
                            { category: "Casual", trend: "Linen Shirts", growth: "+18%" },
                            { category: "Formal", trend: "Slim Fit Suits", growth: "+15%" },
                          ],
                        },
                        {
                          region: "South India",
                          icon: <Map className="h-4 w-4 text-primary" />,
                          trends: [
                            { category: "Traditional", trend: "Silk Sarees", growth: "+28%" },
                            { category: "Casual", trend: "Cotton Comfort", growth: "+22%" },
                            { category: "Formal", trend: "Light Fabrics", growth: "+16%" },
                          ],
                        },
                        {
                          region: "East India",
                          icon: <Map className="h-4 w-4 text-primary" />,
                          trends: [
                            { category: "Traditional", trend: "Handloom Textiles", growth: "+26%" },
                            { category: "Casual", trend: "Ethnic Prints", growth: "+20%" },
                            { category: "Formal", trend: "Classic Cuts", growth: "+14%" },
                          ],
                        },
                        {
                          region: "West India",
                          icon: <Map className="h-4 w-4 text-primary" />,
                          trends: [
                            { category: "Traditional", trend: "Bandhani Patterns", growth: "+25%" },
                            { category: "Casual", trend: "Urban Streetwear", growth: "+23%" },
                            { category: "Formal", trend: "Business Casual", growth: "+17%" },
                          ],
                        },
                      ].map((region, index) => (
                        <Card key={index} className="border-none shadow-none">
                          <CardHeader className="px-2 py-3">
                            <div className="flex items-center gap-2">
                              {region.icon}
                              <CardTitle className="text-base">{region.region}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="px-2 py-0">
                            <div className="space-y-2">
                              {region.trends.map((trend, i) => (
                                <div key={i} className="flex items-center justify-between text-sm">
                                  <div>
                                    <span className="font-medium">{trend.category}:</span>
                                    <span className="ml-1">{trend.trend}</span>
                                  </div>
                                  <Badge variant="outline" className="text-green-500">
                                    {trend.growth}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="exclusives" className="pt-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Exclusive Product Opportunities</CardTitle>
                    <CardDescription>Products with low market saturation and high demand</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          name: "Sustainable Denim Collection",
                          category: "Men's & Women's Wear",
                          saturation: "Low (28%)",
                          demand: "High (76%)",
                          opportunity: "Very High",
                          description: "Eco-friendly denim made from recycled materials and sustainable processes",
                          image:
                            "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Customizable Ethnic Wear",
                          category: "Traditional",
                          saturation: "Very Low (15%)",
                          demand: "High (72%)",
                          opportunity: "Very High",
                          description: "Traditional wear with customizable elements like embroidery and accessories",
                          image:
                            "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Athleisure Formal Hybrid",
                          category: "Formal Wear",
                          saturation: "Very Low (12%)",
                          demand: "Medium (58%)",
                          opportunity: "High",
                          description: "Formal wear with athletic comfort features for the modern professional",
                          image:
                            "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Size-Inclusive Premium Collection",
                          category: "All Categories",
                          saturation: "Low (25%)",
                          demand: "High (68%)",
                          opportunity: "High",
                          description: "Premium fashion available in a wide range of sizes with consistent styling",
                          image:
                            "https://images.unsplash.com/photo-1593476087123-36d1de271411?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Tech-Integrated Accessories",
                          category: "Accessories",
                          saturation: "Low (22%)",
                          demand: "Medium (55%)",
                          opportunity: "Medium",
                          description:
                            "Fashion accessories with integrated tech features like charging or connectivity",
                          image:
                            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                        {
                          name: "Heritage Craft Revival",
                          category: "Traditional",
                          saturation: "Medium (35%)",
                          demand: "Medium (52%)",
                          opportunity: "Medium",
                          description: "Modern fashion incorporating traditional crafts and techniques",
                          image:
                            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        },
                      ].map((product, index) => (
                        <Card key={index} className="overflow-hidden">
                          <div className="h-48 overflow-hidden">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline">{product.category}</Badge>
                              <Badge
                                variant={
                                  product.opportunity === "Very High"
                                    ? "default"
                                    : product.opportunity === "High"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {product.opportunity}
                              </Badge>
                            </div>
                            <h3 className="font-semibold">{product.name}</h3>
                            <div className="flex justify-between mt-2 text-xs">
                              <span>Saturation: {product.saturation}</span>
                              <span>Demand: {product.demand}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">{product.description}</p>
                            <Button variant="outline" size="sm" className="w-full mt-3">
                              <Search className="mr-2 h-3 w-3" />
                              Explore Opportunity
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Market Gap Analysis</CardTitle>
                    <CardDescription>Identifying underserved market segments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          segment: "Professional Women 30-45",
                          gap: "Comfortable formal wear with pockets",
                          competition: "Low",
                          potential: "High",
                          recommendation:
                            "Develop a line of professional wear with functional pockets and comfortable fabrics",
                        },
                        {
                          segment: "Gen Z Traditional Wear",
                          gap: "Modern takes on traditional designs",
                          competition: "Medium",
                          potential: "Very High",
                          recommendation:
                            "Create fusion ethnic wear that appeals to younger customers while respecting traditions",
                        },
                        {
                          segment: "Sustainable Fashion Enthusiasts",
                          gap: "Transparent supply chain products",
                          competition: "Low",
                          potential: "High",
                          recommendation:
                            "Launch a collection with QR codes that show the complete journey from raw material to finished product",
                        },
                        {
                          segment: "Plus Size Premium Market",
                          gap: "High-end fashion in extended sizes",
                          competition: "Very Low",
                          potential: "High",
                          recommendation:
                            "Extend your premium collections to include a wider size range without compromising on design",
                        },
                      ].map((item, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{item.segment}</h4>
                            <div className="flex gap-2">
                              <Badge variant="outline">Competition: {item.competition}</Badge>
                              <Badge variant="secondary">Potential: {item.potential}</Badge>
                            </div>
                          </div>
                          <p className="text-sm mb-2">
                            <span className="font-medium">Gap:</span> {item.gap}
                          </p>
                          <div className="bg-primary/10 p-2 rounded text-xs">
                            <ShoppingBag className="h-3 w-3 inline-block mr-1 text-primary" />
                            <span>{item.recommendation}</span>
                          </div>
                        </div>
                      ))}
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
