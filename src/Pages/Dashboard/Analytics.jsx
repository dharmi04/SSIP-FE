import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs"
import {
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts"
import NavBar from "../../components/NavBar"

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
]

// Sample recent orders data
const recentOrdersData = [
  {
    orderStatus: "Shipped",
    productId: 1,
    customerId: 1,
  },
  {
    orderStatus: "Pending",
    productId: 2,
    customerId: 2,
  },
  {
    orderStatus: "Delivered",
    productId: 3,
    customerId: 3,
  },
]

export default function Analytics() {
  const data = [
    {
      name: "Product 1",
      2022: 4000,
      2023: 2400,
      amt: 2400,
    },
    {
      name: "Product 2",
      2022: 3000,
      2023: 1398,
      amt: 2210,
    },
    {
      name: "Product 3",
      2023: 2000,
      2022: 9800,
      amt: 2290,
    },
    {
      name: "Product 4",
      2023: 1890,
      2022: 4800,
      amt: 2181,
    },
    {
      name: "Product 5",
      2023: 2390,
      2022: 3800,
      amt: 2500,
    },
    {
      name: "Product 6",
      2023: 3490,
      2022: 4300,
      amt: 2100,
    },
  ]

  const piedata = [
    { name: "Product 1", value: 400 },
    { name: "Product 2", value: 300 },
    { name: "Product 3", value: 300 },
    { name: "Product 4", value: 200 },
    { name: "Product 5", value: 278 },
    { name: "Product 6", value: 189 },
  ]

  return (
    <div className="bg-secondary">
      {/* <NavBar /> */}
      <main className=" text-black font-sans p-3">
        <div className="text-5xl flex items-center justify-center font-serif">
          <h3>Analytics</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="card bg-accent rounded-md p-2">
            <div className="card-inner flex items-center justify-between">
              <h3>TOTAL SALES</h3>
              <BsFillArchiveFill className="card_icon text-white" />
            </div>
            <h1>120</h1>
          </div>
          <div className="card bg-accent rounded-md p-2">
            <div className="card-inner flex items-center justify-between">
              <h3>CATEGORIES</h3>
              <BsFillGrid3X3GapFill className="card_icon text-white" />
            </div>
            <h1>5</h1>
          </div>
          <div className="card bg-accent rounded-md p-2">
            <div className="card-inner flex items-center justify-between">
              <h3>CUSTOMERS</h3>
              <BsPeopleFill className="card_icon text-white" />
            </div>
            <h1>13</h1>
          </div>
          <div className="card bg-accent rounded-md p-2">
            <div className="card-inner flex items-center justify-between">
              <h3>NOTIFICATIONS</h3>
              <BsFillBellFill className="card_icon text-white" />
            </div>
            <h1>18</h1>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="2022"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="2023" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          {/* <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={piedata}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {piedata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer> */}
        </div>

        {/* Recent Orders Table */}
        <div className="p-4">
          <h4>Recent Orders</h4>
          <div className="overflow-x-auto">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Order Status</th>
                  <th className="px-4 py-2">Product ID</th>
                  <th className="px-4 py-2">Customer ID</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentOrdersData.map((order, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{order.orderStatus}</td>
                    <td className="border px-4 py-2">{order.productId}</td>
                    <td className="border px-4 py-2">{order.customerId}</td>
                    {order.orderStatus === "Pending" && (
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          checked={order.isChecked}
                          onChange={() => handleCheckboxChange(order.id)}
                        />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
