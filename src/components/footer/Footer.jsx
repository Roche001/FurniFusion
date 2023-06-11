import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { TbCopyright } from "react-icons/tb";
import { foot } from "../../footer";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-about">
        {" "}
        <h3>Sycamore Designs </h3>
        <p>
          Welcome to our furniture company, where style meets functionality. We
          offer a curated selection of high-quality furniture pieces, designed
          to transform your space into a haven of comfort and elegance. Discover
          timeless designs and exceptional craftsmanship today.
        </p>
      </div>
      <div className="footer-socials">
        <div className="socials-one">
          <h6>
            <TbCopyright />
            2023 sycamore Designs. All rights reserved.
          </h6>
        </div>
        <div className="socials-two">
          {foot.map((item, index) => {
            return (
              <div key={index} className="media">
                <Link
                  to={item.titleDes}
                  id="about"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6>{item.title}</h6>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
