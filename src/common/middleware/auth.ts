
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useAuthStore } from "../stores/auth";

export function authMiddleware(req: NextRequest) {
  const token = useAuthStore.getState().token;
  const user = useAuthStore.getState().user;
  const pathname = req.nextUrl.pathname;
  const whitelists = ['/auth', '/auth/verification'];

  if (whitelists.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (!token || !user) {
    const loginUrl = new URL("/auth", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
