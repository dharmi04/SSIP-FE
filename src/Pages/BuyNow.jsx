import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Nav } from '../components/Nav';

const BuyNow = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return (
      <div className="text-center mt-8">
        <p className="text-red-500">No product selected for checkout</p>
      </div>
    );
  }

  const handlePayment = () => {
    // Simulate a delay for demonstration purposes (replace with actual payment logic)
    setTimeout(() => {
      console.log('Payment processed for:', state);
      // Redirect to a thank you page or handle the success message
    }, 2000);
  };

  return (
    <div className="container mx-auto">
      <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
        Confirm Purchase
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center p-3">
          <img src={state.img} alt={state.name} className="mr-4 w-24 h-24" />
          <div>
            <h3 className="mb-1 text-xl font-semibold">{state.name}</h3>
            <p className="text-black text-2xl font-semibold">Price: Rs.{state.price}</p>
          </div>
        </div>

        {/* Display more product information if needed */}
        <div className="flex justify-center">
          <button
            onClick={handlePayment}
            className="bg-accent text-white rounded-lg py-2 px-6 font-bold hover:bg-green-600"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default BuyNow;
