import Discord from "@auth/core/providers/discord"
import GitHub from "@auth/core/providers/github"
import { Password } from "@convex-dev/auth/providers/Password"
import { convexAuth } from "@convex-dev/auth/server"

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [
    GitHub,
    Discord,
    Password,
    // Password({ id: "password-with-reset", reset: ResendOTPPasswordReset }),
    // Password({
    //   id: "password-code",
    //   reset: ResendOTPPasswordReset,
    //   verify: ResendOTP,
    // }),
  ],
})
