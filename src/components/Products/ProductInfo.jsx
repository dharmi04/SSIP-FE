import React, { useState } from "react"
import { Link } from "react-router-dom"
import { BsCartFill } from "react-icons/bs"

export const ProductInfo = ({ id, name, state, showTryButton }) => {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <>
      <div className="mt-10">
        <div className="bg-white rounded-tl-[3rem] rounded-tr-[3rem] shadow-black mt-4 p-3 h-full">
          <div className="flex justify-between gap-2 items-start">
            <h1 className="text-3xl font-bold mb-2 p-2 mt-4 flex">{name}</h1>

            {showTryButton && (
              <Link
                to={`/product/${id}/ar`}
                className="border mt-4 border-accent shadow-sm shadow-black text-black text-sm rounded-lg font-bold  p-2 mr-4 w-[50%] text-center"
                state={state}
              >
                Try Now
              </Link>
            )}
          </div>
          <p className="text-xl font-medium mb-2 p-2">{state.desc}</p>
          <div className="flex items-center space-x-30 text-2xl p-2 mt-4">
            <p className="mr-4 flex">Quantity</p>
            <div className="flex gap-1">
              <button
                onClick={decrementQuantity}
                className="bg-gray-300 text-gray-700 px-[14px] py-1 rounded-full focus:outline-none"
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="bg-gray-300 text-gray-700  px-[14px] py-1 rounded-full focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-row mt-6 items-center justify-between px-2">
            <div>
              <h1 className="text-[#999999]">Price</h1>
              <p className="mb-4 text-2xl font-bold">Rs.{state.price}</p>
            </div>
          </div>
          <div className="flex flex-row space-x-8 justify-between ">
            <Link to="/buynow" state={state}>
              <div className="bg-accent text-xl font-medium rounded-md p-2 flex items-center gap-2">
                <BsCartFill />
                Order Now
              </div>
            </Link>

            <Link to="/cart" state={state}>
              <div className="bg-accent text-xl font-medium rounded-md p-2 flex items-center gap-2">
                <BsCartFill />
                Add to Cart
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
