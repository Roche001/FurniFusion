import React from "react";
import "./Home.css";
import { BsSearch } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { CgPentagonUp } from "react-icons/cg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h2>
          Welcome to <span>Sycamore Designs</span>
        </h2>
        <p>
          Unlock the potential of your space with our innovative furniture
          designs.
        </p>
        <div className="home-input">
          <input type="text" placeholder="Search for a product" />

          <h4>
            <BsSearch />
          </h4>
        </div>
      </div>
      <div className="home-category"></div>
    </div>
  );
};

export default Home;
