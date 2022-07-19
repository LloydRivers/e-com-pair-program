
import StoreLogo from "../../assets/store.png";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUser } from "../../Redux/slices/authSlice/authSlice";
import {
  NavigationContainer,
  NavLink,
  NavLinkContainer,
  ImageContainer,
  LogoContainer,
} from "./Navigation.styles";
const Navigation = () => {

  const user = useSelector((state) => state.currentUser)
  console.log(user)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/" className="logo-container">
          <div>
            <ImageContainer src={StoreLogo} alt="logo" />
          </div>
        </LogoContainer>

        <NavLinkContainer>
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
          {
            user ? <NavLink className="nav-link" to="/sign-in">
              Sign Out
            </NavLink>
            :
              <NavLink className="nav-link" to="/sign-in">
                Sign In
              </NavLink>
          }
       
        </NavLinkContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
