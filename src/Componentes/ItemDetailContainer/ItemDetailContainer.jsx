import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../asynmock'
import ItemDetail from '../Itemdetail/Itemdetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {idItem} = useParams()
    useEffect(()=>{
        getUnProducto(idItem)
        .then(respuesta => setProducto(respuesta))
    }, [idItem])
  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer