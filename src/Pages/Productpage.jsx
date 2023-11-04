import React from "react"
import { Link } from "react-router-dom"
import Product from "../components/Product"
import product from "../assets/product1.jpeg"
import NavBar from "../components/NavBar"

const ProductPage = () => {
  const products = [
    {
      id: "1",
      name: "Product 1",
      desc: "A collection of vases, beautifully designed by women artisans",
      price: 324,
      img: product,
    },
    {
      id: "2",
      name: "Product 2",
      desc: "Description 2",
      price: 324,
      img: product,
    },
    // Add other product objects here
  ]
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="px-6 pt-6 text-2xl">
        <h1>All Popular Products</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 py-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/productpage/${product.id}`}
            state={product}
          >
            <Product
            // img={product.img}
            // name={product.name}
            // desc={product.desc}
            // price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default ProductPage