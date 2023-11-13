import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Checkout = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    // Handle the scenario where there's no product data in the state
    return (
      <div>
        <p>No product selected for checkout</p>
      </div>
    );
  }

  const handlePayment = () => {
    // Logic for payment processing can be added here
    console.log('Payment processed for:', state);
    // Redirect to a thank you page or handle the success message
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center ">
        <div className="flex items-center p-3">
          <img src={state.img} alt={state.name} className="mr-4 w-24 h-24" />
          <div>
            <h3 className="mb-1 text-xl font-semibold">{state.name}</h3>
            <p className="text-black text-2xl font-semibold">Price: Rs.{state.price}</p>
          </div>
        </div>

        {/* Display more product information if needed */}
        <div className="flex justify-center">
          <button onClick={handlePayment} className='bg-accent rounded-xl p-2 text-center font-bold'>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
