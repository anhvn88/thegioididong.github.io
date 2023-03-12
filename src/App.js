import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Shoppage from "./components/Shoppage/Shoppage";

import Login from "./components/Homepage/Login/Login";
import Register from "./components/Homepage/Register/Register";
import Cart from "./components/Cart/Cart";

import ProductDetails from "../src/components/Shoppage/components/ProductDetails";

import "./App.css";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/shop" element={<Cart />} />
        <Route path="/shop/:dataId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
