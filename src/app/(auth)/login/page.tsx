import SignInForm from "@/features/auth/components/sign-in-form"

export default function SignInPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
      <SignInForm />
    </main>
  )
}
