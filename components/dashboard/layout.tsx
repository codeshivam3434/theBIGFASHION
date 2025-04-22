"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  HelpCircle,
  LogOut,
  Bell,
  User,
  BarChart3,
  Settings,
  Search,
  Menu,
  Truck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TheBigFashionLogo } from "@/components/the-big-fashion-logo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useToast } from "@/hooks/use-toast"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const [notifications, setNotifications] = useState(3)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  // Track active section for mobile navigation
  const [activeSection, setActiveSection] = useState("")

  // Set active section based on pathname
  useEffect(() => {
    if (pathname === "/dashboard") {
      setActiveSection("dashboard")
    } else if (pathname.startsWith("/dashboard/products")) {
      setActiveSection("products")
    } else if (pathname.startsWith("/dashboard/orders")) {
      setActiveSection("orders")
    } else if (pathname.startsWith("/dashboard/wholesale-analytics")) {
      setActiveSection("analytics")
    } else if (pathname === "/dashboard/profile") {
      setActiveSection("profile")
    } else if (pathname.startsWith("/dashboard/help")) {
      setActiveSection("help")
    } else if (pathname.startsWith("/dashboard/supply-chain")) {
      setActiveSection("supply-chain")
    }
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Show toast notification for search
    toast({
      title: "Search initiated",
      description: `Searching for: "${searchQuery}"`,
    })

    // Redirect to search results page (if implemented)
    if (searchQuery.trim()) {
      // For now, we'll just simulate a search by redirecting to products with the query
      router.push(`/dashboard/products?search=${encodeURIComponent(searchQuery)}`)
    }

    setShowSearch(false)
  }

  const handleLogout = () => {
    // Show confirmation toast
    toast({
      title: "Logging out",
      description: "You will be redirected to the login page.",
    })

    // Simulate logout process
    setTimeout(() => {
      router.push("/auth/login")
    }, 1000)
  }

  const clearNotifications = () => {
    setNotifications(0)
    toast({
      title: "Notifications cleared",
      description: "All notifications have been marked as read.",
    })
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-background to-background/95">
        <Sidebar
          variant="floating"
          className="border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <SidebarHeader className="border-b border-border/40">
            <div className="flex items-center gap-2 px-4 py-3">
              <TheBigFashionLogo className="h-8 cursor-pointer" onClick={() => router.push("/dashboard")} />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard"
                  isActive={pathname === "/dashboard"}
                  tooltip="Dashboard"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/dashboard")
                  }}
                >
                  <LayoutDashboard className="h-5 w-5 mr-3" />
                  <span className="text-base">Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard/products"
                  isActive={pathname.startsWith("/dashboard/products")}
                  tooltip="Products"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/dashboard/products")
                  }}
                >
                  <Package className="h-5 w-5 mr-3" />
                  <span className="text-base">Products</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard/orders"
                  isActive={pathname.startsWith("/dashboard/orders")}
                  tooltip="My Orders"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/dashboard/orders")
                  }}
                >
                  <ShoppingBag className="h-5 w-5 mr-3" />
                  <span className="text-base">My Orders</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard/supply-chain"
                  isActive={pathname.startsWith("/dashboard/supply-chain")}
                  tooltip="Supply Chain"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/dashboard/supply-chain")
                  }}
                >
                  <Truck className="h-5 w-5 mr-3" />
                  <span className="text-base">Supply Chain</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard/wholesale-analytics"
                  isActive={pathname.startsWith("/dashboard/wholesale-analytics")}
                  tooltip="Analytics"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/dashboard/wholesale-analytics")
                  }}
                >
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span className="text-base">Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard/profile"
                  isActive={pathname === "/dashboard/profile"}
                  tooltip="My Profile"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/dashboard/profile")
                  }}
                >
                  <User className="h-5 w-5 mr-3" />
                  <span className="text-base">My Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  href="/dashboard/help"
                  isActive={pathname.startsWith("/dashboard/help")}
                  tooltip="Help & Support"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/dashboard/help")
                  }}
                >
                  <HelpCircle className="h-5 w-5 mr-3" />
                  <span className="text-base">Help & Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter>
            <div className="px-4 py-2 border-t border-border/40">
              <div className="flex items-center gap-4 py-2">
                <Avatar
                  className="h-9 w-9 border-2 border-primary/20 cursor-pointer"
                  onClick={() => router.push("/dashboard/profile")}
                >
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Rajesh Sharma"
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">RS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Rajesh Sharma</span>
                  <span className="text-xs text-muted-foreground">Jaipur Fashion House</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <Settings className="h-4 w-4" />
                      <span className="sr-only">Settings</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-background/50">
          <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <div className="flex items-center gap-2">
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0">
                    <div className="flex h-full flex-col">
                      <div className="flex items-center justify-between border-b px-6 py-4">
                        <TheBigFashionLogo
                          onClick={() => {
                            router.push("/dashboard")
                            // Close the sheet after navigation
                            document.body.click()
                          }}
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="flex-1 overflow-auto py-4">
                        <nav className="grid gap-1 px-2">
                          <Button
                            variant={activeSection === "dashboard" ? "default" : "ghost"}
                            className="justify-start"
                            onClick={() => {
                              router.push("/dashboard")
                              // Close the sheet after navigation
                              document.body.click()
                            }}
                          >
                            <LayoutDashboard className="mr-2 h-5 w-5" />
                            Dashboard
                          </Button>
                          <Button
                            variant={activeSection === "products" ? "default" : "ghost"}
                            className="justify-start"
                            onClick={() => {
                              router.push("/dashboard/products")
                              // Close the sheet after navigation
                              document.body.click()
                            }}
                          >
                            <Package className="mr-2 h-5 w-5" />
                            Products
                          </Button>
                          <Button
                            variant={activeSection === "orders" ? "default" : "ghost"}
                            className="justify-start"
                            onClick={() => {
                              router.push("/dashboard/orders")
                              // Close the sheet after navigation
                              document.body.click()
                            }}
                          >
                            <ShoppingBag className="mr-2 h-5 w-5" />
                            My Orders
                          </Button>
                          <Button
                            variant={activeSection === "supply-chain" ? "default" : "ghost"}
                            className="justify-start"
                            onClick={() => {
                              router.push("/dashboard/supply-chain")
                              // Close the sheet after navigation
                              document.body.click()
                            }}
                          >
                            <Truck className="mr-2 h-5 w-5" />
                            Supply Chain
                          </Button>
                          <Button
                            variant={activeSection === "analytics" ? "default" : "ghost"}
                            className="justify-start"
                            onClick={() => {
                              router.push("/dashboard/wholesale-analytics")
                              // Close the sheet after navigation
                              document.body.click()
                            }}
                          >
                            <BarChart3 className="mr-2 h-5 w-5" />
                            Analytics
                          </Button>
                          <Button
                            variant={activeSection === "profile" ? "default" : "ghost"}
                            className="justify-start"
                            onClick={() => {
                              router.push("/dashboard/profile")
                              // Close the sheet after navigation
                              document.body.click()
                            }}
                          >
                            <User className="mr-2 h-5 w-5" />
                            My Profile
                          </Button>
                          <Button
                            variant={activeSection === "help" ? "default" : "ghost"}
                            className="justify-start"
                            onClick={() => {
                              router.push("/dashboard/help")
                              // Close the sheet after navigation
                              document.body.click()
                            }}
                          >
                            <HelpCircle className="mr-2 h-5 w-5" />
                            Help & Support
                          </Button>
                        </nav>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
              <SidebarTrigger className="hidden md:flex" />
              <div className="relative ml-4">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-[200px] md:w-[300px] pl-9 pr-4"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {notifications > 0 && (
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary">
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                      </span>
                    )}
                    <span className="sr-only">Notifications</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[300px]">
                  <DropdownMenuLabel className="flex items-center justify-between">
                    <span>Notifications</span>
                    <Badge variant="outline" className="ml-auto">
                      {notifications} new
                    </Badge>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {[
                    {
                      title: "New order received",
                      description: "Order #12345 has been placed",
                      time: "5 minutes ago",
                      action: () => router.push("/dashboard/orders"),
                    },
                    {
                      title: "Payment confirmed",
                      description: "Payment for order #12344 confirmed",
                      time: "1 hour ago",
                      action: () => router.push("/dashboard/orders"),
                    },
                    {
                      title: "New product available",
                      description: "Summer collection 2023 is now available",
                      time: "2 hours ago",
                      action: () => router.push("/dashboard/products"),
                    },
                  ].map((notification, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="flex flex-col items-start py-2 cursor-pointer"
                      onClick={notification.action}
                    >
                      <div className="font-medium">{notification.title}</div>
                      <div className="text-xs text-muted-foreground">{notification.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">{notification.time}</div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center" asChild>
                    <Button variant="ghost" className="w-full" size="sm" onClick={clearNotifications}>
                      Mark all as read
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8 border-2 border-primary/20">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Rajesh Sharma"
                      />
                      <AvatarFallback className="bg-primary/10 text-primary">RS</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Rajesh Sharma</p>
                      <p className="text-xs text-muted-foreground">rajesh@jfh.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
