import * as z from "zod"

export const signUpFormBasicSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  flow: z.literal("signUp"),
})

export const signInFormBasicSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  flow: z.literal("signIn"),
})

export const forgotPasswordFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  flow: z.literal("reset"),
})

export const resetPasswordFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  code: z.string().length(6, {
    message: "Please enter a 6-digit code.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  flow: z.literal("reset-verification"),
})
