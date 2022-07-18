import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {  signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { SignInContainer, ButtonContainer, BaseButton, GoogleButton } from './SignIn.style'
import FormInput from '../FormInput/FormInput'

const formFields = {
    email: "",
    password: "",
}
const SignInForm = () => {
    const [signInData, setSignInData] = useState(formFields)


    //get setCurrentUser fro userContext

    // const { setCurrentUser } = useContext(UserContext)


    //
    const { email, password } = signInData;
    const handleChange = (event) => {
        const { name, value } = event.target;

        setSignInData({ ...signInData, [name]: value })


    }

    //



    const resetSignInData = () => {
        setSignInData(formFields)
    }


    //function to enable us to sign in using our google account
    //why ise this???
    const SignInWithGoogle = async () => {
        await signInWithGooglePopup();

    }
    //function to enable us to submit our form to firebase
    const handleSubmit = async (event) => {
        event.preventDefault()


        try {

            //Firebase method to help us to sign in using our email and password 
            const { user } = await signInWithEmailAndPassword(getAuth(), email, password)


            resetSignInData()

        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('user wit that email does not exits');
                    break;
                default: console.log('error:', error)

            }


        }
    }
    return (
        <SignInContainer>
            <h2>
                I already Have an Account
            </h2>

            <span>
                Sign In with your email and password
            </span>
            <form onSubmit={handleSubmit}>




                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}

                />


                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}

                />

                <ButtonContainer>

                    <BaseButton type='submit'> submit</BaseButton>
                    <GoogleButton onClick={SignInWithGoogle}>Google Sign In</GoogleButton>
                </ButtonContainer>
            
            </form>



        </SignInContainer>
    )
}

export default SignInForm