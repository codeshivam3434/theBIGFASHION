#!/usr/bin/env node

// This script creates a backup of the database
// Run with: npx tsx scripts/backup-database.ts

import { createClient } from "@supabase/supabase-js"
import fs from "fs"
import path from "path"

async function backupDatabase() {
  try {
    console.log("Starting database backup...")

    // Create Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase URL or key is missing")
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Tables to backup
    const tables = ["contact_requests", "partnership_applications", "newsletter_subscriptions", "users"]

    // Create backup directory if it doesn't exist
    const backupDir = path.join(process.cwd(), "backups")
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true })
    }

    // Create a timestamp for the backup filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
    const backupFile = path.join(backupDir, `backup-${timestamp}.json`)

    // Fetch data from each table
    const backup: Record<string, any[]> = {}

    for (const table of tables) {
      console.log(`Backing up table: ${table}`)
      const { data, error } = await supabase.from(table).select("*")

      if (error) {
        throw new Error(`Error fetching data from ${table}: ${error.message}`)
      }

      backup[table] = data || []
      console.log(`- ${data?.length || 0} records backed up`)
    }

    // Write backup to file
    fs.writeFileSync(backupFile, JSON.stringify(backup, null, 2))

    console.log(`\nBackup completed successfully!`)
    console.log(`Backup saved to: ${backupFile}`)

    // Summary
    console.log("\nBackup summary:")
    for (const table of tables) {
      console.log(`- ${table}: ${backup[table].length} records`)
    }
  } catch (error) {
    console.error("Backup failed:", error)
    process.exit(1)
  }
}

// Load environment variables from .env file if not in production
if (process.env.NODE_ENV !== "production") {
  try {
    require("dotenv").config()
    console.log("Loaded environment variables from .env file")
  } catch (error) {
    console.warn("Could not load dotenv package, continuing with process.env")
  }
}

backupDatabase()
