import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Navigator from "../Navigator/Navigator";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

function Main() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Navigator />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default Main;
