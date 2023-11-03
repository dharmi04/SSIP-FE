import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import product from '../assets/product1.jpeg';
import NavBar from '../components/NavBar';

const ProductPage = () => {
  const products = [
    { id: 1, img: product, name: 'Product 1', desc: 'Description 1', price: 324 },
    { id: 2, img: product, name: 'Product 2', desc: 'Description 2', price: 324 },
    // Add other product objects here
  ];

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {products.map((product) => (
          <Link key={product.id} to={`/productpage/${product.id}`}>
            <Product img={product.img} name={product.name} desc={product.desc} price={product.price} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
