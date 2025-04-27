import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Simply pass through all requests without authentication checks
  return NextResponse.next()
}

// Only apply middleware to admin routes for future use
export const config = {
  matcher: ["/admin/:path*"],
}
