import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client for public operations (client-side)
export const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Admin client for server-side operations that need elevated privileges
export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey)

// Helper function to get contact requests (for admin dashboard)
export async function getContactRequests(status?: string) {
  const query = supabaseAdmin.from("contact_requests").select("*")

  if (status) {
    query.eq("status", status)
  }

  query.order("created_at", { ascending: false })

  const { data, error } = await query

  if (error) {
    console.error("Error fetching contact requests:", error)
    throw error
  }

  return data
}

// Helper function to update contact request status
export async function updateContactRequestStatus(id: string, status: string) {
  const { error } = await supabaseAdmin
    .from("contact_requests")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)

  if (error) {
    console.error("Error updating contact request status:", error)
    throw error
  }

  return { success: true }
}

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

// Helper function to get newsletter subscribers
export async function getNewsletterSubscribers(status?: string) {
  const query = supabaseAdmin.from("newsletter_subscribers").select("*")

  if (status) {
    query.eq("status", status)
  }

  query.order("subscribed_at", { ascending: false })

  const { data, error } = await query

  if (error) {
    console.error("Error fetching newsletter subscribers:", error)
    throw error
  }

  return data
}
