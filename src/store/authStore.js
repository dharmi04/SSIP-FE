import { create } from "zustand"

export const useAuthStore = create((set) => ({
  role: null,
  setRole: (role) => set({ role: role }),
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  handleLogout: () => {
    // clear the cookies
    // From stackoverflow :)
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    })

    return set({ role: null, accessToken: null })
  },
}))
