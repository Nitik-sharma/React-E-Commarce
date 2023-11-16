import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Data/DataProduct";
import { json } from "react-router-dom";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    filterProduct: JSON.parse(localStorage.getItem("filterData")) || storeData,
    singleProduct: JSON.parse(localStorage.getItem("singlePage")) || storeData,
    error: false,
  },
  reducers: {
    filterProduct: (state, action) => {
      // Filter Product function
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterProduct = filter;
        state.error = false;
        const saveState = JSON.stringify(filter);
        console.log("filter", filter);
        localStorage.setItem("filterData", saveState);
      } catch (err) {
        console.log(err);
      }
    },
    // Single page logic
    singleProduct: (state, action) => {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        console.log("oneProduct", oneProduct);
        const singlePage = JSON.stringify(oneProduct);
        localStorage.setItem("singlePage", singlePage);
      } catch (err) {
        console.log(err);
      }
    },
    filterGender: (state, action) => {
      try {
        const gender = state.filterProduct.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filterProduct = gender;
        const OneGenderType = gender.length > 0;
        if (OneGenderType) {
          state.error = false;
          const savestate = JSON.stringify(gender);
          localStorage.setItem("filterData", savestate);
        } else {
          state.error = true;
          state.filterProduct = [];
        }
      } catch (err) {
        console.log(err);
      }
    },
    filterPrice: (state, action) => {
      try {
        const price = state.filterProduct.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filterProduct = price;
        const count = price.length;
        if (count > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filterProduct = price;
            const saveState = JSON.stringify(price);
            localStorage.setItem("filterData", saveState);
          }
        } else {
          state.error = true;
          state.filterProduct = [];
        }
      } catch (err) {
        console.error(err);
      }
    },
    filterColor(state, action) {
      try {
        const color = state.filterProduct.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;
        state.filterProduct = color;
        if (color.length <= 0) {
          state.error = true;
          state.filterProduct = [];
        } else {
          state.error = false;
          state.filterProduct = color;
          const saveState = JSON.stringify(color);
          localStorage.setItem("filterData", saveState);
        }
      } catch (err) {
        console.error(err);
      }
    },
    filterSize(state, action) {
      try {
        const size = state.filterProduct.filter((product) =>
          product.size.includes(action.payload)
        );
        state.error = false;
        state.filterProduct = size;
        if (size.length <= 0) {
          state.error = true;
          state.filterProduct = [];
        } else {
          state.error = false;
          state.filterProduct = size;
          const saveState = JSON.stringify(size);
          localStorage.setItem("filterData", saveState);
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export const {
  filterProduct,
  singleProduct,
  filterGender,
  filterPrice,
  filterColor,
  filterSize,
} = productSlice.actions;
export default productSlice.reducer;
