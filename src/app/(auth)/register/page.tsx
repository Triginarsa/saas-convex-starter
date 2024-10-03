import SignUpForm from "@/features/auth/components/sign-up-form"

export default function SignUpPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
      <SignUpForm />
    </main>
  )
}
