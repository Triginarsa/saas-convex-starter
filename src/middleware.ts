import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server"

import {
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_UNAUTHORIZED_REDIRECT,
  protectedRoutes,
} from "./routes"

const isSignInPage = createRouteMatcher(authRoutes)
const isProtectedRoute = createRouteMatcher(protectedRoutes)

export default convexAuthNextjsMiddleware((request, { convexAuth }) => {
  const url = request.nextUrl
  console.log(url)
  if (isSignInPage(request) && convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, DEFAULT_LOGIN_REDIRECT)
  }
  if (isProtectedRoute(request) && !convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, DEFAULT_UNAUTHORIZED_REDIRECT)
  }
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
