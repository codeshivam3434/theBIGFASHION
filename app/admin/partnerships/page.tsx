import { getPartnershipApplications, updatePartnershipApplicationStatus } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { revalidatePath } from "next/cache"

// Server action to update partnership application status
async function updateStatus(formData: FormData) {
  "use server"

  const id = formData.get("id") as string
  const status = formData.get("status") as string

  await updatePartnershipApplicationStatus(id, status)
  revalidatePath("/admin/partnerships")
}

export default async function PartnershipApplicationsPage() {
  // Fetch all partnership applications
  const partnershipApplications = await getPartnershipApplications()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Partnership Applications</h1>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Business Name</TableHead>
              <TableHead>Contact Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partnershipApplications.length > 0 ? (
              partnershipApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">{application.business_name}</TableCell>
                  <TableCell>{application.contact_name}</TableCell>
                  <TableCell>{application.email}</TableCell>
                  <TableCell>{application.phone}</TableCell>
                  <TableCell>{new Date(application.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        application.status === "new"
                          ? "default"
                          : application.status === "in_review"
                            ? "secondary"
                            : application.status === "approved"
                              ? "success"
                              : application.status === "rejected"
                                ? "destructive"
                                : "outline"
                      }
                    >
                      {application.status.replace("_", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <form action={updateStatus} className="flex items-center space-x-2">
                      <input type="hidden" name="id" value={application.id} />
                      <Select name="status" defaultValue={application.status}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="in_review">In Review</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button type="submit" size="sm">
                        Update
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                  No partnership applications found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
