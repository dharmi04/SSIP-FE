import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom" // Import the Link component
import background from "../../assets/bgimage.jpg"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import { useAuthStore } from "../../store/authStore"

const API_URL = import.meta.env.VITE_API_URL

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const query = new URLSearchParams(location.search)
  // console.log(query.get("role"))

  const setAccessToken = useAuthStore((state) => state.setAccessToken)
  const setRole = useAuthStore((state) => state.setRole)

  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  })

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    //CHECKS: If any field is empty
    if (formData.mobile === "" || formData.password === "") {
      toast.error("Please fill all the fields")
      return
    }

    //CHECKS: If the mobile number is valid
    if (formData.mobile.length !== 10) {
      toast.error("Please enter a valid mobile number")
      return
    }

    // Send the data to the server
    try {
      setIsLoading(true)

      if (query.get("role") === "artisan") {
        console.log("Artisan trying to login")
        const res = await axios.post(`${API_URL}/artisan/login`, formData, {
          withCredentials: true,
        })
        const { data } = res
        console.log(data)

        setAccessToken(data.accessToken)
        setRole("artisan")

        // If artisan, then navigate to the dashboard
        navigate("/dashboard/analytics")
      } else if (query.get("role") === "user") {
        console.log("User trying to login")
        const res = await axios.post(`${API_URL}/user/login`, formData, {
          withCredentials: true,
        })
        const { data } = res
        console.log(data)

        setAccessToken(data.token)
        setRole("user")

        // If user, then nvigate to home
        navigate("/home")
      }

      toast.success("Logged in successfully")
      setIsLoading(false)

      // TODO: After login, redirect to the where? Need to figure out
    } catch (error) {
      console.log("Error Logging in Artisan: 👇")
      console.log(error)

      setIsLoading(false)

      if (error.response.status == 403) {
        toast.error("You are not registered")
      } else if (error.response.status == 401) {
        toast.error("Invalid credentials")
      } else {
        toast.error("Something went wrong")
      }
    }
  }

  return (
    <>
      <Toaster />
      <div
        className="flex justify-center items-center h-screen bg-cover bg-opacity-50"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-md md:w-full w-3/4 bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl text-gray-800 mb-4 text-center justify-center font-bold">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-xl font-medium">
                Mobile Number
              </label>
              <input
                type="text"
                required
                id="mobile"
                name="mobile"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter your mobile number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-xl font-medium">
                Password
              </label>
              <input
                type="password"
                required
                id="password"
                name="password"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center my-6">
              <button
                className={`text-black bg-accent py-2 text-xl font-bold text-center rounded-lg shadow-md shadow-black flex justify-center px-4 items-center gap-1
                  ${
                    isLoading
                      ? "cursor-not-allowed opacity-50"
                      : "opacity-100 px-6"
                  }
                `}
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-center">
            Don't have an account? {/* // TODO: Need to Figure out route */}
            <Link to="#" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
