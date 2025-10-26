import type { NextRequest } from "next/server";
import { combinedMiddleware } from "./common/middleware";

export function middleware(req: NextRequest) {
  return combinedMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|assets|static).*)"],
};
