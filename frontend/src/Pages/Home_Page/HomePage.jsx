import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../../Components";
import { fetchProducts } from "../../Redux/slices/ProductSlices/productsSlice";

import { selectProducts } from "../../Redux/slices/ProductSlices/productsSlice";

const HomePage = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
