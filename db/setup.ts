import { createContactRequestsTable } from "./migrations/01-create-contact-requests"
import { createPartnershipApplicationsTable } from "./migrations/02-create-partnership-applications"
import { createUsersTable } from "./migrations/03-create-users-table"

async function setupDatabase() {
  console.log("Setting up database...")

  try {
    // Run migrations in order
    await createContactRequestsTable()
    await createPartnershipApplicationsTable()
    await createUsersTable()

    console.log("Database setup completed successfully!")
  } catch (error) {
    console.error("Error setting up database:", error)
    process.exit(1)
  }
}

// Run the setup if this file is executed directly
if (require.main === module) {
  setupDatabase()
}

export default setupDatabase
