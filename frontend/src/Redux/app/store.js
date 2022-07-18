import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/ProductSlices/productsSlice";
import authReducer from '../slices/authSlice/authSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth:authReducer,

  },
});
