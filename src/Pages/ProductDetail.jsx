import React, { useEffect, useState } from "react"
import { Link, useParams, useLocation, useNavigate } from "react-router-dom"
import product from "../assets/product1.jpeg"
import back from "../assets/back_arrow.svg"
import account from "../assets/account.svg"
import { FiChevronLeft } from "react-icons/fi"
import { BsCartFill } from "react-icons/bs"
import { ProductImage } from "../components/Products/ProductImage"
import { ProductInfo } from "../components/Products/ProductInfo"
import { useProductsStore } from "../store/productsStore"

const ProductDetail = () => {
  const allProducts = useProductsStore((state) => state.allProducts)

  const location = useLocation()
  // console.log(location)
  const { state } = location
  // console.log(state)

  const [product, setProduct] = useState()

  const params = useParams()
  // console.log(params)
  const { productId } = params

  useEffect(() => {
    // console.log(allProducts)
    const product = allProducts.find((product) => product._id === productId)
    console.log(product)
    setProduct(product)
  }, [])

  // console.log(product)

  const navigate = useNavigate()

  if (!product) return <h1>Loading...</h1>

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
      <ProductImage src={product.images[0].url} alt={product.name} />

      <ProductInfo
        id={product._id}
        name={product.name}
        description={product.description}
        price={product.price}
        state={state}
        showTryButton={true}
        availableQuantity={product.qty}
      />
    </div>
  )
}
export default ProductDetail
