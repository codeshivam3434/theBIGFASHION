import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Create a response object that we'll modify with headers
  const response = NextResponse.next()

  // Add security headers to all responses
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Content Security Policy - adjust as needed for your specific requirements
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://v0.blob.com; font-src 'self'; connect-src 'self' https://*.supabase.co;",
  )

  // Authentication and authorization checks
  const token = await getToken({ req: request, secret: process.env.JWT_SECRET })
  const isAuthenticated = !!token
  const isAdmin = isAuthenticated && token.role === "admin"

  // Path checks
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard")

  // Prevent authenticated users from accessing login/register pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Protect admin routes
  if (isAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/unauthorized", request.url))
  }

  // Protect dashboard routes
  if (isDashboardRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${encodeURIComponent(request.url)}`, request.url))
  }

  // Rate limiting for sensitive routes
  if (isAuthRoute || request.nextUrl.pathname.includes("/api/")) {
    // This is a simplified example - in production you would use a proper rate limiting solution
    // such as upstash/redis-rate-limit or similar

    // Get client IP
    const ip = request.headers.get("x-forwarded-for") || "unknown"

    // Check if this IP has made too many requests recently
    // This is where you'd implement your rate limiting logic

    // For now, we'll just add a header for demonstration
    response.headers.set("X-Rate-Limit-By", "IP")
  }

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files, images, and API routes that handle their own security
    "/((?!_next/static|_next/image|favicon.ico|images|api/health).*)",
  ],
}
