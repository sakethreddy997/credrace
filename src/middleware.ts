import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  
  // Skip middleware for API routes, static files, and Next.js internals
  if (
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/_next/") ||
    url.pathname.startsWith("/favicon.ico") ||
    url.pathname.startsWith("/robots.txt") ||
    url.pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  // Remove port from hostname for comparison (e.g., credrace.com:3000 -> credrace.com)
  const hostnameWithoutPort = hostname.split(":")[0];
  const needsRedirect = 
    url.protocol === "http:" || 
    (hostnameWithoutPort === "credrace.com" && !hostnameWithoutPort.startsWith("www."));

  if (needsRedirect) {
    // Build the canonical URL: https://www.credrace.com
    url.protocol = "https:";
    url.hostname = "www.credrace.com";
    // Preserve pathname and search params
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
