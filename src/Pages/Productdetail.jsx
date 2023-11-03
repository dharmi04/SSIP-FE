import React from 'react';
import { Link, useParams } from 'react-router-dom';
import product from '../assets/product1.jpeg';

const Productdetail = () => {
  // Retrieve the product ID from the URL
  const { productId } = useParams();

  // Assuming you have a list of products (you can replace this with actual product data)
  const products = [
    { id: '1', name: 'Product 1', desc: 'Description 1', price: 324, img: product },
    { id: '2', name: 'Product 2', desc: 'Description 2', price: 324, img: product },
    // Add other product objects here
  ];

  // Find the selected product based on the product ID
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return (
      <div>
        <p>Product not found.</p>
        <Link to="/productpage">Go back to products</Link>
      </div>
    );
  }

  return (
    <div>
      <img src={selectedProduct.img} alt={selectedProduct.name} />
      <h1>{selectedProduct.name}</h1>
      <p>{selectedProduct.desc}</p>
      <p>${selectedProduct.price}</p>
      <Link to="/productpage">Go back to products</Link>
    </div>
  );
};

export default Productdetail;
