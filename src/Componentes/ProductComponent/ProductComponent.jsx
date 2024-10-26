import { useState,useEffect } from "react";
import { getProducts,
} from "../../firebase/firebase";

export default function ProductComponent(){
    const [myProd, setMyProds] = useState ([])

    useEffect (() => {
        getProducts().then((products) => setMyProds(products));
    }, []);


    return <>
    {myProd &&
        myProd.map((prod) => (
        <article key={prod.id}>
            <h4>{prod.name}</h4>
            <p>{prod.description}</p>
            <p>Precio ${prod.price}</p>
            <p>Categoria: {prod.category}</p>
        </article>
        ))}
    </>
}