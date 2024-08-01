import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ e }) => {
    return (
        <div className='tarjeta'>
            <h2>{e.nombre}</h2>
            <img src={e.image} alt="Imagen del producto" />
            <p>${e.precio}</p>
            <Link to={`/detalle/${e.id}`}> Ver detalle </Link>
        </div>
    )
}

export default Item