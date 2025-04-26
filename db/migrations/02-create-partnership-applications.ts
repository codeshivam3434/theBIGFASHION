import { supabaseAdmin } from "@/lib/db"

// This script would be run during deployment or setup
export async function createPartnershipApplicationsTable() {
  // Create the partnership_applications table
  const { error } = await supabaseAdmin.rpc("create_partnership_applications_table", {
    sql: `
      CREATE TABLE IF NOT EXISTS partnership_applications (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        business_name TEXT NOT NULL,
        contact_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'new',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
      
      CREATE INDEX IF NOT EXISTS idx_partnership_applications_status ON partnership_applications(status);
      CREATE INDEX IF NOT EXISTS idx_partnership_applications_email ON partnership_applications(email);
    `,
  })

  if (error) {
    console.error("Error creating partnership_applications table:", error)
    throw error
  }

  console.log("Successfully created partnership_applications table")
}
