import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/ProductDetail/ProductPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-detail/:id" element={<ProductPage />} />
      <Route path="/checkout-page" element={<CheckoutPage />} />
    </Routes>
  );
};

export default AppRouter;
