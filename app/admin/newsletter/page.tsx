import { getNewsletterSubscribers } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { revalidatePath } from "next/cache"
import { supabaseAdmin } from "@/lib/db"

// Server action to update subscriber status
async function updateSubscriberStatus(formData: FormData) {
  "use server"

  const id = formData.get("id") as string
  const action = formData.get("action") as string

  const newStatus = action === "unsubscribe" ? "inactive" : "active"

  const { error } = await supabaseAdmin.from("newsletter_subscribers").update({ status: newStatus }).eq("id", id)

  if (error) {
    console.error("Error updating subscriber status:", error)
    throw error
  }

  revalidatePath("/admin/newsletter")
}

export default async function NewsletterSubscribersPage() {
  // Fetch all newsletter subscribers
  const subscribers = await getNewsletterSubscribers()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Newsletter Subscribers</h1>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Subscribed Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.length > 0 ? (
              subscribers.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium">{subscriber.email}</TableCell>
                  <TableCell>{subscriber.name || "-"}</TableCell>
                  <TableCell>{new Date(subscriber.subscribed_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={subscriber.status === "active" ? "success" : "secondary"}>
                      {subscriber.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <form action={updateSubscriberStatus}>
                      <input type="hidden" name="id" value={subscriber.id} />
                      <input
                        type="hidden"
                        name="action"
                        value={subscriber.status === "active" ? "unsubscribe" : "resubscribe"}
                      />
                      <Button
                        type="submit"
                        size="sm"
                        variant={subscriber.status === "active" ? "destructive" : "default"}
                      >
                        {subscriber.status === "active" ? "Unsubscribe" : "Resubscribe"}
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No newsletter subscribers found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
