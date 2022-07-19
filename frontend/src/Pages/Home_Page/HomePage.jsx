import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../../Components";
import { fetchProducts } from "../../Redux/slices/ProductSlices/productsSlice";

import { selectProducts } from "../../Redux/slices/ProductSlices/productsSlice";

import { getCategory } from "../../Helpers/helpers";

import Section from "../../Components/Section/Section";
import { HomepageContainer } from "./HomePage.styled";
import Search from "../../Components/Search/Search";

const HomePage = () => {
  const products = useSelector(selectProducts);
  // console.log(products)
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("")
const handleSearch = (e) => (setSearchText(e.target.value))
const FilteredCategory = products?.filter((product) => (product.category.toLowerCase().includes(searchText.toLowerCase())));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
    <Search handleChange={handleSearch}/>
    <HomepageContainer>
        <Section
          data={getCategory(FilteredCategory, "Men's Clothing")}
          title={"Men's Clothing"}
        />
        <Section data={getCategory(FilteredCategory, "Jewelery")} title={"Jewelery"} />
        <Section
          data={getCategory(FilteredCategory, "Electronics")}
          title={"Electronics"}
        />
        <Section
          data={getCategory(FilteredCategory, "Women's clothing")}
          title={"Women's clothing"}
        />
    </HomepageContainer>
     
    </>
  );
};

export default HomePage;
