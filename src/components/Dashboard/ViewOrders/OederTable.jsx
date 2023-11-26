

import React from 'react';
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL
const OrderTable = () => {

  const [orders,setOrders] = React.useState(null)

  React.useEffect(() => {
    const fetchOrder = async() => {
      const data = await axios.get(`${API_URL}/order`)
      setOrders(data.data)
    }
    fetchOrder()
  },[])

  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Status</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order._id}>
            <td>{order.product.name}</td>
            <td>{order.status}</td>
            <td>{order.qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
