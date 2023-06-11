import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { TbCopyright } from "react-icons/tb";
import { foot, contact, support, about } from "../../footer";

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
      <div className="footer-detail">
        <div className="footer-contact">
          <h4>Contact us</h4>
          {contact.map((item, index) => {
            return (
              <div key={index} className="contact-one">
                <h6>{item.title}</h6>
              </div>
            );
          })}
        </div>
        <div className="footer-support">
          <h4>Support</h4>
          {support.map((item, index) => {
            return (
              <div key={index} className="support-one">
                <Link to={item.titleLink} id="about">
                  <h6>{item.title}</h6>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="footer-us">
          <h4>About Us</h4>{" "}
          {about.map((item, index) => {
            return (
              <div key={index} className="about-one">
                <Link to={item.titleLink} id="about">
                  <h6>{item.title}</h6>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="footer-news">
          <h4>Newsletter</h4>
          <p>
            We respect your privacy and want to make it easy for you to control
            your email preferences. You can unsubscribe from our newsletter at
            any time by clicking the 'unsubscribe' link at the bottom of any
            email you receive from us.
          </p>
          <div className="news">
            <input type="text" placeholder="Your email address" />
            <button className="footer-button">SUBSCRIBE </button>
          </div>
        </div>
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
