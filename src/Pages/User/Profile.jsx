import React, { useEffect } from "react"
import { useAuthStore } from "../../store/authStore"
import { useNavigate } from "react-router"

export const Profile = () => {
  const handleLogout = useAuthStore((state) => state.handleLogout)
  const accessToken = useAuthStore((state) => state.accessToken)
  const role = useAuthStore((state) => state.role)
  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken || !role) {
      navigate("/home")
    }
  }, [accessToken, role])

  return (
    <>
      <h1 className="text-2xl font-medium">Profile</h1>

      <h2 className="text-xl font-medium text-[#555]">Welcome, XYZ</h2>

      <div>
        <button
          className="text-black bg-accent py-2 text-xl font-bold text-center rounded-lg shadow-md shadow-black flex justify-center px-4 items-center gap-1"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </>
  )
}
