import React from "react";
import { storeData } from "../Data/DataProduct";
import ProductItem from "./ProductItem";
import "./Product.css";
function ProductSection() {
  return (
    <div>
      <div className="w-[50%] bg-black p-2 mx-auto rounded-md">
        <h2 className="text-red-600 font-bold text-center ">
          {" "}
          Summer T-shirt Sale{" "}
        </h2>
      </div>
      <div className="grid grid-cols-3 my-0.5 gap-5 py-0.5  items-grid">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductItem
                id={product.id}
                img={product.img}
                text={product.text}
                name={product.name}
                size={product.size}
                color={product.color}
                price={product.price}
                totalPrice={product.totalPrice}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSection;
