import React from "react";
import "./Home.css";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h2>Welcome to Sycamore Designs</h2>
        <p>
          Unlock the potential of your space with our innovative furniture
          designs.
        </p>
        <div className="home-input">
          <input type="text" placeholder="Search for a product" />
          <div className="home-search">
            {" "}
            <h4>
              <BsSearch />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
