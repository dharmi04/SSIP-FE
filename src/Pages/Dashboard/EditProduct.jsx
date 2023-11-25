import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/${productId}`);
        const { data } = response;
        setProduct(data.productData);
        setIsFetching(false);
      } catch (error) {
        console.error("Error fetching product for editing:");
        console.error(error);
        setIsFetching(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleUpdate = async () => {
    try {
      // Send a PUT request to update the product
      await axios.put(`${API_URL}/product/update/${productId}`, product);
      // Handle successful update, e.g., redirect to inventory page
    } catch (error) {
      console.error("Error updating product:");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto text-xl">
      <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
        Edit Product
      </h2>

      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-1">
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-bold mb-1">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="button" onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
