import React from 'react'
import { useState, useEffect } from 'react'
// import { getProductos, getProductosPorCategoria } from '../../Asynmock'
import ItemList from '../ItemList/Itemlist'
import { useParams } from 'react-router-dom'
import { getProducts} from "../../firebase/firebase.js";

const ItemListContainer = () => {
    const [productos, setProducts] = useState([])

    useEffect(() => {
      getProducts().then((data) => setProducts(data));
  }, []);


  return (
    <>
      <h2 style={{textAlign: "center"}}>Mis Productos</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer