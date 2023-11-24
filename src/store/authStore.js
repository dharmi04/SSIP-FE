import { create } from "zustand"

export const useAuthStore = create((set) => {
  const existingRole = getCookie("role")
  const existingAccessToken = getCookie("accessToken")

  set({ role: existingRole, accessToken: existingAccessToken })

  return {
    role: existingRole || null,
    setRole: (role) => set({ role: role }),
    accessToken: existingAccessToken,
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
  }
})

// export const useAuthStore = create((set) => ({
//   role: null,
//   setRole: (role) => set({ role: role }),
//   accessToken: null,
//   setAccessToken: (accessToken) => set({ accessToken }),
//   handleLogout: () => {
//     // clear the cookies
//     // From stackoverflow :)
//     document.cookie.split(";").forEach((c) => {
//       document.cookie = c
//         .replace(/^ +/, "")
//         .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
//     })

//     return set({ role: null, accessToken: null })
//   },
// }))

// By Github copilot :))
function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(";").shift()
}
