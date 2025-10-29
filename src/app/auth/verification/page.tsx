"use client";

import { VerificationForm } from "@/components/ui/auth/verification-form";

export default function SignIn() {
  return (
    <div className="flex h-screen justify-center bg-muted overflow-hidden">
      <div className="w-full max-w-sm md:max-w-4xl p-6 md:p-10">
        <VerificationForm />
      </div>
    </div>
  );
}
