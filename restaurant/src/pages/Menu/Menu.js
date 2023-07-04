import React from "react";
import MenuList from "../../data/MenuList";
import MenuItem from "../../components/menu-item/MenuItem";
import "./Menu.css";

const Menu = () => {
  const singleMenuItem = MenuList.map((item) => {
    return <MenuItem image={item.image} name={item.name} price={item.price} />;
  });
  return (
    <div>
      <h1>Our Menu</h1>
      <div className="cardsContainer">{singleMenuItem}</div>
    </div>
  );
};

export default Menu;
