import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./OneProduct.css";
import { addToCart } from "../Feature/Slice/CartSlice";
function OneProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();
  console.log("pro->", products);
  const productSize = products[0].size ? products[0].size[0] : "";
  const productColor = products[0].color ? products[0].color[0] : "";

  const [size, setsize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  console.log("size", size);
  console.log("color->", color);
  return (
    <div>
      {products
        .filter((product) => product.id === id)
        .map((items, index) => {
          return (
            <div
              className="flex  justify-center items-center py-10 gap-[3rem]  one-page-container"
              key={index}
            >
              <div className="pl-44 grow-[2] one-page-image">
                <img
                  src={items.img}
                  className="w-[100%] h-[550px] rounded-lg page-image"
                  alt={items.name}
                />
              </div>
              <div className="grow-[3] one-product-text">
                <div className="max-w-lg">
                  <h1 className="text-2xl font-semibold  font-semibold leading-normal tracking-normal">
                    {items.name}
                  </h1>
                  <h1 className="text-orange-700 decoration-slate-200 text-lg italic font-extrabold	">
                    50% off{" "}
                  </h1>
                  <p className="decoration-slate-200 text-lg italic font-extrabold text-teal-600">
                    {items.text}
                  </p>
                </div>
                {/* For size make a selector */}
                {items.size ? (
                  <div className="selector p-2">
                    <label
                      for="countries"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Select an Size
                    </label>
                    <select
                      id="Size"
                      value={size}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setsize(e.target.value)}
                    >
                      {items.size.map((sizes, index) => {
                        return (
                          <option key={index} value={sizes}>
                            {sizes}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : (
                  //   if size not found then this code run
                  <div className="selector p-2">
                    <label
                      for="Size"
                      htmlFor="size"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Select an Size
                    </label>
                    <select
                      id="Size"
                      disabled={true}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {items?.size?.map((sizes, index) => {
                        return (
                          <option key={index} value={sizes}>
                            {sizes}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}

                {items.color ? (
                  <div className="color-picker">
                    <label
                      for="Color"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a Color
                    </label>
                    <select
                      id="Color"
                      value={color}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {items.color.map((colors, i) => (
                        <option key={i} value={colors}>
                          {colors}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="color-picker">
                    <label
                      for="Color"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a Color
                    </label>
                    <select
                      id="countries"
                      disabled={true}
                      value={color}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {items?.color?.map((colors, i) => (
                        <option key={i} value={colors}>
                          {colors}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: items.id,
                        size: size,
                        color: color,
                        amount: 1,
                        img: items.img,
                        name: items.name,
                        price: items.price,
                        totalPrice: items.price,
                        text: items.text,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OneProduct;
