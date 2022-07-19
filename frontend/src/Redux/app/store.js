import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/ProductSlices/productsSlice";
import authReducer from "../slices/authSlice/authSlice";
import productReducer from "../slices/ProductSlices/productSlice";
import cartSlice from "../slices/CartSlices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    product: productReducer,
    cart: cartSlice,
  },
});
