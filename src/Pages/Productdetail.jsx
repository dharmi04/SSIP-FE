import React, { useState } from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import product from "../assets/product1.jpeg"
import back from "../assets/back_arrow.svg"
import account from "../assets/account.svg"
import { FiChevronLeft } from "react-icons/fi"
import { BsCartFill } from "react-icons/bs"

const Productdetail = () => {
  const location = useLocation()
  const { state } = location

  // console.log(state)

  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // const { productId } = useParams()

  // const products = [
  //   {
  //     id: "1",
  //     name: "Product 1",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante nec ligula volutpat bibendum. Mauris quis est vel ex ultricies fermentum.",
  //     price: 324,
  //     img: product,
  //   },
  //   {
  //     id: "2",
  //     name: "Product 2",
  //     desc: "Description 2",
  //     price: 324,
  //     img: product,
  //   },
  //   // Add other product objects here
  // ]

  // const selectedProduct = products.find((product) => product.id === productId)

  // if (!selectedProduct) {
  //   return (
  //     <div className="p-4">
  //       <p>Product not found.</p>
  //       <Link to="/productpage" className="mt-4 inline-block text-blue-500">
  //         Go back to products
  //       </Link>
  //     </div>
  //   )
  // }
  return (
    <div className="bg-secondary font-serif">
      <div className="flex justify-between items-center mb-4 px-4  pt-4">
        <Link to="/home">
          {/* <img src={back} alt="Product" className="mr-2" /> */}
          <FiChevronLeft className="text-3xl" />
        </Link>
        <img src={account} alt="Account" className="ml-auto" />
      </div>
      <img
        src={state.img}
        alt={state.name}
        className="mx-auto block mb-4 h-72 mt-6 rounded-md"
      />
      <div className="mt-10">
        <div className="bg-white rounded-tl-[3rem] rounded-tr-[3rem] shadow-black mt-4 p-3 h-full">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold mb-2 p-2 mt-4 flex w-[67%]">
              {state.name}
            </h1>
            <Link
              to="/ar"
              className="border mt-4 border-accent shadow-sm shadow-black text-black text-sm flex rounded-lg font-bold h-10 p-2 mr-4"
              state={state}
            >
              Try Now
            </Link>
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
          <Link
              to="/buynow"
              state={state}
            >
              <div className="bg-accent text-xl font-medium rounded-md p-2 flex items-center gap-2">
              <BsCartFill />
              Order Now
            </div>
            </Link>

            <Link
              to="/cart"
              state={state}
            >
              <div className="bg-accent text-xl font-medium rounded-md p-2 flex items-center gap-2">
              <BsCartFill />
              Add to Cart
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Productdetail
