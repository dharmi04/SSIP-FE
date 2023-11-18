import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Explore from "./Pages/Explore"
import Home from "./Pages/Home"
import AllProducts from "./Pages/AllProducts"
import ProductDetail from "./Pages/ProductDetail"
import Analytics from "./Pages/Dashboard/Analytics"
import Login from "./components/Auth/Login"
import { ArtisanSignup } from "./components/Auth/ArtisanSignup"
import { UserSignup } from "./components/Auth/UserSignup"
import AR from "./Pages/AR"
import Account from "./Pages/Account"
import AddProduct from "./Pages/AddProduct"
import BuyNow from "./Pages/BuyNow"
import Cart from "./Pages/Cart"
import { Test } from "./Test"
import { Main } from "./Layouts/Main"
import { Dashboard as DashBoardLayout } from "./Layouts/Dashboard"
import { CartProvider } from "./components/CartContext"

import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <Router>
      <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="product/:productId/ar" element={<AR />} />
        </Route>
        {/* <Route path="/all-products" element={<AllProducts />} /> */}
        {/* <Route path="/product/:productId" element={<ProductDetail />} /> */}
        {/* <Route path="/product/:productId/ar" element={<AR />} /> */}
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="analytics" element={<Analytics />} />
          <Route path="add/product" element={<AddProduct />} />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup/artisan" element={<ArtisanSignup />} />
        <Route path="/auth/signup/user" element={<UserSignup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Test /> */}
    </CartProvider>
    </Router>
  )
}

export default App
