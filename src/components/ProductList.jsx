// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL= "http://localhost:3000/api/v1/product/"

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of products from the backend when the component mounts
    axios.get('')
      .then((response) => {
        setProducts(response.data.productsData);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
