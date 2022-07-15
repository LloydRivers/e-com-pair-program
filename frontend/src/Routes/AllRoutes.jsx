import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage, CartPage, DetailsPage, CheckoutPage } from "../Pages";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
