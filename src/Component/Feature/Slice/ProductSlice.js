import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Data/DataProduct";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    filterProduct: JSON.parse(localStorage.getItem("filterData")) || storeData,
    singleProduct: JSON.parse(localStorage.getItem("singlePage")) || storeData,
  },
  reducers: {
    filterProduct: (state, action) => {
      // Filter Product function
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterProduct = filter;
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
  },
});

export const { filterProduct, singleProduct } = productSlice.actions;
export default productSlice.reducer;
