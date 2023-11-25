import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BsCartFill } from "react-icons/bs"
import { useCart } from "../CartContext"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

const API_URL = import.meta.env.VITE_API_URL

export const ProductInfo = ({
  id,
  name,
  description,
  price,
  state,
  showTryButton,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [customerId, setCustomerId] = useState("")
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  useEffect(() => {
    // set from cookie
    const cookie = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .map((cookie) => ({ key: cookie[0].trim(), value: cookie[1] }))
    // console.log(cookie)

    const customerCookie = cookie.find((cookie) => cookie.key === "userId")
    // console.log(customerCookie)

    if (customerCookie) {
      setCustomerId(customerCookie.value)
    }
  }, [])

  const [quantity, setQuantity] = useState(1)
  // const { dispatch } = useCart()
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const addToCart = async () => {
    console.log(customerId)
    setIsLoading(true)
    try {
      const response = await axios.post(`${API_URL}/cart/add`, {
        customer: customerId,
        productId: "656102cf53b7e77bd2c0f0c9",
      })
      const { data } = response
      console.log(data)
      setIsLoading(false)
      toast.success("Added to cart")
      setIsAddedToCart(true)
    } catch (error) {
      console.log("Error adding to cart")
      console.log(error)
      toast.error("Error adding to cart")
      setIsLoading(false)
    }

    // dispatch({
    //   type: 'ADD_TO_CART',
    //   payload:{ id,
    //     name,
    //     quantity,
    //     price: state.price,
    //     image: state.image, }

    // })
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="mt-10 text-black">
        <div className="bg-white rounded-tl-[3rem] rounded-tr-[3rem] shadow-black mt-4 p-3 h-full">
          <div className="flex justify-between gap-2 items-start">
            <h1 className="text-3xl font-semibold mb-2 p-2 mt-4 flex font-sans">
              {name}
            </h1>

            {showTryButton && (
              <Link
                to={`/product/${id}/ar`}
                className="border mt-5 border-accent shadow-sm shadow-black text-black text-sm rounded-lg p-2 mr-4 w-[50%] text-center"
                state={state}
              >
                Try Now
              </Link>
            )}
          </div>
          <p className="text-xl font-sans mb-2 p-2">{description}</p>
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
              <p className="mb-4 text-2xl font-bold text-accent">Rs.{price}</p>
            </div>
          </div>
          <div className="flex flex-row space-x-8 pb-16">
            <Link to="/buynow" state={state}>
              <div className="bg-accent text-xl font-medium rounded-md p-2 flex items-center gap-2">
                <BsCartFill />
                Order Now
              </div>
            </Link>

            <button
              className={`bg-accent  text-xl font-medium rounded-md p-2 flex items-center gap-2
              ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
              ${isAddedToCart ? "opacity-70 cursor-not-allowed" : ""}
              `}
              onClick={addToCart}
              disabled={isLoading || isAddedToCart}
            >
              <BsCartFill />
              {isLoading
                ? "Adding to cart"
                : isAddedToCart
                ? "Added to cart"
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
