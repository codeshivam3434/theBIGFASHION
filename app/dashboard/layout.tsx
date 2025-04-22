import type React from "react"
import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/layout"

export const metadata: Metadata = {
  title: "Dashboard | THE BIG FASHION",
  description: "Manage your wholesale clothing business with THE BIG FASHION dashboard.",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
