import React, {useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import CatalogProduct from "../components/Products/CatalogProduct"
// import product from "../assets/product1.jpeg"
// import NavBar from "../components/NavBar"
import products from "../data/products"
import { IoChevronBack } from "react-icons/io5"
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL
const AllProducts = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/products`);
  //       setProducts(response.data.products);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []); 

  return (
    <div className="bg-white pb-8">
      {/* <div>
        <NavBar />
      </div> */}
      <div className="px-4 pt-6 pb-4 text-2xl text-primary flex items-center gap-2 sticky top-0 bg-white">
        <IoChevronBack
          className="text-[25px] cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="font-sans font-semibold">All Popular Products</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 pb-6">
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
