import { supabaseAdmin } from "./db"

// Helper function to get partnership applications (for admin dashboard)
export async function getPartnershipApplications(status?: string) {
  const query = supabaseAdmin.from("partnership_applications").select("*")

  if (status) {
    query.eq("status", status)
  }

  query.order("created_at", { ascending: false })

  const { data, error } = await query

  if (error) {
    console.error("Error fetching partnership applications:", error)
    throw error
  }

  return data
}

// Helper function to update partnership application status
export async function updatePartnershipApplicationStatus(id: string, status: string) {
  const { error } = await supabaseAdmin
    .from("partnership_applications")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)

  if (error) {
    console.error("Error updating partnership application status:", error)
    throw error
  }

  return { success: true }
}
