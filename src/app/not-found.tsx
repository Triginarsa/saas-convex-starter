"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }
  return (
    <section className="dark:bg-background bg-background ">
      <div className="container mx-auto flex min-h-screen items-center px-6 py-12">
        <div>
          <p className="text-primary dark:text-primary text-sm font-medium">
            404 error
          </p>
          <h1 className="text-secondary-foreground dark:text-secondary-foreground mt-3 text-2xl font-semibold md:text-3xl">
            We can’t find that page
          </h1>
          <p className="text-muted-foreground dark:text-muted-foreground mt-4">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>

          <div className="mt-6 flex items-center gap-x-3">
            <Button
              variant={"outline"}
              onClick={handleGoBack}
              className="gap-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </Button>

            <Button variant={"default"} asChild>
              <Link href="/" className="text-sm tracking-wide">
                Take me home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
