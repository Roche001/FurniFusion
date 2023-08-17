import React from "react";
import "./Policy.css";
import { pol } from "../../policy";

const Policy = () => {
  return (
    <div className="policy-container">
      <h4>Privacy Policy</h4>
      <p>
        This Privacy Policy outlines how <span>Sycamore Designs</span> ("we,"
        "us," or "our") collect, use, disclose, and protect the personal
        information of our customers and website visitors. By using our website
        and services, you consent to the practices described in this policy.
      </p>{" "}
      {pol.map((item, index) => {
        return (
          <div key={index} className="pol-sub">
            <h4>{item.title}</h4>
            <p>{item.sub}</p>
            <p>{item.sub2}</p>
            <p>{item.sub3}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Policy;
