import React, { useState, useEffect } from 'react'
import { getProdsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
getProdsByCategory

const ItemListContainer = ({saludo}) => {
  const[ productos , setProductos] = useState([])
  const[ loading , setLoading] = useState(true)
  const[error , setError] = useState()

  const {cat} = useParams()
  
  useEffect(() => {
    if(cat){
      getProdsByCategory(cat).then(res => setProductos(res)).finally(setLoading(false))
    }else{
      getProducts().then(res => setProductos(res)).finally(setLoading(false))
    }
  }, [cat])

  console.log(productos)

  if(loading){
    return (
      <h2>Cargando...</h2>
    )
  }

  if(error){
    return (
      <h2>{error}</h2>
    )
  }

  return (
    <div>
    {
      productos.length > 0 &&
      <ItemList productos={productos} />
    }
    </div>
  )
}

export default ItemListContainer