import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/ProductSlices/productsSlice";
import authReducer from '../slices/authSlice/authSlice'
import cartReducer from '../slices/cartSlice/CartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth:authReducer,
    cart:cartReducer,

  },
});
