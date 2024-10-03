/**
 * An array of routes that are public
 * These routes are accessible without authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"]

/**
 * An array of routes that require authentication
 * These routes are only accessible with a valid session
 * @type {string[]}
 */

export const authRoutes = ["/signin"]

/**
 * An array of routes that are protected
 * These routes are only accessible with a valid session
 * @type {string[]}
 */

export const protectedRoutes = ["/dashboard(.*)"]

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"
export const DEFAULT_UNAUTHORIZED_REDIRECT = "/signin"
export const DEFAULT_LOGOUT_REDIRECT = "/"
