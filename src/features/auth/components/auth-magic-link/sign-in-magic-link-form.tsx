import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPasswordForm() {
  return (
    <div className="mt-4 grid gap-4 md:gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <Button type="submit" className="mt-4 w-full">
        Login
      </Button>
    </div>
  )
}
