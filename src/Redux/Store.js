import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../Component/Feature/Slice/SliderSlice"; // Adjust the path accordingly
import productReducer from "../Component/Feature/Slice/ProductSlice";
import cartReducer from "../Component/Feature/Slice/CartSlice";
import authUser from "../Component/Feature/Slice/Auth";
export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
    cart: cartReducer,
    user: authUser,
  },
});
