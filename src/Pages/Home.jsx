import React, { useState } from "react"
import NavBar from "../components/NavBar"
import search from "../assets/search.svg"
import ProductCard from "../components/Products/ProductCard.jsx"
import { Link } from "react-router-dom"
import products from "../data/products.js"
import { Nav } from "../components/Nav.jsx"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular")
  return (
    <>
      <div className="bg-secondary pb-12">
        <div className="bg-primary rounded-bl-[70px] rounded-br-[70px]">
          {/* Below is old */}
          {/* <div>
            <NavBar />
          </div> */}
          <div className="flex items-center justify-center pt-10">
            <p className="text-white font-serif text-3xl justify-center text-center">
              Discover your cherished handmade decorations
            </p>
          </div>
          <div className="relative mt-4 flex justify-center">
            <span className="bg-grey1 pt-2 pl-3 rounded-l-md rounded-bl-md">
              <img src={search} alt="search" />
            </span>
            <span>
              <input
                type="text"
                placeholder="Search Here"
                className="pl-10 pr-4 py-2 bg-grey1 rounded-sm w-80 text-lg font-mono
              rounded-tr-md rounded-br-md focus:outline-none text-white
              "
              />
            </span>
          </div>

          {/* buttons */}
          <div
            className="flex flex-row font-sans text-white space-x-4 justify-center items-center mt-7 text-xl
          pb-7"
          >
            <button
              className={`rounded-md w-auto text-lg py-1 px-2 border-white ${
                selectedCategory === "Popular" ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedCategory("Popular")}
            >
              Popular
            </button>
            <button
              className={`rounded-md w-auto text-lg py-1 px-2 border-white ${
                selectedCategory === "Vase" ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedCategory("Vase")}
            >
              Vase
            </button>
            <button
              className={`rounded-md w-auto text-lg py-1 px-2 border-white ${
                selectedCategory === "Pots" ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedCategory("Pots")}
            >
              Pots
            </button>
          </div>
        </div>
        <div className="flex flex-row space-x-7 font-sans text-justify p-5 mt-4">
          <p className="flex text-black font-medium flex-grow text-2xl">
            {selectedCategory}
          </p>
          <Link
            to="/all-products"
            className="flex text-grey1 text-base underline"
          >
            View All
          </Link>
        </div>

        <div className="p-4">
          <div className="flex overflow-x-auto whitespace-nowrap w-full gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                img={product.img}
                name={product.name}
                desc={product.desc}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Nav /> */}
    </>
  )
}

export default Home
