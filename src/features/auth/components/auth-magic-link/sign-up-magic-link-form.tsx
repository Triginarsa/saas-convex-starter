import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPasswordForm() {
  return (
    <div className="mt-4 grid gap-4 md:gap-6">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="janedoe@example.com"
          required
        />
      </div>
      <Button type="submit" className="mt-4 w-full">
        Create Account
      </Button>
    </div>
  )
}
