import React from "react";
import logo from "../../assest/logo.png";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex justify-center items-center">
        <hr className="h-px w-4/5 bg-gray-500 optacity-50 outline-none border-none m-4" />
      </div>
      <div className="flex justify-between items-center pt-4 ">
        <div>
          <img src={logo} />
        </div>
        <div>
          <h1>@ CopyRight {year}"</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
