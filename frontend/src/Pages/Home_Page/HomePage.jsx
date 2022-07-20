import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => setSearchText(e.target.value);
  const FilteredTitle = products?.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Search handleChange={handleSearch} />
      <HomepageContainer>
        <Section
          data={getCategory(FilteredTitle, "Men's Clothing")}
          title={FilteredTitle ? "Men's Clothing" : null}
        />
        <Section
          data={getCategory(FilteredTitle, "Jewelery")}
          title={FilteredTitle > 0 ? "Jewelery" : null}
        />
        <Section
          data={getCategory(FilteredTitle, "Electronics")}
          title={FilteredTitle > 0 ? "Electronics" : null}
        />
        <Section
          data={getCategory(FilteredTitle, "Women's clothing")}
          title={FilteredTitle > 0 ? "Women's clothing" : null}
        />
      </HomepageContainer>
    </>
  );
};

export default HomePage;
