import React, { useContext, useState } from "react";
import logoImg from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Badge from "@mui/material/Badge";
import "./Navbar.css";
import { cartContext } from "../../context/cart.context";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  let { quantity } = useContext(cartContext);
  
  return (
    <div className="mainNavbar">
      <div className={showMenu ? "leftSide hide" : "leftSide"}>
        <img src={logoImg} alt="logo Image" className="logoImg" />
      </div>
      <div className={showMenu ? "rightSide full" : "hide"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">
          <Badge badgeContent={quantity || '0'} color="primary">
            <LocalMallOutlinedIcon />
          </Badge>
        </NavLink>
      </div>
      <ReorderIcon onClick={() => setShowMenu(!showMenu)} id="taggleIcon" />
    </div>
  );
};

export default Navbar;
