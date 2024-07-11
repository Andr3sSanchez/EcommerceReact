import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a la tienda en linea"/>
    </>
  )
}

export default App
