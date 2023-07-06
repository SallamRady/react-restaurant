import React, { useContext, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./MenuItem.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { cartContext } from "../../context/cart.context";

const MenuItem = ({ item, image, name, price, rate }) => {
  const [value, setValue] = useState(rate);
  let { addCartitem } = useContext(cartContext);

  const handleAddCartItem = () => {
    let newItem = { ...item, amount: item.price, quantity: 1 };
    console.log('item :', newItem)
    addCartitem(newItem);
  };

  return (
    <div className="itemCard">
      <img src={image} className="menuItemImg" alt="menu item image" />
      <div className="info">
        <h3>{name}</h3>
        <h5>{price} $</h5>
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
