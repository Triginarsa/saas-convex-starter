"use client"

import { useCallback, useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { resetPasswordFormSchema } from "../../schemas/schema"

type FormValues = z.infer<typeof resetPasswordFormSchema>

export default function ForgotPasswordForm() {
  const { signIn } = useAuthActions()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      email: "",
      flow: "reset-verification",
    },
  })

  const onSubmit = useCallback(
    async (values: FormValues) => {
      setIsLoading(true)

      try {
        await signIn("password", values)
        toast.success("Please check your email", {
          description: "We have sent you a password reset code.",
        })
      } catch (error) {
        console.error("Forgot Password error:", error)
      } finally {
        setIsLoading(false)
      }
    },
    [signIn]
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-4 md:space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="janedoe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending Code... " : "Send Code"}
        </Button>
      </form>
    </Form>
  )
}
