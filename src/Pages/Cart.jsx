import React from 'react';
import { useCart } from '../components/CartContext';
import { Nav } from '../components/Nav';
import { BsTrash } from 'react-icons/bs';




const Cart = () => {
  const { state, dispatch } = useCart(); // Using the useCart hook to access the cart state and dispatch
  const { cart } = state; // Extracting the cart array from the state

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeFromCart = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: itemId,
      },
    });
  };

  return (
    <div>

      <h2 className=" mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold pb-3 pt-3 font-serif">Your Cart</h2>
    <div className="container mx-auto mt-8 text-xl">
      

      <div className="flex flex-wrap p-3">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
             <img src={item.image} alt={item.name} className="mr-4 w-24 h-24" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: Rs.{item.price * item.quantity}</p>
              <button
                className="text-white hover:text-red-700 text-xl font-semibold pt-3"
                onClick={() => removeFromCart(item.id)}
              >
                <BsTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-3">
        <hr className="border-t border-gray-300 my-4" />

        <div className="flex justify-end">
          <div className="text-xl font-semibold">Total Price: Rs.{totalPrice}</div>
        </div>
      </div>
    </div>
    <Nav />
    </div>
  );
};

export default Cart;
