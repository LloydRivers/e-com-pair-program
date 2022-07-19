import styled from "styled-components";
import { FiSearch } from 'react-icons/fi'
export const SearchContainer = styled.div`
display:flex ;
align-items:center ;
justify-content:center ;

`
export const  InputSearch = styled.input`
display: flex;
position: relative;
outline:none ;
border:1px solid grey ;
border-radius: 10px;
width:500px ;
padding:.5rem 0 ;





`

export const SearchIcon = styled(FiSearch)`
text-align:right;
position:absolute ;
width:30px;
height:30px;

`