import React, { useContext, useState } from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export const ItemDetail = ({producto}) => {

    const { addToCart, isInCart, handleAddToCart } = useContext(CartContext)

    const{nombre, image , precio, descripcion} = producto

    
    return (
    <div>
        <h3>{nombre}</h3>
        <img src={image} alt={`la foto del producto ${nombre}`} />
        <p>{descripcion}</p>
        <p>${precio}</p>
        {
                isInCart(producto.id) ?
                    <Link to='/cart'>Ir Al Carrito</Link>
                    :
                    <ItemCount handleAddToCart={addToCart} prod={producto}/>     
            }
        
    </div>
    )
}
