import React from 'react'
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting= "bienvenidos a tu vinoteca de confinza"/>
    </>
  )
}

export default App