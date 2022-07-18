import React, { useEffect } from "react";
import {  Route, Routes ,Navigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { HomePage, CheckoutPage, DetailsPage, CartPage, AuthenticationPage } from './Pages'
import Navigation from "./Routes/Navigation/Navigation.component";
import { auth, } from './utils/firebase/firebase.utils'
import {signOut, onAuthStateChanged, getAuth} from 'firebase/auth'
import {saveUser} from './Redux/slices/authSlice/authSlice'


function App() {

  const auth = getAuth();
  const user = useSelector((state) => state.auth.value)
  console.log('user from state', user) 
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch(saveUser(user.refreshToken))
      }else{
        dispatch(saveUser(undefined))
      }
    })

  }, [auth, dispatch])
  return (

      <Routes>
        <Route path="/" element={<Navigation />}>
     
          <Route index={true} element={<HomePage />} />
          <Route path="/cart" element={
          <RequireAuth redirectTo='/sign-in'>

            <CartPage />
          </RequireAuth>
          }
         />
        <Route path="/sign-in" element={<AuthenticationPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
       
</Route>   
</Routes>

  )
}

const RequireAuth = ({children, redirectTo}) => {
  const user = useSelector((state) => state.auth.value);
  return user ? children: <Navigate to={redirectTo}/>

}

export default App;
