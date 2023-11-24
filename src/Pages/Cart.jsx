import React from 'react';
import { useCart } from '../components/CartContext';
import { Nav } from '../components/Nav';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeFromCart = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: itemId,
      },
    });
  };
  const handlePayment = () => {
    // Simulate a delay for demonstration purposes (replace with actual payment logic)
    setTimeout(() => {
      console.log('Payment processed for:', state);
      // Redirect to a thank you page or handle the success message
    }, 2000);
  };

  return (
    <div className="container mx-auto text-xl">
      <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
        Your Cart
      </h2>

      <div className="flex flex-wrap p-3">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center mb-4  pb-4">
            <img src={item.image} alt={item.name} className="mr-4 w-24 h-24" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: Rs.{item.price * item.quantity}</p>
              <button
                className="text-black hover:text-red-700 text-xl font-semibold pt-3"
                onClick={() => removeFromCart(item.id)}
              >
                <BsTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className=" p-3">
        <hr className=" my-4" />

        <div className="flex justify-end">
          <div className="text-xl font-semibold">Total Price: Rs.{totalPrice}</div>
        </div>


        <div className="flex justify-end mt-4">
          <button
            onClick={handlePayment}
            className="bg-accent text-white rounded-lg py-2 px-6 font-bold hover:bg-gray-900"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Cart;
