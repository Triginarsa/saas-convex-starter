"use client"

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
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

import { signUpFormBasicSchema } from "../../schemas/schema"

type FormValues = z.infer<typeof signUpFormBasicSchema>

export default function SignUpPasswordBasicForm() {
  const { signIn } = useAuthActions()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(signUpFormBasicSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      flow: "signUp",
    },
  })

  const onSubmit = useCallback(
    async (values: FormValues) => {
      setIsLoading(true)

      try {
        await signIn("password", values)
        toast.success("Account created successfully", {
          description: "Welcome to the app!",
        })
        router.push("/dashboard")
      } catch (error) {
        console.error("Sign up error:", error)
        if (
          error instanceof Error &&
          error.message.includes("Account already exists")
        ) {
          toast("Account already exists", {
            description:
              "An account with this email already exists. Would you like to log in instead?",
            action: {
              label: "Go to Login",
              onClick: () => router.push("/login"),
            },
          })
        } else {
          toast.error("Error creating account", {
            description:
              "There was a problem creating your account. Please try again.",
          })
        }
      } finally {
        setIsLoading(false)
      }
    },
    [signIn, router]
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-4 md:space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input id="name" placeholder="Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </Form>
  )
}
