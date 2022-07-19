import { createSlice } from "@reduxjs/toolkit";


const initialState = {}

export const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        currentUser:(state, action) => {
            state.value = action.payload;
        }

    }
})

export const {currentUser} = authSlice.actions;
export default authSlice.reducer