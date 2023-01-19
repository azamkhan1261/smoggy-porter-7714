import React from 'react'
import {Routes,Route} from "react";
import Home from './Home';
import Dashboard from './Dashboard';
function AdminRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
    </Routes>
  )
}

export default AdminRoutes