import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  max-width: 95%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;
export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ImageContainer = styled.img`
  width: 100px;
  height: 100px;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
