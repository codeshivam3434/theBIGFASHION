import type React from "react"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { LayoutDashboard, Users, ShoppingBag, MessageSquare, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user is authenticated and has admin role
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    redirect("/auth/login?callbackUrl=/admin")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-xl font-bold">BIGApparels Admin</h1>
        </div>
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            {[
              { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
              { href: "/admin/contacts", label: "Contact Requests", icon: <MessageSquare className="h-5 w-5" /> },
              { href: "/admin/partnerships", label: "Partnership Applications", icon: <Users className="h-5 w-5" /> },
              { href: "/admin/products", label: "Products", icon: <ShoppingBag className="h-5 w-5" /> },
              { href: "/admin/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
            <form action="/api/auth/signout" method="post" className="mt-6">
              <Button
                type="submit"
                variant="ghost"
                className="flex w-full items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="ml-3">Logout</span>
              </Button>
            </form>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
