"use client"

import { useAuthActions } from "@convex-dev/auth/react"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"

export function SignInWithGoogle() {
  const { signIn } = useAuthActions()
  return (
    <Button
      className="flex-1 w-full"
      variant="outline"
      type="button"
      onClick={() => void signIn("google", { redirectTo: "/dashboard" })}
    >
      <FcGoogle className="mr-2 h-4 w-4" /> Google
    </Button>
  )
}
