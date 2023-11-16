import React, { useState } from "react"
import { Link, useParams, useLocation, useNavigate } from "react-router-dom"
import product from "../assets/product1.jpeg"
import back from "../assets/back_arrow.svg"
import account from "../assets/account.svg"
import { FiChevronLeft } from "react-icons/fi"
import { BsCartFill } from "react-icons/bs"
import { ProductImage } from "../components/Products/ProductImage"
import { ProductInfo } from "../components/Products/ProductInfo"

const ProductDetail = () => {
  const location = useLocation()
  const { state } = location

  const navigate = useNavigate()
  

  return (
    <div className="bg-secondary">
      <div className="flex justify-between items-center mb-4 px-4  pt-4">
        <FiChevronLeft
          className="text-3xl text-primary cursor-pointer"
          onClick={() => {
            navigate(-1) // Go back to previous page
          }}
        />
        {/* <img src={account} alt="Account" className="ml-auto" /> */}
      </div>
      <ProductImage src={state.img} alt={state.name} />

      <ProductInfo
        id={state.id}
        name={state.name}
        state={state}
        showTryButton={true}
      />
    </div>
  )
}
export default ProductDetail
