"use client"

import Link from "next/link"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { IoIosArrowBack } from "react-icons/io"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function EmailOtpForm() {
  return (
    <Card className="p-0 sm:mx-auto sm:w-full sm:max-w-md md:p-6">
      <CardHeader>
        <CardTitle className="text-base">
          <div className="flex content-center">
            <Link href="/register">
              <IoIosArrowBack className="mr-2 size-6" />
            </Link>
            Verify your email{" "}
          </div>
        </CardTitle>
        <CardDescription>
          We have sent you an email with a one-time password (OTP) to verify
          your email address.
          <div className="text-primary mt-4 text-base font-normal">
            janedoe@example.com
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-4 grid gap-4 md:gap-6">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-muted-foreground text-sm">
            Didn&apos;t receive the email?{" "}
            <Link href="#" className="text-primary hover:underline">
              Resend OTP
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
