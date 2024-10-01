import { createEnv } from "@t3-oss/env-nextjs"
import { z, ZodError } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CONVEX_URL: z
      .string()
      .url({ message: "Invalid URL. Please run: npx convex dev" }),
  },
  runtimeEnv: {
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    )
    process.exit(1)
  },
})
