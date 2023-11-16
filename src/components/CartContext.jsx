// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();



const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.cart, action.payload];
      saveCartToLocalStorage(updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };
    case 'REMOVE_FROM_CART':
      const updatedCartAfterRemoval = state.cart.filter(item => item.id !== action.payload.id);
      saveCartToLocalStorage(updatedCartAfterRemoval);
      return {
        ...state,
        cart: updatedCartAfterRemoval,
      };
    // Add other cases for updating or removing items from the cart
    default:
      return state;
  }
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

// const loadCartFromLocalStorage = () => {
//   // Reset localStorage when loading the cart
//   localStorage.removeItem('cart');
//   return [];
// };


const initialState = {
  cart: loadCartFromLocalStorage(),
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
