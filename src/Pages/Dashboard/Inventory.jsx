import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { Sidebar } from "../../components/Dashboard/Sidebar";
import { Nav } from "../../components/Dashboard/Nav";
import toast, { Toaster } from "react-hot-toast"

const API_URL = import.meta.env.VITE_API_URL;

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/all`);
        const { data } = response;
        console.log(data);

        setProducts(data.productsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching inventory:");
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchInventory();
  }, []);

  const handleDelete = async (productId) => {
    try {
      // Send a DELETE request to your API to delete the product
      // toast.alert("Are you sure you want to delete this produtc?")
      await axios.delete(`${API_URL}/product/delete/${productId}`);
      
      
      // Remove the deleted product from the state
      setProducts((prevProducts) => prevProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
  
      if (error.response) {

        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  // const handleEdit =async (productId)=>{
  //   try{
  //     await axios.delete(`${API_URL}/product/update/${productId}`);
  //   } catch (error){
  //     console.error("Error updating product:", error);
  //   }

  //   //edit product logic
  // }
  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto text-xl">
      <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
        Your Inventory
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded-md shadow-md">
            <Link to={`/editproduct/${product._id}`}>
              <img
                src={product.images[0].url}
                alt="Product Image"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
            </Link>
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <span className="flex space-x-7">

            <p className="flex-start text-sm text-black font-bold">Price: Rs. {product.price}</p>
            <button className="flex-end" onClick={() => handleDelete(product._id)}><BsTrash /></button>
            </span>
            <Link to="/artisian/editproduct">

            <button className="text-sm"  >Edit product details</button>
            </Link>
            
          </div>
        ))}
      </div>

      <Nav />
    </div>
  );
};

export default Inventory;
