#!/usr/bin/env node

// This script checks if all required environment variables are set
// Run with: npx tsx scripts/check-env.ts

const requiredEnvVars = [
  // Database
  "POSTGRES_URL",
  "POSTGRES_PRISMA_URL",
  "POSTGRES_URL_NON_POOLING",
  "POSTGRES_USER",
  "POSTGRES_PASSWORD",
  "POSTGRES_DATABASE",
  "POSTGRES_HOST",

  // Supabase
  "SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "SUPABASE_JWT_SECRET",

  // Email
  "EMAIL_HOST",
  "EMAIL_PORT",
  "EMAIL_SECURE",
  "EMAIL_USER",
  "EMAIL_PASSWORD",

  // App
  "NEXT_PUBLIC_APP_URL",
  "JWT_SECRET",
]

const optionalEnvVars = ["NEXT_PUBLIC_GA_MEASUREMENT_ID"]

// Set default app version if not provided
if (!process.env.NEXT_PUBLIC_APP_VERSION) {
  process.env.NEXT_PUBLIC_APP_VERSION = "1.0.0"
  console.log("Setting default NEXT_PUBLIC_APP_VERSION to 1.0.0")
}

function checkEnvVars() {
  console.log("Checking environment variables...\n")

  let missingVars = 0
  let presentVars = 0

  // Check required variables
  console.log("Required variables:")
  for (const envVar of requiredEnvVars) {
    if (process.env[envVar]) {
      console.log(`✅ ${envVar}`)
      presentVars++
    } else {
      console.log(`❌ ${envVar} is missing`)
      missingVars++
    }
  }

  console.log("\nOptional variables:")
  for (const envVar of optionalEnvVars) {
    if (process.env[envVar]) {
      console.log(`✅ ${envVar}`)
    } else {
      console.log(`⚠️ ${envVar} is not set (optional)`)
    }
  }

  console.log(`✅ NEXT_PUBLIC_APP_VERSION: ${process.env.NEXT_PUBLIC_APP_VERSION}`)

  console.log("\nSummary:")
  console.log(`Total required variables: ${requiredEnvVars.length}`)
  console.log(`Present: ${presentVars}`)
  console.log(`Missing: ${missingVars}`)

  if (missingVars > 0) {
    console.error("\n❌ Some required environment variables are missing!")
    process.exit(1)
  } else {
    console.log("\n✅ All required environment variables are present!")
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

checkEnvVars()
