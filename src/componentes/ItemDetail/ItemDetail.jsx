import React from 'react'

export const ItemDetail = ({producto}) => {
    const{nombre, image , precio, id, descripcion} = producto

    
    return (
    <div>
        <h3>{nombre}</h3>
        <img src={image} alt={`la foto del producto ${nombre}`} />
        <p>{descripcion}</p>
        <p>${precio}</p>
    </div>
    )
}
