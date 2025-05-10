import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "../Pages/Landingpage";
import Product from "../Pages/Product";
import Card from "../Pages/Card";
import Login from "../Pages/Login";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
