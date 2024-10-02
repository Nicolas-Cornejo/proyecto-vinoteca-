import Item from "./Componentes/Item/Item";

const misProductos = [
        { "id":1, "nombre": "Vino Tintos", "precio": 83000, "img": "../public/imagenes/vino-tinto.png", idCat: "tintos"},
        { "id":2, "nombre": "Vino Blancos", "precio": 4000, "img": "../public/imagenes/vino-blanco.png", idCat: "blancos"},
        { "id":3, "nombre": "Vino Espumoso", "precio": 61500, "img": "../public/imagenes/vino-espumoso.jpg", idCat: "espumosos"},
    ];



    export const getProductos = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(misProductos)
            }, 100)
        })
    }
    export const getUnProducto = (id)=>{
        return new Promise (resolve =>{
            setTimeout(() => {
                const producto = misProductos.find(item => item.id === id)
                resolve(producto)
            }, 100);
        })
    }
    export const getProductosPorCategoria = (idCategoria)=>{
        return new Promise (resolve =>{
            setTimeout(() => {
                const producto = misProductos.filter(item => item.idCat === idCategoria)
                resolve(producto)
            }, 100);
        })
    }