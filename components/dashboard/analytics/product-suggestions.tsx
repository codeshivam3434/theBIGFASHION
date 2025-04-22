"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, TrendingUp, Zap } from "lucide-react"

interface ProductSuggestionsProps {
  dateRange: { from: Date; to: Date }
}

export function ProductSuggestions({ dateRange }: ProductSuggestionsProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Product Suggestions & Cross-Selling</CardTitle>
          <CardDescription>AI-powered recommendations to boost sales and customer satisfaction</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="trending">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trending">Trending Products</TabsTrigger>
              <TabsTrigger value="combos">Combo Offers</TabsTrigger>
              <TabsTrigger value="upsell">Upsell Opportunities</TabsTrigger>
            </TabsList>

            <TabsContent value="trending" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Pastel Summer Collection",
                    category: "Women's Wear",
                    trend: "Rising 32%",
                    description: "Lightweight pastel-colored summer dresses trending on social media",
                    image:
                      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    name: "Sustainable Denim",
                    category: "Men's Wear",
                    trend: "Rising 28%",
                    description: "Eco-friendly denim with recycled materials gaining popularity",
                    image:
                      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    name: "Fusion Ethnic Wear",
                    category: "Traditional",
                    trend: "Rising 24%",
                    description: "Modern takes on traditional designs for younger customers",
                    image:
                      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    name: "Oversized Shirts",
                    category: "Unisex",
                    trend: "Rising 22%",
                    description: "Comfortable oversized fits trending across age groups",
                    image:
                      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    name: "Embroidered Accessories",
                    category: "Accessories",
                    trend: "Rising 18%",
                    description: "Hand-embroidered bags and accessories gaining traction",
                    image:
                      "https://images.unsplash.com/photo-1590739225287-bd31519780c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    name: "Linen Formal Wear",
                    category: "Men's Wear",
                    trend: "Rising 15%",
                    description: "Breathable linen suits and formal wear for summer",
                    image:
                      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        <Badge className="bg-green-500">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {product.trend}
                        </Badge>
                      </div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{product.description}</p>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        Add to Inventory
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="combos" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    name: "Complete Formal Look",
                    products: [
                      {
                        name: "Premium Formal Shirt",
                        image:
                          "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Tailored Trousers",
                        image:
                          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Leather Belt",
                        image:
                          "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                    ],
                    discount: "15% off bundle",
                    conversion: "32% higher conversion rate",
                  },
                  {
                    name: "Ethnic Wedding Guest",
                    products: [
                      {
                        name: "Designer Saree",
                        image:
                          "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Matching Blouse",
                        image:
                          "https://images.unsplash.com/photo-1602697196016-3ca17c945460?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Jewelry Set",
                        image:
                          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                    ],
                    discount: "20% off bundle",
                    conversion: "45% higher conversion rate",
                  },
                  {
                    name: "Casual Weekend",
                    products: [
                      {
                        name: "Graphic T-shirt",
                        image:
                          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Denim Jeans",
                        image:
                          "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Sneakers",
                        image:
                          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                    ],
                    discount: "10% off bundle",
                    conversion: "28% higher conversion rate",
                  },
                  {
                    name: "Summer Essentials",
                    products: [
                      {
                        name: "Linen Shirt",
                        image:
                          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Shorts",
                        image:
                          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Sunglasses",
                        image:
                          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                    ],
                    discount: "12% off bundle",
                    conversion: "35% higher conversion rate",
                  },
                ].map((combo, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{combo.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="outline" className="mt-1">
                          {combo.discount}
                        </Badge>
                        <Badge variant="secondary" className="ml-2 mt-1">
                          {combo.conversion}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        {combo.products.map((product, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <Avatar className="h-16 w-16 rounded-md">
                              <AvatarImage src={product.image} alt={product.name} className="object-cover" />
                              <AvatarFallback className="rounded-md">{product.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <p className="text-xs text-center mt-2">{product.name}</p>
                            {i < combo.products.length - 1 && (
                              <div className="hidden md:block absolute left-[calc(33.33%*${i+1})] transform -translate-x-1/2">
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4">Create Bundle Offer</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upsell" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    base: {
                      name: "Basic Cotton T-shirt",
                      price: "₹599",
                      image:
                        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    premium: {
                      name: "Premium Organic Cotton T-shirt",
                      price: "₹1,299",
                      image:
                        "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      benefits: ["Organic cotton", "Better durability", "Premium finish", "Eco-friendly"],
                    },
                    conversion: "28% upsell rate",
                  },
                  {
                    base: {
                      name: "Regular Denim Jeans",
                      price: "₹1,499",
                      image:
                        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    premium: {
                      name: "Premium Stretch Denim Jeans",
                      price: "₹2,999",
                      image:
                        "https://images.unsplash.com/photo-1604176424472-9d7122c67a58?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      benefits: ["Premium fabric", "Better fit", "Longer lasting", "Comfort stretch"],
                    },
                    conversion: "32% upsell rate",
                  },
                  {
                    base: {
                      name: "Cotton Kurti",
                      price: "₹899",
                      image:
                        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    premium: {
                      name: "Embroidered Designer Kurti",
                      price: "₹1,899",
                      image:
                        "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      benefits: ["Hand embroidery", "Premium cotton", "Designer pattern", "Better finish"],
                    },
                    conversion: "42% upsell rate",
                  },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">Upsell Opportunity</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary">{item.conversion}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-16 w-16 rounded-md">
                            <AvatarImage src={item.base.image} alt={item.base.name} className="object-cover" />
                            <AvatarFallback className="rounded-md">{item.base.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{item.base.name}</p>
                            <p className="text-sm text-muted-foreground">{item.base.price}</p>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="rounded-full bg-primary/10 p-2">
                            <ArrowRight className="h-4 w-4 text-primary" />
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <Avatar className="h-16 w-16 rounded-md">
                            <AvatarImage src={item.premium.image} alt={item.premium.name} className="object-cover" />
                            <AvatarFallback className="rounded-md">{item.premium.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{item.premium.name}</p>
                            <p className="text-sm text-muted-foreground">{item.premium.price}</p>
                            <div className="mt-1">
                              {item.premium.benefits.map((benefit, i) => (
                                <Badge key={i} variant="outline" className="mr-1 mt-1">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-4">
                        <Zap className="mr-2 h-4 w-4" />
                        Enable Upsell
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
