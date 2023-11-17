import { create } from "zustand"

export const useAuthStore = create((set) => ({
  role: null,
  setRole: (role) => set({ role }),
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
}))
