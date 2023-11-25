import { create } from "zustand"
import axios from "axios"

export const useProductsStore = create((set) => {
  const API_URL = import.meta.env.VITE_API_URL
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/product/all`)
      const { data } = response

      set({ allProducts: data.productsData })
    } catch (error) {
      console.log("Error fetching all products")
      console.log(error)
    }
  }
  fetchProducts()

  return {
    allProducts: [],
    fetchProducts: fetchProducts,
  }
})
