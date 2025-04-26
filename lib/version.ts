/**
 * Application version information
 */

// Get the app version from environment variable or use default
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0"

// Get the build date (current date if not in production)
export const BUILD_DATE = new Date().toISOString()

// Format the version for display
export const getVersionString = () => {
  return `v${APP_VERSION} (${new Date(BUILD_DATE).toLocaleDateString()})`
}

// Check if the app is running in development mode
export const isDevelopment = process.env.NODE_ENV === "development"

// Check if the app is running in production mode
export const isProduction = process.env.NODE_ENV === "production"

// Check if the app is running in test mode
export const isTest = process.env.NODE_ENV === "test"
