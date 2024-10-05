import MainAuth from "@/features/auth/components/main-auth"

export default function SignUpPage() {
  return (
    <main className="bg-secondary flex min-h-dvh flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      <MainAuth variant="signup" form="password-basic" socialOAuth={true} />
    </main>
  )
}
