import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { Nav } from '../components/Nav';
import { toast } from 'react-hot-toast';


const API_URL = import.meta.env.VITE_API_URL;

const BuyNow = () => {
  const location = useLocation();
  const { state } = location;
  

  const handleStripePayment = async () => {
    try {
      // Simulate a delay for demonstration purposes (replace with actual payment logic)
      setTimeout(async () => {
        console.log('Payment processed for:', state);
        // Redirect to a thank you page or handle the success message

        // Example: Make an API call for Stripe Checkout
        const response = await axios.post(`${API_URL}/checkout`, {
          products: [
            {
              id: state.id,
              artisian: state.artisian,
              qty: state.quantity,
              name: state.name,
              price: state.price,
            },
          ],
          customer: 'customer_id_here', // Replace with actual customer ID
        });

        // Redirect to the Stripe Checkout session URL
        window.location.href = response.data;
      }, 2000);
    } catch (error) {
      console.error('Error processing Stripe Checkout:', error.message);
    }
  };

  const handleCashOnDelivery = async () => {
    try {
      // Simulate a delay for demonstration purposes (replace with actual logic)
      setTimeout(async () => {
        console.log('Cash on Delivery successful');

        // Example: Make an API call for Cash on Delivery
        await axios.post(`${API_URL}/cod`, {
          products: [
            {
              id: state.id,
              artisian: state.artisian,
              qty: state.quantity,
            },
          ],
          customer: 'customer_id_here', // Replace with actual customer ID
        });

        // Redirect to a thank you page or handle the success message
        toast.success("order placed")
      }, 2000);
    } catch (error) {
      console.error('Error processing Cash on Delivery:', error.message);
    }
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
            onClick={handleStripePayment}
            className="bg-accent text-white rounded-lg py-2 px-6 font-bold hover:bg-green-600"
          >
            Proceed to Payment
          </button>
        </div>
        <br></br>
        <div className="flex justify-center">
          {/* Add a function for Cash on Delivery */}
          <button
            onClick={handleCashOnDelivery}
            className="bg-accent text-white rounded-lg py-2 px-6 font-bold hover:bg-green-600"
          >
            Cash on Delivery
          </button>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default BuyNow;
