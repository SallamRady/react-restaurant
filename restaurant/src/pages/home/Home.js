import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigator = useNavigate();

  return (
    <div className="homeBanner">
      <div className="headerInfo">
        <h1>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <button onClick={() => navigator("/menu")}>Order Now</button>
      </div>
    </div>
  );
};

export default Home;
