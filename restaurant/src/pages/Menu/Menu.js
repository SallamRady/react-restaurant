import React, { useState } from "react";
import MenuList from "../../data/MenuList";
import MenuItem from "../../components/menu-item/MenuItem";
import Button from "@mui/material/Button";
import "./Menu.css";

const Menu = () => {
  const [items, setItems] = useState(MenuList);
  const [category, setCategory] = useState("all");

  const changeCategory = (cat) => {
    if (cat === "all") {
      setItems(MenuList);
      setCategory("all");
      return;
    }
    let categoryItems = MenuList.filter((item) => item.category === cat);
    setItems(categoryItems);
    setCategory(cat);
  };

  const singleMenuItem = items.map((item) => {
    return <MenuItem key={item.id} item={item} />;
  });
  return (
    <div>
      <h1>Our Menu</h1>
      <div className="categories">
        <Button
          variant="text"
          onClick={() => changeCategory("all")}
          className={category === "all" ? "active" : ""}
        >
          All
        </Button>
        <Button
          variant="text"
          onClick={() => changeCategory("breakfast")}
          className={category === "breakfast" ? "active" : ""}
        >
          Breakfast
        </Button>
        <Button
          variant="text"
          onClick={() => changeCategory("lunch")}
          className={category === "lunch" ? "active" : ""}
        >
          Lunch
        </Button>
        <Button
          variant="text"
          onClick={() => changeCategory("shakes")}
          className={category === "shakes" ? "active" : ""}
        >
          Shakes
        </Button>
      </div>
      <div className="cardsContainer">{singleMenuItem}</div>
    </div>
  );
};

export default Menu;
