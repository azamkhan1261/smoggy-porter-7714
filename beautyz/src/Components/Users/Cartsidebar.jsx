import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Button} from "@chakra-ui/react"
import {AiOutlineShopping} from "react-icons/ai"
import "./Sidebar.css"
function Cartsidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <Button  onClick={showSidebar}>
         <AiOutlineShopping/>
        </Button>
        <ul onClick={showSidebar}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Cartsidebar;