import React from "react";
import cloth from "../../assest/clothes.jpg";
import "./Navigator.css";
import { filterProduct } from "../Feature/Slice/ProductSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Navigator() {
  const dispatch = useDispatch();
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <div>
      <div className="buttons flex justify-center items-center py-8 flex-wrap ">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-2 my-3">
              <Link to={"/filterProducts/" + button}>
                <button
                  class="bg-white hover:bg-green-700 text-black font-bold py-2 px-4 border border-back-700 rounded "
                  onClick={() => dispatch(filterProduct(button))}
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-600 p-2 w-[55%] mx-auto rounded">
        <h3 className="text-orange-900 text-center text-lg font-semiblod">
          SALE UP TO 50%
        </h3>
      </div>
      <div className="flex items-center justify-center py-2">
        <img
          src={cloth}
          className="h-[600px] w-[50%] rounded-md shadow-lg shadow-gray-600  cloth-img"
        />
      </div>
    </div>
  );
}

export default Navigator;
