import React, { useState } from "react"
import { FaUser, FaStore } from "react-icons/fa"
import { useNavigate } from "react-router"

export const GetStartedRegistration = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(null)

  const createAccount = () => {
    if (selectedOption === "user") {
      navigate("/auth/signup/user")
    }
    if (selectedOption === "seller") {
      navigate("/auth/signup/artisian")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-10 font-sans">
            <h1 className="text-black text-5xl font-serif">
              Welcome to KalaSangam!
            </h1>
            <p className="text-gray-700 mt-2 text-lg">
              How would you like to use our platform?
            </p>
            <div className="mt-4 text-black space-y-3">
              <button
                className={`flex gap-4 p-2 rounded-lg bg-white/[0.1] border-[1px] hover:border-accent hover:duration-500 hover:ease-in-out w-full
               ${selectedOption === "user" && " border-accent"}
               `}
                onClick={() => {
                  setSelectedOption("user")
                }}
              >
                <FaUser className="text-[26px] mt-2" />
                <div className="text-left">
                  <p className="text-xl leading-[26px] font-medium">
                    I'm here to buy handicrafts?
                  </p>
                  <p className="text-gray-700 text-base mt-1">
                    Browse and purchase unique handmade handicrafts
                  </p>
                </div>
              </button>
              <button
                className={`flex gap-4 p-2 rounded-lg bg-white/[0.1] border-[1px] hover:border-accent hover:duration-500 hover:ease-in-out w-full
                ${selectedOption === "seller" && " border-accent"}
                `}
                onClick={() => {
                  setSelectedOption("seller")
                }}
              >
                <FaStore className="text-2xl mt-2" />
                <div className="text-left">
                  <p className="text-xl leading-[26px] font-medium">
                    I'm here to sell handicrafts?
                  </p>
                  <p className="text-gray-700 text-base mt-1">
                    Sell your unique handmade handicrafts
                  </p>
                </div>
              </button>
            </div>
            <button
              className={` text-xl px-3 pb-2 py-2 rounded-md mt-8 
                ${
                  selectedOption
                    ? "bg-accent text-white"
                    : "opacity-50 cursor-not-allowed bg-gray-500 text-black"
                }
            `}
              onClick={createAccount}
              disabled={!selectedOption}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
