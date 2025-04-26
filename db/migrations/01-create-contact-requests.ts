import { createClient } from "@supabase/supabase-js"

// This script would be run during deployment or setup
export async function createContactRequestsTable() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  // Create the contact_requests table
  const { error } = await supabase.rpc("create_contact_requests_table", {
    sql: `
      CREATE TABLE IF NOT EXISTS contact_requests (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'new',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
      
      CREATE INDEX IF NOT EXISTS idx_contact_requests_status ON contact_requests(status);
      CREATE INDEX IF NOT EXISTS idx_contact_requests_email ON contact_requests(email);
    `,
  })

  if (error) {
    console.error("Error creating contact_requests table:", error)
    throw error
  }

  console.log("Successfully created contact_requests table")
}
