"use client"

import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "../button"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"

export function VerificationForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [value, setValue] = React.useState("")

  React.useEffect(() => {
    if (!searchParams.get("token")) {
      router.replace('/auth')
    }
  })

  return (
    <div className="space-y-2 w-max mx-auto text-center">
      <div className="relative w-40 h-18 mx-auto mb-6">
        <Image
          src="/assets/img/logo-with-mail.png"
          alt="logo"
          fill
          className="!w-40 object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <p className="text-xl md:text-2xl font-bold !mb-2">Verify Your Email</p>
      <div className="mb-4">
        <p className="text-description">Enter the code we've sent to your inbox email</p>
        <p className="text-description">Didn't get the code? <Button variant="link" className="w-max !p-0 h-max">Resend it</Button></p>
      </div>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup className="!w-full">
          <InputOTPSlot index={0} className="w-[20%] h-13" />
          <InputOTPSlot index={1} className="w-[20%] h-13" />
          <InputOTPSlot index={2} className="w-[20%] h-13" />
          <InputOTPSlot index={3} className="w-[20%] h-13" />
          <InputOTPSlot index={4} className="w-[20%] h-13" />
          <InputOTPSlot index={5} className="w-[20%] h-13" />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        <Button className="text-white w-full mt-4 h-10">Verify</Button>
      </div>
    </div>
  )
}
