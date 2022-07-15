// Import createSlice and createAsyncThunk from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_URL;
console.log(url);

// Create thunk.
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // The returned data below will become the payload of the action.
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
      state.errorMessage = action.error.message;
      state.errorMessage = action.error.message;
      state.loading = false;
    });
  },
});

export const selectProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;
export const selectIsError = (state) => state.products.isError;

export default productsSlice.reducer;
