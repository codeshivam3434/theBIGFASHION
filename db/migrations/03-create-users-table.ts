import { supabaseAdmin } from "@/lib/db"
import { hash } from "bcryptjs"

// This script would be run during deployment or setup
export async function createUsersTable() {
  // Create the users table
  const { error } = await supabaseAdmin.rpc("create_users_table", {
    sql: `
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        name TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
      
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
      CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
    `,
  })

  if (error) {
    console.error("Error creating users table:", error)
    throw error
  }

  // Create admin user if it doesn't exist
  const adminEmail = "admin@bigapparels.com"
  const { data: existingAdmin } = await supabaseAdmin.from("users").select("id").eq("email", adminEmail).single()

  if (!existingAdmin) {
    // Create default admin user
    const passwordHash = await hash("admin123", 10) // This should be changed after first login

    const { error: insertError } = await supabaseAdmin.from("users").insert([
      {
        email: adminEmail,
        password_hash: passwordHash,
        name: "Admin User",
        role: "admin",
      },
    ])

    if (insertError) {
      console.error("Error creating admin user:", insertError)
      throw insertError
    }

    console.log("Created default admin user")
  }

  console.log("Successfully created users table")
}
