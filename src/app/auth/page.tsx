"use client";

import api from "@/common/hooks/api";
import { useAuthStore } from "@/common/stores/auth";
import { LoginForm } from "@/components/login-form";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const setToken = useAuthStore(state => state.setToken)
  const setUser = useAuthStore(state => state.setUser)
  const router = useRouter()

  const handleLogin = async (form: unknown) => {
    await api('/v1/auth/sign-in', {
      method: 'POST',
      data: form
    }).then(res => {
      const data = res.data
      setToken(data.accessToken)
      setUser(data.user)
      router.push('/')
    })
  }

  return (
    <div className="flex h-screen items-center justify-center bg-muted overflow-hidden">
      <div className="w-full max-w-sm md:max-w-4xl p-6 md:p-10">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}
