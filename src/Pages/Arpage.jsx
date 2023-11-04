import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import account from "../assets/account.svg"
import { FiChevronLeft } from "react-icons/fi"
import { BsCartFill } from "react-icons/bs"

const Arpage = () => {
  const location = useLocation()
  const { state } = location

  return (
    <div>
      <div className="bg-secondary font-serif">
        <div className="flex justify-between items-center mb-4 px-4  pt-4">
          <Link to={`/productpage/${state.id}`} state={state}>
            {/* <img src={back} alt="Product" className="mr-2" /> */}
            <FiChevronLeft className="text-3xl" />
          </Link>
          <img src={account} alt="Account" className="ml-auto" />
        </div>
        {/* <img
          src={state.img}
          alt={state.name}
          className="mx-auto block mb-4 h-72 mt-6 rounded-md"
        /> */}

        <div className="w-screen">
          <model-viewer
            alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
            src={`src/assets/models/ar-${state.id}.glb`}
            ar
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            class="w-full h-[200px]"
          ></model-viewer>
        </div>

        <div className="mt-10">
          <div className="bg-white rounded-tl-[3rem] rounded-tr-[3rem] shadow-black mt-4 p-3 h-full">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-2 p-2 mt-4 flex">
                {state.name}
              </h1>
              {/* <Link
              to="/ar"
              className="border mt-4 border-accent shadow-sm shadow-black text-black text-lg flex rounded-lg font-bold h-10 p-2 mr-4"
            >
              Try Now
            </Link> */}
            </div>
            <p className="text-xl font-medium mb-2 p-2">{state.desc}</p>
            <div className="flex flex-row mt-6 items-center justify-between px-2">
              <div>
                <h1 className="text-[#999999]">Price</h1>
                <p className="mb-4 text-2xl font-bold">Rs.{state.price}</p>
              </div>

              <div className="bg-accent text-xl font-medium rounded-md p-2 flex items-center gap-2">
                <BsCartFill />
                Order Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arpage
