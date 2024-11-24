import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/ProductDetail/ProductPage";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-detail/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default AppRouter;
