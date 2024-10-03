import { getAuthUserId } from "@convex-dev/auth/server"

import { query } from "./_generated/server"

export const getProfileByUserId = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)

    if (userId === null) {
      console.error("getAuthUserId returned null")
      throw new Error("Not signed in")
    }

    const user = await ctx.db.get(userId)

    if (user === null) {
      console.error(`User not found in database for userId: ${userId}`)
      throw new Error("User not found in database")
    }

    return user
  },
})
