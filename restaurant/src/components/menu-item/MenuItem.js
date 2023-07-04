import React from "react";
import "./MenuItem.css";

const MenuItem = ({ image, name, price }) => {
  return (
    <div className="itemCard">
      <img src={image} className="menuItemImg" alt="menu item image" />
      <div className="info">
        <h3>{name}</h3>
        <h5>{price} $</h5>
        <button className="btn">Order Now</button>
      </div>
    </div>
  );
};

export default MenuItem;
