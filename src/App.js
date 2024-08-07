
import React from "react";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<Home />} />
          <Route path="/orders" element={<Cart />} />
          <Route path="/productList" element={<Posts />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
