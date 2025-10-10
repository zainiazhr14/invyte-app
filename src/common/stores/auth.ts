// store/authStore.ts
import { create } from "zustand";
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  user: Record<string, unknown> | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  setUser: (user: Record<string, unknown>) => void;
  clearUser: () => void
}

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';

export const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get(TOKEN_KEY) || null,
  user: Cookies.get(USER_KEY) ? JSON.parse(Cookies.get(TOKEN_KEY)!) : null,
  setToken: (token) => {
    Cookies.set(TOKEN_KEY, token)
    set({ token })
  },
  clearToken: () => {
    Cookies.remove(TOKEN_KEY)
    set({ token: null })
  },
  setUser: (user) => {
    Cookies.set(USER_KEY, JSON.stringify(user))
    set({ user })
  },
  clearUser: () => {
    Cookies.remove(USER_KEY)
    set({ user: null })
  }
}));
