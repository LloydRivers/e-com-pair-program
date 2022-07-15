import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/ProductSlices/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
