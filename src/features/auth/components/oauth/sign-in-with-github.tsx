"use client"

import { useAuthActions } from "@convex-dev/auth/react"
import { FaGithub } from "react-icons/fa"

import { Button } from "@/components/ui/button"

export function SignInWithGitHub() {
  const { signIn } = useAuthActions()
  return (
    <Button
      className="w-full flex-1"
      variant="outline"
      type="button"
      onClick={() => void signIn("github", { redirectTo: "/dashboard" })}
    >
      <FaGithub className="mr-2 size-4" /> GitHub
    </Button>
  )
}
