import { Routes,Route } from "react-router-dom";
import React from 'react'
import HomePage from "./Home/HomePage";
// import About from "../pages/About";
// import Users from "../pages/Users";
// import Contact from "../pages/Contact";
import NotFoundPage from "./NotFoundPage";
// import PrivateRoute from "./PrivateRoute";
// import Login from "../pages/Login";
import ProductPage from "./ProductPage";
import SingleProductPage from "./SingleProductPage";

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/contact" element={<Contact/>}/> */}
        
        <Route path="/lakme" element={<ProductPage/>}/>
        {/* <Route path="/login" element={<Login/>}/> */}
        
        <Route path="/lakme/:id" element={<SingleProductPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default AllRoutes