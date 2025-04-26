type ErrorLogParams = {
  message: string
  error?: unknown
  context?: Record<string, any>
  severity?: "info" | "warning" | "error" | "critical"
  user?: string
}

export function logError({ message, error, context = {}, severity = "error", user }: ErrorLogParams): void {
  // Format the error message
  const formattedError = formatError(error)

  // Create a structured log object
  const logObject = {
    timestamp: new Date().toISOString(),
    message,
    severity,
    error: formattedError,
    context,
    user,
    environment: process.env.NODE_ENV || "development",
    appVersion: process.env.NEXT_PUBLIC_APP_VERSION || "unknown",
  }

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.group(`[${severity.toUpperCase()}] ${message}`)
    console.error("Error details:", formattedError)
    console.log("Context:", context)
    console.groupEnd()
  } else {
    // In production, log in a format suitable for log aggregation services
    console.error(JSON.stringify(logObject))

    // Here you could also send the error to a monitoring service
    // like Sentry, LogRocket, etc.
    // Example: Sentry.captureException(error, { extra: context });
  }
}

// Helper function to format errors consistently
function formatError(error: unknown): any {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    }
  }

  if (typeof error === "string") {
    return { message: error }
  }

  return error
}

// Function to log API errors
export function logApiError(req: Request, error: unknown): void {
  const url = new URL(req.url)

  logError({
    message: `API Error: ${url.pathname}`,
    error,
    context: {
      method: req.method,
      url: url.toString(),
      headers: Object.fromEntries(req.headers),
    },
    severity: "error",
  })
}

// Function to log authentication errors
export function logAuthError(error: unknown, userId?: string): void {
  logError({
    message: "Authentication Error",
    error,
    context: { userId },
    severity: "warning",
    user: userId,
  })
}
