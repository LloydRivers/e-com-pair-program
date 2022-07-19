import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from "../../Redux/slices/ProductSlices/productsSlice";
import { InputSearch, SearchContainer, SearchIcon } from './Search.style';



const Search = ({handleChange}) => {


  return (
   <SearchContainer>
  
    <InputSearch onChange={handleChange}/>
    {/* <SearchIcon/> */}
   </SearchContainer>
  )
}

export default Search