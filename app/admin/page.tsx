import { getContactRequests, getPartnershipApplications } from "@/lib/db"
import { getNewsletterSubscribers } from "@/lib/db"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Mail, Users, Building } from "lucide-react"

export default async function AdminDashboard() {
  // Fetch data for dashboard
  const contactRequests = await getContactRequests()
  const partnershipApplications = await getPartnershipApplications()
  const newsletterSubscribers = await getNewsletterSubscribers()

  // Count new contact requests
  const newContactRequests = contactRequests.filter((request) => request.status === "new").length

  // Count new partnership applications
  const newPartnershipApplications = partnershipApplications.filter(
    (application) => application.status === "new",
  ).length

  // Count active newsletter subscribers
  const activeSubscribers = newsletterSubscribers.filter((subscriber) => subscriber.status === "active").length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contact Requests</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contactRequests.length}</div>
            <p className="text-xs text-muted-foreground">
              {newContactRequests} new {newContactRequests === 1 ? "request" : "requests"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Partnership Applications</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{partnershipApplications.length}</div>
            <p className="text-xs text-muted-foreground">
              {newPartnershipApplications} new {newPartnershipApplications === 1 ? "application" : "applications"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeSubscribers}</div>
            <p className="text-xs text-muted-foreground">Active subscribers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Analytics</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24%</div>
            <p className="text-xs text-muted-foreground">from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Overview of recent requests and applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[...contactRequests, ...partnershipApplications]
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                .slice(0, 5)
                .map((item) => {
                  const isContact = "first_name" in item
                  return (
                    <div key={item.id} className="flex items-center">
                      <div className="mr-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {isContact
                            ? `${(item as any).first_name} ${(item as any).last_name}`
                            : (item as any).business_name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {isContact ? "Contact Request" : "Partnership Application"}
                        </p>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">
                        {new Date(item.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  )
                })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild className="w-full justify-start">
              <Link href="/admin/contacts">
                <Mail className="mr-2 h-4 w-4" />
                Manage Contact Requests
              </Link>
            </Button>
            <Button asChild className="w-full justify-start">
              <Link href="/admin/partnerships">
                <Building className="mr-2 h-4 w-4" />
                Manage Partnership Applications
              </Link>
            </Button>
            <Button asChild className="w-full justify-start">
              <Link href="/admin/newsletter">
                <Users className="mr-2 h-4 w-4" />
                Manage Newsletter Subscribers
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
