import './ItemCount.css'
import React from 'react'

const IteamCount= ({Stock, Initial, Oneadd})=> {
    const [Quantity, SetQuantity] = Usestate(Initial)

    const Incremet = () => {
        if (Quantity < stock) {
            SetQuantity(Quantity+1)
        }
    }

    const Decrement = () => {
        if(Quantity > 1) {
            SetQuantity (Quantity - 1)
        }
    }

    return(
        <div ClassName='Counter'>
            <div ClassName='Controls'>
                <button ClassName='Button' OneClick={Decrement}>-</button>
                <h4 ClassName='Number'>{Quantity}</h4>
                <button ClassName='Button' OneClick={Incremet}>+</button>
            </div>
            <div>
                <button ClassName='Button' onClick={() => OnAdd(Quantity)} disabled={!Stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default IteamCount