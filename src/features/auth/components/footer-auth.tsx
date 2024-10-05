import Link from "next/link"

export function SignInFooter() {
  return (
    <div className="text-muted-foreground mt-4 w-full items-center text-center text-sm">
      Don&apos;t have an account?{" "}
      <Link href="/register" className="text-primary hover:underline">
        Sign Up
      </Link>
    </div>
  )
}
export function SignUpFooter() {
  return (
    <div className="text-muted-foreground mt-4 w-full items-center text-center text-sm">
      Already have an account?{" "}
      <Link href="/login" className="text-primary hover:underline">
        Sign In
      </Link>
    </div>
  )
}
