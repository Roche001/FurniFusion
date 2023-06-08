import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./components/top/Top";
import Log from "./components/log/Log";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Buy from "./components/buy/Buy";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" exact element={<Log />} />
        <Route Register path="Beer" exact element={<Register />} />
        <Route Home path="Home" exact element={<Home />} />
        <Route Product path="Product" exact element={<Product />} />
        <Route Buy path="Buy" exact element={<Buy />} />
        <Route Search path="Search" exact element={<Search />} />
        <Route Cart path="Cart" exact element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
