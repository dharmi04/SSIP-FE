import React from "react"
import { Link } from "react-router-dom"
import CatalogProduct from "../components/Products/CatalogProduct"
// import product from "../assets/product1.jpeg"
import NavBar from "../components/NavBar"
import products from "../data/products"

const AllProducts = () => {
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
          <Link key={product.id} to={`/product/${product.id}`} state={product}>
            <CatalogProduct
              img={product.img}
              name={product.name}
              desc={product.desc}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default AllProducts
