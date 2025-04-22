import Link from "next/link"
import { ShoppingBag, Package, AlertTriangle, Phone, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Welcome, Rajesh!</h1>
        <p className="text-sm text-muted-foreground">Today is {new Date().toLocaleDateString()}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* New Orders Card */}
        <Card className="border-2 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-blue-500" />
              New Orders
            </CardTitle>
            <CardDescription>You have new orders to process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">3</div>
            <p className="text-sm text-muted-foreground mt-1">Orders waiting for your attention</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/dashboard/orders">View Orders</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Low Stock Alert Card */}
        <Card className="border-2 border-amber-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Low Stock Alert
            </CardTitle>
            <CardDescription>Products that need reordering</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-600">5</div>
            <p className="text-sm text-muted-foreground mt-1">Products with low inventory</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/dashboard/products">View Products</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Support Card */}
        <Card className="border-2 border-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Phone className="h-6 w-6 text-green-500" />
              Need Help?
            </CardTitle>
            <CardDescription>Contact your account manager</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                Available Now
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Priya Sharma: +91 98765 43210</p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="flex-1" variant="outline" asChild>
              <Link href="tel:+919876543210">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link href="/dashboard/help">
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Your latest 3 orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Order #{1000 + order}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(2023, 3, 10 + order).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Badge variant={order === 1 ? "default" : order === 2 ? "secondary" : "outline"}>
                  {order === 1 ? "Processing" : order === 2 ? "Shipped" : "Delivered"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/orders">View All Orders</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Button size="lg" className="h-20 flex flex-col items-center justify-center" asChild>
              <Link href="/dashboard/products">
                <Package className="h-6 w-6 mb-1" />
                Browse Products
              </Link>
            </Button>
            <Button size="lg" className="h-20 flex flex-col items-center justify-center" variant="outline" asChild>
              <Link href="/dashboard/orders">
                <ShoppingBag className="h-6 w-6 mb-1" />
                My Orders
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
