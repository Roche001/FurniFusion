import React from "react";
import "./Shipping.css";
import { info, ret } from "../../policy";

const Shipping = () => {
  return (
    <div className="ship-container">
      <h3>Shipping & Return Policy</h3>
      <div className="shipping">
        <h5>Shipping Information:</h5>{" "}
        {info.map((item, index) => {
          return (
            <div key={index} className="info-sub">
              <h6>{item.title}</h6>
              <p>{item.sub}</p>
            </div>
          );
        })}
      </div>
      <div className="returns">
        <h5>Returns and Exchanges:</h5>
        {ret.map((item, index) => {
          return (
            <div key={index} className="ret-sub">
              <h6>{item.title}</h6>
              <p>{item.sub}</p>
              <p>{item.sub1}</p>
              <p>{item.sub2}</p>
              <p>{item.sub3}</p>
            </div>
          );
        })}
      </div>
      <p>
        Please note that this policy is subject to change without prior notice.
        For the most up-to-date information, please refer to our website or
        contact our customer support team. We value your satisfaction and aim to
        provide the best possible shopping experience.
      </p>
    </div>
  );
};

export default Shipping;
