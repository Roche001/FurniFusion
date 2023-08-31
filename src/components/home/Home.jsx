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
      <div className="home-category">
        <div className="category">
          <div className="cat-one">
            <div className="sec-one">
              <img src="./assets/cool.jpeg" alt="hello" />
              <p>Xixi Liu</p>
            </div>

            <h4>
              <BsThreeDotsVertical />
            </h4>
          </div>
          <div className="cat-two">
            {" "}
            <p>
              📚 Diving into the mystical world of 'The Hidden Shadows' by the
              brilliant new author, Lucy Weaver! ✨ Prepare to be enchanted as
              Lucy weaves a spellbinding tale of mystery and wonder. 🌟 From the
              very first page, I was captivated by her vivid characters and the
              richly crafted landscapes. 🌌 Get ready for a literary journey
              like no other! 📖 Bravo, Lucy! 🎉{" "}
            </p>
          </div>
          <div className="cat-three">
            <div className="hert-one">
              <h4>
                <FaHeart />
              </h4>
              <h4>
                <RiChat3Line />
              </h4>
              <h4>
                <FaTelegramPlane />
              </h4>
            </div>
            <div className="hert-two">
              <h4>
                <CgPentagonUp />
              </h4>
            </div>
            <div className="heart-two"></div>
          </div>
          <div className="cat-four">
            {" "}
            <p>
              🙌 Wow! 'The Hidden Shadows' is an absolute page-turner! Lucy
              Weaver's storytelling is pure magic! 📖✨ Can't wait to dive into
              this enchanting world. Thanks for the recommendation! 📚❤️
              #BookRecommendation #TheHiddenShadows #LucyWeaver #ReadingList
            </p>
          </div>
          <div className="cat-five"></div>
          <div className="cat-six"></div>
          <div className="cat-seven"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
