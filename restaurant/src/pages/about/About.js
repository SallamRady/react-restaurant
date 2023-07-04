import React from "react";
import aboutImg from "../../assets/masala.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <img className="aboutImg" src={aboutImg} />
      <h2>About US</h2>
      <p>Food Corner for indian Food , here you can found alot of traditional dishies,<br/>you can order food online :)</p>
    </div>
  );
};

export default About;
