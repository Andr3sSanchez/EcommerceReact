import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getOneProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

export const ItemDetailContainer = () => {
    const[producto , setProducto ] = useState({})
    const[ loading , setLoading ] = useState(true)
    const[ error , setError ] = useState()
    const[ mensaje , setMensaje ] = useState(0)

    const { id } = useParams()
    console.log(useParams())

    useEffect(() => {
        setLoading(true)

        const productoRef = doc(db, "productos", id)

        getDoc(productoRef).then(snapshot => {
            const dataProducto = snapshot.data()
            const productoListo = { ...dataProducto, id: snapshot.id}
            setProducto(productoListo)
        }).finally(setLoading(false))
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