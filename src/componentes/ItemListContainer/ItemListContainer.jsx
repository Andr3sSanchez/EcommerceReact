import React, { useState, useEffect , useContext } from 'react'
import { getProdsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

//getProdsByCategory

const ItemListContainer = ({saludo}) => {
  const[ productos , setProductos] = useState([])
  const[ loading , setLoading] = useState(true)
  const[ error , setError ] = useState()


  const { cat } = useParams()
  
  useEffect(() => {
    setLoading(true)

   if(cat){
    const productosPorCat = query(collection(db, "productos"), where('categoria', '==', cat)) 
    getDocs(productosPorCat).then(snapshot => {
      const dataProductos =  snapshot.docs.map(doc => {
        const conId = doc.data()
        return {id: doc.id , ...conId }
      })
      setProductos(dataProductos)
    }).finally(()=> setLoading(false))
  }else{
    const productosRef = collection(db, "productos")
    getDocs(productosRef).then(snapshot => {
      const dataProductos =  snapshot.docs.map(doc => {
        const conId = doc.data()
        return {id: doc.id , ...conId }
      })
      setProductos(dataProductos)
    }).finally(()=> setLoading(false))
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