import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartItem from '../Cart-Item/cartItem.componenet'
import { cartActions } from '../../Redux/slices/cartSlice/CartSlice'
import { DropDownContainer,EmptyMessage, ItemsCart, checkOutButton } from './cart-dropdown.styles'

const CartDropDown = () => {

    const Navigate= useNavigate()

    const goToCheckout = () => (
     Navigate('/checkout')   
    )
    const Items = useSelector((state) => state.cart.cartItems)
  return (
    <DropDownContainer>

          <ItemsCart>
              {Items.length ? (
                  Items.map((item) => (<CartItem key={item.id} cartItem={item}/>))
              ) : <EmptyMessage> Nothing is in your cart</EmptyMessage>}
          </ItemsCart>

          <checkOutButton onClick={goToCheckout}>

              CHECKOUT

              </checkOutButton>
    </DropDownContainer>
  
  )
}

export default CartDropDown