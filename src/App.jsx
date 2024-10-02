import React from 'react'
import Navbar from "./Componentes/Navbar/Navbar"
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './Componentes/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App