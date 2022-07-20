import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
    quantity:0,
    totalQuantity:0
}


export const CartSlice = createSlice({
    name:'cartItems',
    initialState,
    reducers:{
        addToCart(state, action){
            const newItem =action.payload;
            //
            const existingItem = state.cartItems.find((item) => item.id === newItem.id)
            if(existingItem){
                existingItem.quantity ++;
                existingItem.totalPrice +=newItem.price
            }else{
                state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    price:newItem.price
                })
                state.totalQuantity ++;
            }
        },

        removeFromCart(state, action){
            const id =action.payload;
            const existingItem = state.cartItems.filter((item) => item.id !== id)
            if(existingItem ===1){
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalQuantity --
            }else {
                existingItem.quantity --;
                existingItem.totalPrice -=existingItem.price
            }
        },
       
    }


})

export const {addToCart, removeFromCart, setShowCart}  = CartSlice.actions;
export default CartSlice.reducer;