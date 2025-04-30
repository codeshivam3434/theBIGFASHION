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
