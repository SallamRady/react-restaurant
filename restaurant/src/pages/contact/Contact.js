import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="left-side"></div>
      <div className="right-side">
        <h3>Contact Us</h3>
        <form className="contactForm">
          <label>Your Name</label>
          <input type="test" name="name" required minLength={3} />
          <label>Your Email</label>
          <input type="test" name="email" required minLength={3} />
          <label>Your Message</label>
          <textarea cols={7} rows={7}></textarea>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
