import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getOneProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const[producto , setProducto] = useState({})
    const[ loading , setLoading] = useState(true)
    const[error , setError] = useState()
    const[mensaje , setMensaje] = useState(0)

    const {id} = useParams()

    useEffect(() => {
        getOneProduct(id)
        .then(res => setProducto(res))
        .finally(() => setLoading(false)
        )
    }, [])

    if(loading){
        return(
            <h1>Cargando...</h1>
        )
    }

    return (
        <div>
            {
                producto &&
            <ItemDetail producto={producto}/>
            }
        </div>
    )
}