import React from 'react'
import SignInForm from '../../Components/SignIn/SignInForm'
import SignUpForm from '../../Components/SignUp/SignUpForm'
import { UserContainer } from './User.style'
const User = () => {
  return (
    <UserContainer>


          <SignInForm />
          <SignUpForm />
    </UserContainer>


  )
}

export default User