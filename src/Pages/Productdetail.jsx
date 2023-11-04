import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import product from '../assets/product1.jpeg';
import back from '../assets/back_arrow.svg';
import account from '../assets/account.svg';

const Productdetail = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const { productId } = useParams();

  const products = [
    { id: '1', name: 'Product 1', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante nec ligula volutpat bibendum. Mauris quis est vel ex ultricies fermentum.', price: 324, img: product },
    { id: '2', name: 'Product 2', desc: 'Description 2', price: 324, img: product },
    // Add other product objects here
  ];

  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return (
      <div className="p-4">
        <p>Product not found.</p>
        <Link to="/productpage" className="mt-4 inline-block text-blue-500">
          Go back to products
        </Link>
      </div>
    );
  }
  return (
    <div className="bg-secondary font-serif">
      <div className="flex justify-between items-center mb-4 p-2  ">
        <Link to="/productpage">
          <img src={back} alt="Product" className="mr-2" />
        </Link>
        <img src={account} alt="Account" className="ml-auto" />
      </div>
      <img src={selectedProduct.img} alt={selectedProduct.name} className="mx-auto block mb-4 h-72 mt-6" />
      <div className='mt-10'>
        <div className='bg-white rounded-3xl shadow-black mt-4 p-3 h-full'>
          <div className=' space-x-28 inline-flex'>
          <h1 className="text-3xl font-bold mb-2 p-2 mt-4 flex">{selectedProduct.name}</h1>
          <a className='border mt-4 border-accent shadow-sm shadow-black text-black text-lg flex rounded-lg font-bold h-10 p-2'>Try Now</a>

          </div>
          <p className="text-xl font-medium mb-2 p-2 mt-4">{selectedProduct.desc}</p>
          <div className="flex items-center space-x-30 text-2xl p-2 mt-4">
            <p className="mr-4 flex">Quantity</p>
            <div className='flex'>
              <button
                onClick={decrementQuantity}
                className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full focus:outline-none"
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
          <div className='flex flex-row space-x-36 mt-6'>
            <p className="text-gray-600 mb-4 ml-5 text-2xl font-bold">${selectedProduct.price}</p>
            <a className='bg-accent text-xl font-medium rounded-md p-2'>Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Productdetail;
