import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.JWT_SECRET })
  const isAuthenticated = !!token
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Redirect unauthenticated users to login
  if (!isAuthenticated && !isAuthRoute && request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  // Check admin access
  if (isAdminRoute && (!isAuthenticated || token.role !== "admin")) {
    return NextResponse.redirect(new URL("/unauthorized", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*", "/profile/:path*"],
}
