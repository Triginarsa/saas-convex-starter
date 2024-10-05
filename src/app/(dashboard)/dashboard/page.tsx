import { Suspense } from "react"
import SignOutButton from "@/features/auth/components/sign-out-button"
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server"
import { fetchQuery } from "convex/nextjs"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { api } from "../../../../convex/_generated/api"

async function DashboardContent() {
  const profile = await fetchQuery(
    api.users.getProfileByUserId,
    {},
    { token: convexAuthNextjsToken() }
  )

  return (
    <main className="flex max-h-screen grow flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b p-4">
        <h1>Welcome to Dashboard</h1>
        <div className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage src={profile.image} />
            <AvatarFallback>👤</AvatarFallback>
          </Avatar>
          <p>{profile.name}</p>
          <SignOutButton>Sign Out</SignOutButton>
        </div>
      </div>
    </main>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}
