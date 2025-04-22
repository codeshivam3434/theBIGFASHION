"use client"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ShoppingBag, Package, User, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"

export function MobileSidebarToggle() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="border-b px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span>FASHION</span>
            <span className="text-primary">FUSION</span>
          </div>
        </div>
        <div className="px-2 py-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard" isActive={pathname === "/dashboard"}>
                <LayoutDashboard className="h-5 w-5 mr-3" />
                <span className="text-base">Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard/orders" isActive={pathname.startsWith("/dashboard/orders")}>
                <ShoppingBag className="h-5 w-5 mr-3" />
                <span className="text-base">My Orders</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard/products" isActive={pathname.startsWith("/dashboard/products")}>
                <Package className="h-5 w-5 mr-3" />
                <span className="text-base">Products</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard/profile" isActive={pathname === "/dashboard/profile"}>
                <User className="h-5 w-5 mr-3" />
                <span className="text-base">My Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard/help" isActive={pathname.startsWith("/dashboard/help")}>
                <HelpCircle className="h-5 w-5 mr-3" />
                <span className="text-base">Help & Support</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
        <div className="border-t p-4 mt-auto">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/auth/login">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
