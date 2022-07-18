import React from 'react'
import SignInForm from '../../Components/SignIn/SignInForm'
import SignUpForm from '../../Components/SignUp/SignUpForm'
import { UserContainer } from './Authentication.style'
const AuthenticationPage = () => {
  return (
    <UserContainer>


          <SignInForm />
          <SignUpForm />
    </UserContainer>


  )
}

export default AuthenticationPage