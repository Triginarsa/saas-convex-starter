import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { SignInWithGitHub } from "./oauth/sign-in-with-github"
import { SignInWithGoogle } from "./oauth/sign-in-with-google"

export default function SignUpForm() {
  return (
    <Card className="sm:mx-auto sm:w-full sm:max-w-md p-0 md:p-6">
      <CardHeader>
        <CardTitle className="text-base gap-2">
          <div className="text-6xl">📦</div>
          Create your account
        </CardTitle>
        <CardDescription>Welcome! Please sign up to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:gap-6 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="janedoe@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Jane Doe" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="*******"
              required
            />
          </div>
          <Button type="submit" className="w-full mt-4">
            Create Account
          </Button>
          <div className="grid grid-cols-2 gap-6 justify-center items-center my-4">
            <Separator />
            <span className="absolute left-1/2 transform -translate-x-1/2 text-muted-foreground">
              or
            </span>
            <Separator />
          </div>
          <div className="flex gap-2">
            <SignInWithGitHub />
            <SignInWithGoogle />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="mt-4 text-center items-center w-full text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="hover:underline text-primary">
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
