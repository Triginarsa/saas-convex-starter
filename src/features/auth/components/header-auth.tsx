import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SignInHeader() {
  return (
    <CardHeader>
      <CardTitle className="gap-2 text-base">
        <div className="text-6xl">📦</div>
        Sign in to SaaS Convex Starter
      </CardTitle>
      <CardDescription>
        Welcome back! Please sign in to continue
      </CardDescription>
    </CardHeader>
  )
}
export function SignUpHeader() {
  return (
    <CardHeader>
      <CardTitle className="gap-2 text-base">
        <div className="text-6xl">📦</div>
        Create your account
      </CardTitle>
      <CardDescription>Welcome! Please sign up to continue</CardDescription>
    </CardHeader>
  )
}
