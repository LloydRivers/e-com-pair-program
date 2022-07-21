import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  HomePage,
  CheckoutPage,
  DetailsPage,
  CartPage,
  AuthenticationPage,
} from "./Pages";
import Navigation from "./Routes/Navigation/Navigation.component";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { currentUser, logIn, logOut } from "./Redux/slices/authSlice/authSlice";

function App() {
  const auth = getAuth();
  const user = useSelector(currentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          logIn({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  }, [auth, dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<HomePage />} />

        <Route path="/sign-in" element={<AuthenticationPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
