import React, { useState,useEffect } from 'react'
import style from './Navbar.module.css'
import { IoIosSearch } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import { RiGift2Line } from 'react-icons/ri';
import { BsHandbag } from 'react-icons/bs';
import NavbarPopUpComponents from './NavComponents/NavbarPopUpComponents';
import {useNavigate,NavLink} from 'react-router-dom'
// import {MuiDrawer} from '../../Product page/MuiDrawer'


const links=[
  {path:"/", title:"HomePage"},
  {path:"/lakme", title:"lakme"},
  // {path:"/login", title:"Login"}
]

    





const Navbar = () => {
  const navigate = useNavigate();
  const [howerState, setHowerState] = useState("");
  const [login, setLogin] = useState(false);
  const hoverHandler = (type) => {
    setHowerState(type);
  };
  const handleLogin = () => {
    if (login) {
      setLogin(false);
      localStorage.removeItem("user");
      localStorage.removeItem("oAuth");
      window.location.reload()
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("oAuth"));

    if (data) setLogin(true);
  }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div>

            <img
              style={{cursor:"pointer", height:"50px"}}
              onClick={()=>navigate("/")}
              src="../images/Beautyz_logo.png"
              className={style.card4}
              alt="Beautyz"
              
            />
              {/* {links.map((link)=>(
          <NavLink
          key={link.path}
          to={link.path}
          >
          {link.title}
          </NavLink>
      ))} */}
            <p>Categories</p>
            <p onMouseOver={() => hoverHandler("BRANDS")}>Brands</p>
            <p onMouseEnter={() => hoverHandler("LUXE")}>Luxe</p>
            <p onMouseEnter={() => hoverHandler("NYKAA")}>Beautyz Fashion</p>
            <p onMouseEnter={() => hoverHandler("BEAUTY")}>Beauty Advice</p>
          </div>
          <div>
            <div className={style.inputContainer}>
              <input
                style={{position: "relative"}}
                type="text"
                className={style.input}
                placeholder="Search on Beautyz"
              />
            </div>
            <div className={style.card2}>
              <p>
                <FaRegUser fontSize="2.5vh" cursor="pointer" />
              </p>
              <p onClick={() => handleLogin()}>{!login ? "Login" : "Logout"}</p>
            </div>
            <div className={style.card3}>
              
                {/* <MuiDrawer /> */}
            </div>
          </div>
        </div>

        <div className={style.content} onMouseLeave={() => setHowerState("")}>
          {howerState && <NavbarPopUpComponents type={howerState} />}
        </div>
      </div>
    </>
  );
}

export default Navbar