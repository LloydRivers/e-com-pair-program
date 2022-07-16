import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../../Components";
import { fetchProducts } from "../../Redux/slices/ProductSlices/productsSlice";

import { selectProducts } from "../../Redux/slices/ProductSlices/productsSlice";

import { getCategory } from "../../Helpers/helpers";

import Section from "../../Components/Section/Section";

const HomePage = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Section
        data={getCategory(products, "Men's Clothing")}
        title={"Men's Clothing"}
      />
      <Section data={getCategory(products, "Jewelery")} title={"Jewelery"} />
      <Section
        data={getCategory(products, "Electronics")}
        title={"Electronics"}
      />
      <Section
        data={getCategory(products, "Women's clothing")}
        title={"Women's clothing"}
      />
    </>
  );
};

export default HomePage;
