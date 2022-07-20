import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user:null
    
}

export const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logIn:(state, action) => {
                state.user = action.payload
        },
        logOut:(state) => {
            state.user = null;
        }

    }
})

export const {logIn, logOut} = authSlice.actions;

export const currentUser =(state) => state.user
export default authSlice.reducer