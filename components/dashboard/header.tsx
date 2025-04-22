"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Bell, Search, Menu, X, User, Settings, LogOut, ShoppingCart, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TheBigFashionLogo } from "@/components/the-big-fashion-logo"

export function DashboardHeader() {
  const router = useRouter()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    setShowSearch(false)
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b px-6 py-4">
                  <TheBigFashionLogo />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="flex-1 overflow-auto py-4">
                  <nav className="grid gap-1 px-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard/orders"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                    >
                      Orders
                    </Link>
                    <Link
                      href="/dashboard/products"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                    >
                      Products
                    </Link>
                    <Link
                      href="/dashboard/customers"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                    >
                      Customers
                    </Link>
                    <Link
                      href="/dashboard/analytics"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                    >
                      Analytics
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                    >
                      Settings
                    </Link>
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden md:block">
            <TheBigFashionLogo />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <AnimatePresence>
              {showSearch && (
                <motion.form
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "300px" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-0 z-10"
                  onSubmit={handleSearch}
                >
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pr-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowSearch(false)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <Button variant="ghost" size="icon" onClick={() => setShowNotifications(!showNotifications)}>
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-brand" />
              <span className="sr-only">Notifications</span>
            </Button>

            <AnimatePresence>
              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                  <motion.div
                    className="absolute right-0 top-full z-50 mt-1 w-80 rounded-md border bg-background shadow-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between border-b px-4 py-3">
                      <h3 className="font-semibold">Notifications</h3>
                      <Button variant="ghost" size="sm">
                        Mark all as read
                      </Button>
                    </div>
                    <div className="max-h-96 overflow-auto">
                      {[
                        {
                          icon: <ShoppingCart className="h-4 w-4" />,
                          title: "New Order Received",
                          description: "Order #12345 has been placed",
                          time: "5 minutes ago",
                          unread: true,
                        },
                        {
                          icon: <MessageSquare className="h-4 w-4" />,
                          title: "New Message",
                          description: "You have a new message from support",
                          time: "1 hour ago",
                          unread: true,
                        },
                        {
                          icon: <User className="h-4 w-4" />,
                          title: "Account Update",
                          description: "Your account details have been updated",
                          time: "Yesterday",
                          unread: false,
                        },
                      ].map((notification, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-3 border-b px-4 py-3 hover:bg-muted/50 ${
                            notification.unread ? "bg-muted/30" : ""
                          }`}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                            {notification.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">{notification.title}</h4>
                            <p className="text-xs text-muted-foreground">{notification.description}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                          {notification.unread && <div className="h-2 w-2 rounded-full bg-brand" />}
                        </div>
                      ))}
                    </div>
                    <div className="border-t p-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-center"
                        onClick={() => router.push("/dashboard/notifications")}
                      >
                        View all notifications
                      </Button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
                    alt="User"
                  />
                  <AvatarFallback>RP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Rajesh Patel</p>
                  <p className="text-xs text-muted-foreground">rajesh@thebigfashion.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/auth/login")}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
