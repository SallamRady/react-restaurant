import React, { useContext, useState } from "react";
import logoImg from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Badge from "@mui/material/Badge";
import "./Navbar.css";
import { cartContext } from "../../context/cart.context";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { searchContext } from "../../context/search.context";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  let { quantity } = useContext(cartContext);
  let { setSearchWord } = useContext(searchContext);
  const navigator = useNavigate();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setSearchWord(event.target.value);
      navigator("/searchResult");
    }
  }

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
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            onKeyPress={handleKeyPress}
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <NavLink to="/cart">
          <Badge badgeContent={quantity || "0"} color="primary">
            <LocalMallOutlinedIcon />
          </Badge>
        </NavLink>
      </div>
      <ReorderIcon onClick={() => setShowMenu(!showMenu)} id="taggleIcon" />
    </div>
  );
};

export default Navbar;
