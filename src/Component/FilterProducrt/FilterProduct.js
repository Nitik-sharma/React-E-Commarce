import ProductCardCard from "../Card/ProductCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Filter.css";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterColor,
  filterGender,
  filterPrice,
  filterProduct,
  filterSize,
} from "../Feature/Slice/ProductSlice";
function FilterProduct() {
  const products = useSelector((state) => state.products.filterProduct);
  const error = useSelector((state) => state.products.error);
  console.log("prdouct", products);
  const { type } = useParams();
  console.log("prams", type);
  const dispatch = useDispatch();

  const gender = ["male", "female"];
  const colors = [
    "red",
    "green",
    "purple",
    "yellow",
    "black",
    "orange",
    "blue",
    "brown",
  ];
  const Size = ["S", "M", "XL", "L"];
  return (
    <div className="pt-16">
      <div className="pl-14">
        <h1 className="text-4xl font-inter text-gray-600 font-bold traking-noraml leading-none">
          {type}
        </h1>
      </div>
      <div className="flex justify-between items-center py-1.5 m-2  buttons">
        <div className="flex gap-3 button-top">
          <div className="btn">
            {gender.map((items, i) => {
              return (
                <Button
                  key={i}
                  variant="outlined"
                  className="text-black mr-2 hover:bg-gray-200 btns"
                  onClick={() => {
                    console.log("Button clicked:", items);
                    dispatch(filterGender(items));
                  }}
                >
                  {items}
                </Button>
              );
            })}
          </div>
          <div className="btn">
            <Button
              variant="outlined"
              className="text-black mr-2 hover:bg-gray-200 btns"
              onClick={() => dispatch(filterPrice())}
            >
              High Price
            </Button>
          </div>

          <div className="btn">
            <Menu>
              <MenuHandler>
                <Button
                  variant="outlined"
                  className="text-black mr-2 hover:bg-gray-200 btns"
                >
                  Select Color
                </Button>
              </MenuHandler>
              <MenuList>
                {colors.map((item, i) => {
                  return (
                    <MenuItem
                      key={i}
                      style={{ color: item }}
                      className="text-1xl"
                      onClick={() => dispatch(filterColor(item))}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </div>
          <div className="btn">
            <Menu>
              <MenuHandler>
                <Button
                  variant="outlined"
                  className="text-black mr-2 hover:bg-gray-200 btns"
                  disabled={type === "Bags"}
                >
                  Select Size
                </Button>
              </MenuHandler>
              <MenuList>
                {Size.map((item, i) => {
                  return (
                    <MenuItem
                      key={i}
                      className="text-1xl"
                      onClick={() => dispatch(filterSize(item))}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="clear-filter">
          <Button
            variant="outlined"
            className="text-black mr-2 hover:bg-gray-200 btns"
            onClick={() => dispatch(filterProduct(type))}
          >
            Clear Filter
          </Button>
        </div>
      </div>
      {error ? (
        <Error />
      ) : (
        <div className="grid grid-cols-3 justify-items-center py-8 gap-12 filter-grid">
          {products &&
            products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCardCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    />
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}

export default FilterProduct;
