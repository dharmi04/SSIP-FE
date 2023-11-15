import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import account from "../assets/account.svg"
import { FiChevronLeft } from "react-icons/fi"
import { ProductInfo } from "../components/Products/ProductInfo"

const AR = () => {
  const location = useLocation()
  const { state } = location

  const navigate = useNavigate()

  return (
    <div className="bg-secondary font-serif">
      <div className="flex justify-between items-center mb-4 px-4  pt-4">
        <FiChevronLeft
          className="text-3xl"
          onClick={() => {
            navigate(-1) // Go back to previous page
          }}
        />
        <img src={account} alt="Account" className="ml-auto" />
      </div>

      <div className="w-screen">
        <model-viewer
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src={`/src/assets/models/ar-${state.id}.glb`}
          ar
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
          class="w-full h-[200px]"
        ></model-viewer>
      </div>

      <ProductInfo
        id={state.id}
        name={state.name}
        state={state}
        showTryButton={false}
      />
    </div>
  )
}
export default AR
