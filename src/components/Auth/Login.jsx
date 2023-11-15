import React, { useState } from "react"
import { Link } from "react-router-dom" // Import the Link component
import background from "../../assets/bgimage.jpg"

const Login = () => {
  const [email, setEmail] = useState("")
  const [mobilenumber, setmobileNumber] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with email:", email)
  }

  const isFormValid = name && email && password // Check if all fields are filled

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-opacity-50"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-md md:w-full w-3/4 bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
        <h2 className="text-2xl text-gray-800 mb-4 text-center justify-center font-bold">
          Login
        </h2>
        <div className="mb-4 text-black">
          <label htmlFor="name" className="block text-xl font-medium">
            Name
          </label>
          <input
            type="text"
            required
            id="name"
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Myname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl font-medium">
            Mobile Number
          </label>
          <input
            type="text"
            required
            id="number"
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="youremail@example.com"
            value={mobilenumber}
            onChange={(e) => setmobileNumber(e.target.value)}
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
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center my-6">
          <Link
            to={isFormValid ? "/home" : ""}
            className={`text-black bg-accent w-32 py-2 text-xl font-bold text-center rounded-lg shadow-md shadow-black flex justify-center px-4 items-center gap-1 ${
              isFormValid ? "" : ""
            }`}
          >
            <button className="flex">LogIn</button>
          </Link>
        </div>
        <p className="text-gray-600 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
