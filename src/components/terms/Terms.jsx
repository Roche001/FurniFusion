import React from "react";
import "./Terms.css";
import { ship } from "../../policy";

const Terms = () => {
  return (
    <div className="terms-container">
      <h4>Terms & Conditions</h4>
      <h6>
        Welcome to <span>Sycamore Designs </span>. These Terms and Conditions
        outline the terms of use and purchase on our platform. By accessing,
        browsing, or making a purchase on our Website, you agree to comply with
        these terms. Please read them carefully.
      </h6>
      <div className="terms-para">
        {ship.map((item, index) => {
          return (
            <div key={index} className="terms-sub">
              <h6>{item.title}</h6>
              <p>{item.sub}</p>
              <p>{item.sub2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Terms;
