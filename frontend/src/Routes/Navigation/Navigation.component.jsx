import React from "react";
import StoreLogo from "../../assets/store.png";
import { Link, Outlet } from "react-router-dom";
import {
  NavigationContainer,
  NavLink,
  NavLinkContainer,
  ImageContainer,
  LogoContainer,
} from "./Navigation.styles";
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/" className="logo-container">
          <div>
            <ImageContainer src={StoreLogo} alt="logo" />
          </div>
        </LogoContainer>

        <NavLinkContainer>
          <NavLink className="nav-link" to="/">
            Shop
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
          <NavLink className="nav-link" to="/sign-in">
            Sign In
          </NavLink>
        </NavLinkContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
