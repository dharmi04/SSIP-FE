import React, { useState } from "react"
import { Link } from "react-router-dom" // Import the Link component
import background from "../../assets/bgimage.jpg"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import { useAuthStore } from "../../store/authStore"
import { useNavigate } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL

export const ArtisanSignup = () => {
  const navigate = useNavigate()

  const setAccssToken = useAuthStore((state) => state.setAccessToken)
  const setRole = useAuthStore((state) => state.setRole)

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    age: "",
    address: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleRegister = async () => {
    // Checks: If any field is empty
    if (
      formData.mobile === "" ||
      formData.name === "" ||
      formData.age === "" ||
      formData.address === "" ||
      formData.password === ""
    ) {
      toast.error("Please fill all the fields")
      return
    }

    // Checks: If the mobile number is valid
    if (formData.mobile.length !== 10) {
      toast.error("Please enter a valid mobile number")
      return
    }

    // Send the data to the server
    try {
      setIsLoading(true)
      const res = await axios.post(`${API_URL}/artisan/register`, formData, {
        withCredentials: true,
      })
      // console.log(res)
      const { data } = res
      console.log(data)
      setIsLoading(false)
      toast.success("Registered Successfully")

      setAccssToken(data.accessToken)
      setRole("artisian")

      // set to local storage
      localStorage.setItem("accessToken", data.accessToken)
      localStorage.setItem("role", "artisian")

      // ?: Once the user is registered, redirect them to either login page or dashboard

      navigate("/dashboard/analytics")
    } catch (error) {
      console.log("Error Registering Artisan: 👇")
      console.log(error)

      if (error.response.status == 403) {
        toast.error("Mobile number already exists")
      } else {
        toast.error("Something went wrong")
      }
      setIsLoading(false)
    }
  }

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
      />
      <div
        className="flex justify-center items-center h-screen bg-cover bg-opacity-50"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-md md:w-full w-3/4 bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl text-gray-800 mb-4 text-center justify-center font-bold">
            SignUp
          </h2>
          <form>
            <div className="mb-4 text-black">
              <label
                htmlFor="mobile"
                className="block text-xl font-medium"
                text-black
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                className="w-full p-2 mt-1 border rounded-md text-white"
                placeholder="Enter your mobile number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 text-black">
              <label
                htmlFor="name"
                className="block text-xl font-medium text-black"
              >
                Name
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                className="w-full p-2 mt-1 border rounded-md text-white"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-xl font-medium text-black"
              >
                Address
              </label>
              <textarea
                required
                id="address"
                name="address"
                className="w-full p-2 mt-1 border rounded-md text-white"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              >
                {" "}
              </textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-xl font-medium text-black"
              >
                Age
              </label>
              <input
                type="number"
                required
                id="age"
                name="age"
                className="w-full p-2 mt-1 border rounded-md text-white"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xl font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                required
                id="password"
                name="password"
                className="w-full p-2 mt-1 border rounded-md text-white"
                placeholder="Enter Strong Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </form>

          <div className="flex items-center justify-center my-6">
            <button
              className={`text-black bg-accent py-2 text-xl font-bold text-center rounded-lg shadow-md shadow-black flex justify-center px-4 items-center gap-1
                ${
                  isLoading
                    ? "cursor-not-allowed opacity-50 px-4"
                    : "opacity-100"
                }
              `}
              onClick={handleRegister}
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
          <p className="text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
