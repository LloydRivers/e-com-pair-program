import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
  },
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;

export const selectProduct = (state) => state.product.product;
