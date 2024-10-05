"use client"

import { useAuthActions } from "@convex-dev/auth/react"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"

export function SignInWithGoogle() {
  const { signIn } = useAuthActions()
  return (
    <Button
      className="w-full flex-1"
      variant="outline"
      type="button"
      onClick={() => void signIn("google", { redirectTo: "/dashboard" })}
    >
      <FcGoogle className="mr-2 size-4" /> Google
    </Button>
  )
}
