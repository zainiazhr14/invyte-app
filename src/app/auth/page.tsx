"use client";

import { AuthForm } from "@/components/ui/auth/auth-form";

export default function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center bg-muted overflow-hidden">
      <div className="w-full max-w-sm md:max-w-4xl p-6 md:p-10">
        <AuthForm />
      </div>
    </div>
  );
}
