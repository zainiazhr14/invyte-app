// middleware.ts (root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/test", req.url));
}

export const config = {
  matcher: '/auth',
};
