import { Separator } from "@/components/ui/separator"

import { SignInWithGitHub } from "./sign-in-with-github"
import { SignInWithGoogle } from "./sign-in-with-google"

interface MainSocialOauthProps {
  showGitHub?: boolean
  showGoogle?: boolean
}

export default function MainSocialOauth({
  showGitHub = true,
  showGoogle = true,
}: MainSocialOauthProps) {
  const hasAnyProvider = showGitHub || showGoogle

  if (!hasAnyProvider) return null

  return (
    <div className="mt-6 grid gap-4 md:gap-6">
      <div className="my-4 grid grid-cols-2 items-center justify-center gap-6">
        <Separator />
        <span className="text-muted-foreground absolute left-1/2 -translate-x-1/2">
          or
        </span>
        <Separator />
      </div>
      <div className="flex gap-2">
        {showGitHub && <SignInWithGitHub />}
        {showGoogle && <SignInWithGoogle />}
      </div>
    </div>
  )
}
