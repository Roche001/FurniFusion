import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <Route path="/" exact element={<Home />} />
        <Route Register path="Register" exact element={<Register />} />
        <Route Log path="Log" exact element={<Log />} />
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
