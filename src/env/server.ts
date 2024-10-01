import { createEnv } from "@t3-oss/env-nextjs"
import { z, ZodError } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    CONVEX_DEPLOYMENT: z.string({
      message: "Invalid URL. Please run: npx convex dev",
    }),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    )
    process.exit(1)
  },

  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
})
