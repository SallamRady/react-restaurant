import React, { useContext, useEffect, useState } from "react";
import MenuList from "../../data/MenuList";
import MenuItem from "../../components/menu-item/MenuItem";
import { searchContext } from "../../context/search.context";
import "./SearchResult.css";

const SearchResult = () => {
  const [items, setItems] = useState([]);
  let { searchWord } = useContext(searchContext);

  useEffect(() => {
    let filterredItems = MenuList.filter((e) => e.name.includes(searchWord));
    setItems(filterredItems);
  }, [searchWord]);

  return (
    <div className="searchResultContainer">
      <h1>Search Result Of '{searchWord}'</h1>
      {items.length === 0 && <b>There is no result :(</b>}
      <div className="searchItemsContainer">
        {items.length > 0 &&
          items.map((item) => {
            return <MenuItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default SearchResult;
