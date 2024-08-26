import React, {useContext} from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
  const {cart, itemQuantity} = useContext(CartContext)

  console.log("Carrito",cart)

  return (
    <div className='widget'>
        <span>{itemQuantity()}</span>
        <FaCartShopping />
    </div>
  )
}

export default CartWidget