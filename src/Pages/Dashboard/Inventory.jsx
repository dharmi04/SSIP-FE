import React, { useEffect, useState } from "react"
import axios from "axios"
import { Sidebar } from "../../components/Dashboard/Sidebar"
import { Nav } from "../../components/Dashboard/Nav"

const API_URL = import.meta.env.VITE_API_URL

const Inventory = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/all`)
        const { data } = response
        console.log(data)

        setProducts(data.productsData)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching inventory:")
        console.error(error)
        setIsLoading(false)
      }
    }

    fetchInventory()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto text-xl">
      <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
        Your Inventory
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={product.images[0].url}
              alt="Product Imsage"
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-600">Price: Rs. {product.price}</p>
          </div>
        ))}
      </div>

      <Nav />
    </div>
  )
}

export default Inventory
