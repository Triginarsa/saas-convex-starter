"use client"

import { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useAuthActions } from "@convex-dev/auth/react"

import { Button } from "@/components/ui/button"

export default function SignOutButton({ children }: { children: ReactNode }) {
  const { signOut } = useAuthActions()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <Button variant={"ghost"} onClick={handleSignOut}>
      {children}
    </Button>
  )
}
