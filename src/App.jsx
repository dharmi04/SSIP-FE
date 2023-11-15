import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Explore from "./Pages/Explore"
import Home from "./Pages/Home"
import AllProducts from "./Pages/AllProducts"
import ProductDetail from "./Pages/ProductDetail"
import Dashboard from "./Pages/Dashboard"
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"
import AR from "./Pages/AR"
import Account from "./Pages/Account"
import AddProduct from "./Pages/AddProduct"
import BuyNow from "./Pages/BuyNow"
import Cart from "./Pages/Cart"

import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:productId/ar" element={<AR />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/cart" component={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
