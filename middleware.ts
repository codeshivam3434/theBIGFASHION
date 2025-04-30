import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Simply pass through all requests
  return NextResponse.next()
}

// No specific routes to match anymore
export const config = {
  matcher: [],
}
