import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Nav } from '../components/Nav';

const Inventory = ({ match }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchInventory = async () => {
//       try {
//         const response = await axios.get(`/inventory/${match.params.id}`);
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching inventory:', error);
//       }
//     };

//     fetchInventory();
//   }, [match.params.id]);

  return (
    <div className="container mx-auto text-xl">
      <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
        Your Products
      </h2>
     
      <Nav />
    </div>
  );
};

export default Inventory;
