import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authMiddleware } from "./auth";

type MiddlewareFn = (
  req: NextRequest
) => NextResponse | void | Promise<NextResponse | void>;

/**
 * Chain multiple middlewares — runs sequentially
 */
function chainMiddlewares(middlewares: MiddlewareFn[]) {
  return async (req: NextRequest) => {
    for (const middleware of middlewares) {
      const result = await middleware(req);

      if (result) return result;
    }
    return NextResponse.next();
  };
}

export const combinedMiddleware = chainMiddlewares([
  authMiddleware,
]);
