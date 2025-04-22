"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, CheckCircle, Truck, Clock, Package, Filter, Download, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeInSection from "@/components/fade-in-section"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { DatePickerWithRange } from "@/components/dashboard/analytics/date-range-picker"

interface OrderItem {
  id: string
  name: string
  quantity: number
  price: string
  image: string
}

interface Order {
  id: string
  date: string
  items: OrderItem[]
  total: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "paid" | "pending" | "failed"
  trackingNumber?: string
  estimatedDelivery?: string
  shippingAddress: string
  billingAddress: string
  invoiceNumber: string
}

// Generate sample orders
const orders: Order[] = [
  {
    id: "ORD-7652",
    date: "2023-06-21",
    status: "delivered",
    paymentStatus: "paid",
    total: "₹24,500",
    trackingNumber: "IND123456789",
    estimatedDelivery: "2023-06-28",
    shippingAddress: "123 Fashion Street, Jaipur, Rajasthan, 302001",
    billingAddress: "123 Fashion Street, Jaipur, Rajasthan, 302001",
    invoiceNumber: "INV-7652",
    items: [
      {
        id: "ITEM-001",
        name: "Summer Collection Shirts",
        quantity: 50,
        price: "₹490",
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
      },
    ],
  },
  {
    id: "ORD-7651",
    date: "2023-06-18",
    status: "processing",
    paymentStatus: "paid",
    total: "₹18,750",
    trackingNumber: "IND987654321",
    estimatedDelivery: "2023-06-25",
    shippingAddress: "456 Textile Market, Mumbai, Maharashtra, 400001",
    billingAddress: "456 Textile Market, Mumbai, Maharashtra, 400001",
    invoiceNumber: "INV-7651",
    items: [
      {
        id: "ITEM-002",
        name: "Denim Collection",
        quantity: 25,
        price: "₹750",
        image:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
      },
    ],
  },
  {
    id: "ORD-7650",
    date: "2023-06-15",
    status: "shipped",
    paymentStatus: "paid",
    total: "₹32,000",
    trackingNumber: "IND456789123",
    estimatedDelivery: "2023-06-22",
    shippingAddress: "789 Fashion Hub, Delhi, 110001",
    billingAddress: "789 Fashion Hub, Delhi, 110001",
    invoiceNumber: "INV-7650",
    items: [
      {
        id: "ITEM-003",
        name: "Formal Wear Collection",
        quantity: 40,
        price: "₹800",
        image:
          "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
      },
    ],
  },
  {
    id: "ORD-7649",
    date: "2023-06-12",
    status: "delivered",
    paymentStatus: "paid",
    total: "₹15,000",
    trackingNumber: "IND789123456",
    estimatedDelivery: "2023-06-19",
    shippingAddress: "321 Retail Center, Bangalore, Karnataka, 560001",
    billingAddress: "321 Retail Center, Bangalore, Karnataka, 560001",
    invoiceNumber: "INV-7649",
    items: [
      {
        id: "ITEM-004",
        name: "Casual Wear Collection",
        quantity: 30,
        price: "₹500",
        image:
          "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
      },
    ],
  },
  {
    id: "ORD-7648",
    date: "2023-06-10",
    status: "delivered",
    paymentStatus: "paid",
    total: "₹27,500",
    trackingNumber: "IND321654987",
    estimatedDelivery: "2023-06-17",
    shippingAddress: "654 Fashion Street, Chennai, Tamil Nadu, 600001",
    billingAddress: "654 Fashion Street, Chennai, Tamil Nadu, 600001",
    invoiceNumber: "INV-7648",
    items: [
      {
        id: "ITEM-005",
        name: "Women's Collection",
        quantity: 55,
        price: "₹500",
        image:
          "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
      },
    ],
  },
  {
    id: "ORD-7647",
    date: "2023-06-08",
    status: "cancelled",
    paymentStatus: "failed",
    total: "₹12,500",
    shippingAddress: "987 Retail Park, Hyderabad, Telangana, 500001",
    billingAddress: "987 Retail Park, Hyderabad, Telangana, 500001",
    invoiceNumber: "INV-7647",
    items: [
      {
        id: "ITEM-006",
        name: "Kids Collection",
        quantity: 25,
        price: "₹500",
        image:
          "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
      },
    ],
  },
  {
    id: "ORD-7646",
    date: "2023-06-05",
    status: "delivered",
    paymentStatus: "paid",
    total: "₹35,000",
    trackingNumber: "IND654987321",
    estimatedDelivery: "2023-06-12",
    shippingAddress: "159 Fashion Mall, Kolkata, West Bengal, 700001",
    billingAddress: "159 Fashion Mall, Kolkata, West Bengal, 700001",
    invoiceNumber: "INV-7646",
    items: [
      {
        id: "ITEM-007",
        name: "Winter Collection",
        quantity: 70,
        price: "₹500",
        image:
          "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
      },
    ],
  },
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [viewMode, setViewMode] = useState<"card" | "table">("card")
  const [sortBy, setSortBy] = useState<"date" | "total">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const itemsPerPage = 5

  const filteredOrders = orders
    .filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesStatus = statusFilter === "all" || order.status === statusFilter

      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA
      } else if (sortBy === "total") {
        const totalA = Number.parseInt(a.total.replace(/[^\d]/g, ""))
        const totalB = Number.parseInt(b.total.replace(/[^\d]/g, ""))
        return sortOrder === "asc" ? totalA - totalB : totalB - totalA
      }
      return 0
    })

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
  const currentOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const getStatusInfo = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return {
          label: "Waiting for Confirmation",
          color: "bg-amber-500",
          icon: <Clock className="h-5 w-5" />,
        }
      case "processing":
        return {
          label: "Being Prepared",
          color: "bg-blue-500",
          icon: <Package className="h-5 w-5" />,
        }
      case "shipped":
        return {
          label: "On the Way",
          color: "bg-purple-500",
          icon: <Truck className="h-5 w-5" />,
        }
      case "delivered":
        return {
          label: "Delivered",
          color: "bg-green-500",
          icon: <CheckCircle className="h-5 w-5" />,
        }
      case "cancelled":
        return {
          label: "Cancelled",
          color: "bg-red-500",
          icon: <Clock className="h-5 w-5" />,
        }
      default:
        return {
          label: "Unknown",
          color: "bg-gray-500",
          icon: <Clock className="h-5 w-5" />,
        }
    }
  }

  const getPaymentStatusInfo = (status: Order["paymentStatus"]) => {
    switch (status) {
      case "paid":
        return {
          label: "Paid",
          color: "text-green-500",
          bgColor: "bg-green-100",
        }
      case "pending":
        return {
          label: "Payment Pending",
          color: "text-amber-500",
          bgColor: "bg-amber-100",
        }
      case "failed":
        return {
          label: "Payment Failed",
          color: "text-red-500",
          bgColor: "bg-red-100",
        }
      default:
        return {
          label: "Unknown",
          color: "text-gray-500",
          bgColor: "bg-gray-100",
        }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Orders</h1>
        <p className="text-muted-foreground text-lg">View and track all your purchases</p>
      </div>

      <FadeInSection>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <CardTitle>All Orders</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9"
                  onClick={() => setViewMode(viewMode === "card" ? "table" : "card")}
                >
                  {viewMode === "card" ? "Table View" : "Card View"}
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="p-4 border-t">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search orders..."
                    className="w-full pl-10 py-6 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <DatePickerWithRange className="w-full md:w-auto" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full md:w-auto">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setStatusFilter("all")}>All Orders</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setStatusFilter("pending")}>
                        Waiting for Confirmation
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setStatusFilter("processing")}>Being Prepared</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setStatusFilter("shipped")}>On the Way</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setStatusFilter("delivered")}>Delivered</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setStatusFilter("cancelled")}>Cancelled</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full md:w-auto">
                        <ArrowUpDown className="h-4 w-4 mr-2" />
                        Sort
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => {
                          setSortBy("date")
                          setSortOrder("desc")
                        }}
                      >
                        Date (Newest First)
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setSortBy("date")
                          setSortOrder("asc")
                        }}
                      >
                        Date (Oldest First)
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setSortBy("total")
                          setSortOrder("desc")
                        }}
                      >
                        Amount (High to Low)
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setSortBy("total")
                          setSortOrder("asc")
                        }}
                      >
                        Amount (Low to High)
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <Tabs defaultValue="all" className="mb-4">
                <TabsList>
                  <TabsTrigger value="all" onClick={() => setStatusFilter("all")}>
                    All Orders
                  </TabsTrigger>
                  <TabsTrigger value="processing" onClick={() => setStatusFilter("processing")}>
                    Processing
                  </TabsTrigger>
                  <TabsTrigger value="shipped" onClick={() => setStatusFilter("shipped")}>
                    Shipped
                  </TabsTrigger>
                  <TabsTrigger value="delivered" onClick={() => setStatusFilter("delivered")}>
                    Delivered
                  </TabsTrigger>
                  <TabsTrigger value="cancelled" onClick={() => setStatusFilter("cancelled")}>
                    Cancelled
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {viewMode === "card" ? (
                <div className="space-y-4">
                  {currentOrders.length > 0 ? (
                    currentOrders.map((order) => {
                      const statusInfo = getStatusInfo(order.status)
                      const paymentStatusInfo = getPaymentStatusInfo(order.paymentStatus)

                      return (
                        <Card key={order.id} className="overflow-hidden">
                          <div className="p-4">
                            <div className="flex justify-between items-center mb-3">
                              <h3 className="font-medium text-lg">Order #{order.id}</h3>
                              <Badge
                                className={`${statusInfo.color} text-white px-3 py-1 text-sm flex items-center gap-1`}
                              >
                                {statusInfo.icon}
                                {statusInfo.label}
                              </Badge>
                            </div>
                            <div className="space-y-3 mb-3">
                              {order.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                    className="rounded-md object-cover"
                                  />
                                  <div>
                                    <p className="text-base font-medium">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Quantity: {item.quantity} × {item.price}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between items-center text-base pt-3 border-t">
                              <div>
                                <p className="text-muted-foreground">Order Date: {order.date}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge
                                    variant="outline"
                                    className={`${paymentStatusInfo.bgColor} ${paymentStatusInfo.color} border-0`}
                                  >
                                    {paymentStatusInfo.label}
                                  </Badge>
                                  <p className="font-medium text-lg">Total: {order.total}</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" onClick={() => setSelectedOrder(order)}>
                                      View Details
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-3xl">
                                    <DialogHeader>
                                      <DialogTitle>Order Details - #{order.id}</DialogTitle>
                                      <DialogDescription>Placed on {order.date}</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <h3 className="font-medium mb-2">Order Status</h3>
                                          <Badge
                                            className={`${statusInfo.color} text-white px-3 py-1 text-sm flex items-center gap-1 w-fit`}
                                          >
                                            {statusInfo.icon}
                                            {statusInfo.label}
                                          </Badge>
                                        </div>
                                        <div>
                                          <h3 className="font-medium mb-2">Payment Status</h3>
                                          <Badge
                                            variant="outline"
                                            className={`${paymentStatusInfo.bgColor} ${paymentStatusInfo.color} border-0 w-fit`}
                                          >
                                            {paymentStatusInfo.label}
                                          </Badge>
                                        </div>
                                      </div>

                                      <div className="border rounded-md p-4">
                                        <h3 className="font-medium mb-2">Order Items</h3>
                                        <Table>
                                          <TableHeader>
                                            <TableRow>
                                              <TableHead>Item</TableHead>
                                              <TableHead>Quantity</TableHead>
                                              <TableHead>Price</TableHead>
                                              <TableHead className="text-right">Total</TableHead>
                                            </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                            {order.items.map((item, idx) => (
                                              <TableRow key={idx}>
                                                <TableCell className="font-medium">{item.name}</TableCell>
                                                <TableCell>{item.quantity}</TableCell>
                                                <TableCell>{item.price}</TableCell>
                                                <TableCell className="text-right">{order.total}</TableCell>
                                              </TableRow>
                                            ))}
                                          </TableBody>
                                        </Table>
                                      </div>

                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="border rounded-md p-4">
                                          <h3 className="font-medium mb-2">Shipping Address</h3>
                                          <p className="text-sm">{order.shippingAddress}</p>
                                        </div>
                                        <div className="border rounded-md p-4">
                                          <h3 className="font-medium mb-2">Billing Address</h3>
                                          <p className="text-sm">{order.billingAddress}</p>
                                        </div>
                                      </div>

                                      {order.trackingNumber && (
                                        <div className="border rounded-md p-4">
                                          <h3 className="font-medium mb-2">Tracking Information</h3>
                                          <p className="text-sm">Tracking Number: {order.trackingNumber}</p>
                                          {order.estimatedDelivery && (
                                            <p className="text-sm mt-1">
                                              Estimated Delivery: {order.estimatedDelivery}
                                            </p>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <Button variant="outline">Download Invoice</Button>
                                      {order.status === "shipped" && <Button>Track Shipment</Button>}
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                <Button>Track Order</Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )
                    })
                  ) : (
                    <div className="text-center p-8">
                      <p className="text-muted-foreground text-lg">No orders found.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentOrders.length > 0 ? (
                        currentOrders.map((order) => {
                          const statusInfo = getStatusInfo(order.status)
                          const paymentStatusInfo = getPaymentStatusInfo(order.paymentStatus)

                          return (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">{order.id}</TableCell>
                              <TableCell>{order.date}</TableCell>
                              <TableCell>{order.items.map((item) => item.name).join(", ")}</TableCell>
                              <TableCell>{order.total}</TableCell>
                              <TableCell>
                                <Badge
                                  className={`${statusInfo.color} text-white px-2 py-1 text-xs flex items-center gap-1 w-fit`}
                                >
                                  {statusInfo.icon}
                                  {statusInfo.label}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={`${paymentStatusInfo.bgColor} ${paymentStatusInfo.color} border-0 w-fit`}
                                >
                                  {paymentStatusInfo.label}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                                        Details
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl">
                                      <DialogHeader>
                                        <DialogTitle>Order Details - #{order.id}</DialogTitle>
                                        <DialogDescription>Placed on {order.date}</DialogDescription>
                                      </DialogHeader>
                                      <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div>
                                            <h3 className="font-medium mb-2">Order Status</h3>
                                            <Badge
                                              className={`${statusInfo.color} text-white px-3 py-1 text-sm flex items-center gap-1 w-fit`}
                                            >
                                              {statusInfo.icon}
                                              {statusInfo.label}
                                            </Badge>
                                          </div>
                                          <div>
                                            <h3 className="font-medium mb-2">Payment Status</h3>
                                            <Badge
                                              variant="outline"
                                              className={`${paymentStatusInfo.bgColor} ${paymentStatusInfo.color} border-0 w-fit`}
                                            >
                                              {paymentStatusInfo.label}
                                            </Badge>
                                          </div>
                                        </div>

                                        <div className="border rounded-md p-4">
                                          <h3 className="font-medium mb-2">Order Items</h3>
                                          <Table>
                                            <TableHeader>
                                              <TableRow>
                                                <TableHead>Item</TableHead>
                                                <TableHead>Quantity</TableHead>
                                                <TableHead>Price</TableHead>
                                                <TableHead className="text-right">Total</TableHead>
                                              </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                              {order.items.map((item, idx) => (
                                                <TableRow key={idx}>
                                                  <TableCell className="font-medium">{item.name}</TableCell>
                                                  <TableCell>{item.quantity}</TableCell>
                                                  <TableCell>{item.price}</TableCell>
                                                  <TableCell className="text-right">{order.total}</TableCell>
                                                </TableRow>
                                              ))}
                                            </TableBody>
                                          </Table>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="border rounded-md p-4">
                                            <h3 className="font-medium mb-2">Shipping Address</h3>
                                            <p className="text-sm">{order.shippingAddress}</p>
                                          </div>
                                          <div className="border rounded-md p-4">
                                            <h3 className="font-medium mb-2">Billing Address</h3>
                                            <p className="text-sm">{order.billingAddress}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                  <Button size="sm">Track</Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          )
                        })
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center">
                            <p className="text-muted-foreground py-4">No orders found.</p>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-4">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink onClick={() => setCurrentPage(page)} isActive={currentPage === page}>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </CardContent>
        </Card>
      </FadeInSection>
    </div>
  )
}
