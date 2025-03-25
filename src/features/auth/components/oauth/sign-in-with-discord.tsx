"use client"

import { useAuthActions } from "@convex-dev/auth/react"
import { FaDiscord } from "react-icons/fa"

import { Button } from "@/components/ui/button"

export function SignInWithDiscord() {
  const { signIn } = useAuthActions()
  return (
    <Button
      className="w-full flex-1"
      variant="outline"
      type="button"
      onClick={() => void signIn("discord", { redirectTo: "/dashboard" })}
    >
      <FaDiscord className="mr-2 size-4" /> Discord
    </Button>
  )
}
