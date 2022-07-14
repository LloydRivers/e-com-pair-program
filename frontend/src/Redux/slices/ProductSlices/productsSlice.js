import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_URL;
console.log(url);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }
);
