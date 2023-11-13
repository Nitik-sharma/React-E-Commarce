import { createSlice } from "@reduxjs/toolkit";
import DammyData from "../../Data/DammyData";
export const SliderSlice = createSlice({
  name: "slice",
  initialState: {
    value: 0,
    length: DammyData().length - 1,
  },
  reducers: {
    nextSlide(state, action) {
      console.log("action", action.payload);
      console.log("state", state);
      state.value = action.payload > state.length ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length : action.payload;
    },
    dotSlide(state, action) {
      const slide = action.payload;
      console.log("dot", slide);
      state.value = slide;
    },
  },
});
export const { nextSlide, prevSlide, dotSlide } = SliderSlice.actions;
export default SliderSlice.reducer;
