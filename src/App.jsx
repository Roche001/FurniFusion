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
import Bedroom from "./components/bedroom/Bedroom";
import Customization from "./components/customization/Customization";
import Diningroom from "./components/diningroom/Diningroom";
import Homeoffice from "./components/homeoffice/Homeoffice";
import Livingroom from "./components/livingroom/Livingroom";
import Newarrivals from "./components/newarrivals/Newarrivals";
import Outdoor from "./components/outdoor/Outdoor";
import Salesclearance from "./components/salesclearance/Salesclearance";
import Shipping from "./components/shipping/Shipping";
import Terms from "./components/terms/Terms";
import Policy from "./components/policy/Policy";
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
        <Route Cart path="Bedroom" exact element={<Bedroom />} />
        <Route Cart path="Customization" exact element={<Customization />} />
        <Route Cart path="Diningroom" exact element={<Diningroom />} />
        <Route Cart path="Homeoffice" exact element={<Homeoffice />} />
        <Route Cart path="Livingroom" exact element={<Livingroom />} />
        <Route Cart path="Newarrivals" exact element={<Newarrivals />} />
        <Route Cart path="Outdoor " exact element={<Outdoor />} />
        <Route Cart path="Salesclearance" exact element={<Salesclearance />} />
        <Route Cart path="Cart" exact element={<Cart />} />
        <Route Shipping path="Shipping" exact element={<Shipping />} />
        <Route Terms path="Terms" exact element={<Terms />} />
        <Route Policy path="Policy" exact element={<Policy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
