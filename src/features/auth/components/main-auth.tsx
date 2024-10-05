import { Card, CardContent, CardFooter } from "@/components/ui/card"

import SignInMagicLinkForm from "./auth-magic-link/sign-in-magic-link-form"
import SignUpMagicLinkForm from "./auth-magic-link/sign-up-magic-link-form"
import SignInPasswordBasicForm from "./auth-password-basic/sign-in-password-basic-form"
import SignUpPasswordBasicForm from "./auth-password-basic/sign-up-password-basic-form"
import SignInPasswordVerifyForm from "./auth-password-verify/sign-in-password-verif-form"
import SignUpPasswordVerifyForm from "./auth-password-verify/sign-up-password-verif-form"
import { SignInFooter, SignUpFooter } from "./footer-auth"
import { SignInHeader, SignUpHeader } from "./header-auth"
import MainSocialOauth from "./oauth/main-social-oauth"

interface SocialOAuthOptions {
  github?: boolean
  google?: boolean
}

type variant = "signin" | "signup"

type FormType = "password-basic" | "password-verify" | "magic-link"

interface MainAuthProps {
  variant: variant
  form?: FormType
  socialOAuth?: SocialOAuthOptions | boolean
}

const formComponents = {
  signin: {
    "password-basic": SignInPasswordBasicForm,
    "password-verify": SignInPasswordVerifyForm,
    "magic-link": SignInMagicLinkForm,
  },
  signup: {
    "password-basic": SignUpPasswordBasicForm,
    "password-verify": SignUpPasswordVerifyForm,
    "magic-link": SignUpMagicLinkForm,
  },
}

export default function MainAuth({
  variant,
  form,
  socialOAuth = false,
}: MainAuthProps) {
  const Header = variant === "signin" ? SignInHeader : SignUpHeader
  const Footer = variant === "signin" ? SignInFooter : SignUpFooter
  const Form = form ? formComponents[variant][form] : null

  const renderSocialOAuth = () => {
    if (socialOAuth === false) return null
    if (socialOAuth === true) return <MainSocialOauth />
    return (
      <MainSocialOauth
        showGitHub={socialOAuth.github}
        showGoogle={socialOAuth.google}
      />
    )
  }

  return (
    <Card className="p-0 sm:mx-auto sm:w-full sm:max-w-md md:p-6">
      <Header />
      <CardContent>
        {Form && <Form />}
        {renderSocialOAuth()}
      </CardContent>
      <CardFooter>
        <Footer />
      </CardFooter>
    </Card>
  )
}
