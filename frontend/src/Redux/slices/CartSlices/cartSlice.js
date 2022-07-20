import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.product.id === product.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cartItems.push({
          product,
          quantity: 1,
        });
      }
      state.total += product.price;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
