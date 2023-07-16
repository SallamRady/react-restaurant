import React, { useContext, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./MenuItem.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../context/cart.context";

const MenuItem = ({ item }) => {
  const [value, setValue] = useState(item.rate);
  let { addCartitem } = useContext(cartContext);

  const handleAddCartItem = () => {
    let newItem = { ...item, amount: item.price, quantity: 1 };
    console.log("item :", newItem);
    addCartitem(newItem);
  };

  return (
    <div className="itemCard">
      <img src={item.image} className="menuItemImg" alt="menu item image" />
      <div className="info">
        <h3>
          <NavLink to={"/product/" + item.id}>{item.name}</NavLink>
        </h3>
        <h5>{item.price} $</h5>
        <p className="description">{item.desc}</p>
        <div className="actions">
          {/* rating... */}
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          {/* add to cart */}
          <button className="btn" onClick={handleAddCartItem}>
            <AddShoppingCartOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
