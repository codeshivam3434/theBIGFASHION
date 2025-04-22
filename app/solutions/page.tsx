import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight, ShoppingCart, Store, BarChart4, Truck, Users, CreditCard } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Complete Fashion Business Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive tools designed specifically for fashion wholesalers to streamline operations, boost sales, and
          enhance customer relationships.
        </p>
      </div>

      <Tabs defaultValue="ordering" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-2xl grid-cols-3">
            <TabsTrigger value="ordering" className="text-base py-3">
              Ordering
            </TabsTrigger>
            <TabsTrigger value="frontstores" className="text-base py-3">
              Frontstores
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-base py-3">
              Analytics
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="ordering" className="space-y-12">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-pink-600">Streamlined Wholesale Ordering</h2>
                <p className="text-lg mb-6">
                  Our digital ordering system simplifies the wholesale process, making it easier for retailers to browse
                  your catalog, place orders, and track shipments—all in one place.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Digital catalog with real-time inventory updates",
                    "Bulk ordering capabilities with quantity discounts",
                    "Customizable order forms for different customer tiers",
                    "Automated order processing and confirmation",
                    "Integrated payment processing with multiple options",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Explore Ordering System
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Digital wholesale ordering system interface showing product catalog and order form"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Bulk Orders",
                  description: "Place large orders efficiently with quantity-based discounts automatically applied",
                  icon: <ShoppingCart className="h-10 w-10 text-pink-600" />,
                },
                {
                  title: "Flexible Payments",
                  description: "Multiple payment options including credit terms, installments, and digital payments",
                  icon: <CreditCard className="h-10 w-10 text-purple-600" />,
                },
                {
                  title: "Order Tracking",
                  description: "Real-time updates on order processing, shipping, and delivery status",
                  icon: <Truck className="h-10 w-10 text-blue-600" />,
                },
              ].map((feature, i) => (
                <Card key={i} className="border-2 hover:border-pink-400 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="p-3 rounded-full bg-pink-50 w-fit mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-pink-600 p-0 hover:text-pink-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </FadeInSection>
        </TabsContent>

        <TabsContent value="frontstores" className="space-y-12">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Customizable frontstore interface showing product display and branding options"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-purple-600">Customizable Digital Frontstores</h2>
                <p className="text-lg mb-6">
                  Give your retail partners their own branded digital storefronts, allowing them to showcase your
                  products with their unique branding and pricing strategy.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "White-label storefronts customizable with retailer branding",
                    "Flexible pricing controls for different markets",
                    "Integrated inventory management across all channels",
                    "Mobile-responsive designs for all devices",
                    "Built-in SEO tools to improve visibility",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Explore Frontstore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Brand Customization",
                  description: "Fully customizable storefronts that match your retailers' brand identity",
                  icon: <Store className="h-10 w-10 text-purple-600" />,
                },
                {
                  title: "Customer Management",
                  description: "Tools to help retailers manage their customer relationships and loyalty programs",
                  icon: <Users className="h-10 w-10 text-pink-600" />,
                },
                {
                  title: "Multi-Channel Selling",
                  description: "Seamlessly sell across web, mobile, social media, and in-store channels",
                  icon: <ShoppingCart className="h-10 w-10 text-blue-600" />,
                },
              ].map((feature, i) => (
                <Card key={i} className="border-2 hover:border-purple-400 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="p-3 rounded-full bg-purple-50 w-fit mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-purple-600 p-0 hover:text-purple-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </FadeInSection>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-12">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-blue-600">Powerful Business Analytics</h2>
                <p className="text-lg mb-6">
                  Gain valuable insights into your wholesale business with our comprehensive analytics dashboard,
                  helping you make data-driven decisions to optimize inventory and boost sales.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Real-time sales performance tracking across all channels",
                    "Inventory forecasting to prevent stockouts and overstock",
                    "Customer segmentation and behavior analysis",
                    "Trend identification and seasonal planning tools",
                    "Customizable reports and data visualization",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Analytics Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Analytics dashboard showing sales charts, inventory levels, and customer insights"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Sales Analytics",
                  description: "Track performance metrics across products, categories, and sales channels",
                  icon: <BarChart4 className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Inventory Insights",
                  description: "Optimize stock levels with predictive analytics and turnover analysis",
                  icon: <Truck className="h-10 w-10 text-purple-600" />,
                },
                {
                  title: "Customer Intelligence",
                  description: "Understand retailer behavior and preferences to improve relationships",
                  icon: <Users className="h-10 w-10 text-pink-600" />,
                },
              ].map((feature, i) => (
                <Card key={i} className="border-2 hover:border-blue-400 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="p-3 rounded-full bg-blue-50 w-fit mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </FadeInSection>
        </TabsContent>
      </Tabs>

      <FadeInSection>
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your fashion wholesale business?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of fashion brands using our platform to streamline operations and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            >
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              View Pricing
            </Button>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="mt-24 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Have questions about our solutions?</h2>
              <p className="text-lg mb-6">
                Our team of fashion industry experts is ready to help you find the perfect solution for your business
                needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Contact Our Team
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "24/7 Customer Support",
                "Free Implementation",
                "Custom Solutions Available",
                "No Long-Term Contracts",
              ].map((feature, i) => (
                <div key={i} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
