import React from "react";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Home />} />
      <Route path="/contacts" element={<Posts />} />
      <Route path="/invoices" element={<Cart />} />
    </Routes>
  );
};

export default Routes;
