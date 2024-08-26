import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import ItemCount from '../ItemCount//ItemCount';

const CartItem = ({producto}) => {

    const e = producto

    const {removeItem, addToCart} = useContext(CartContext)


    return (
        <div className='tarjeta'>
            <h2 >{e.nombre}</h2>
            <img src={e.image} alt="foto del producto" />
            <p>${e.precio}</p>
            <p>Estas llevando {e.cantidad} unidades</p>
            <p>Subtotal :  {e.precio * e.cantidad}</p>  
            <ItemCount handleAddToCart={addToCart} prod={producto}/>          
            <button onClick={()=>removeItem(e.id)}>eliminar producto</button>
        </div>
    )
}

export default CartItem