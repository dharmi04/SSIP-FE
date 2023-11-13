import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: Rs.{item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
