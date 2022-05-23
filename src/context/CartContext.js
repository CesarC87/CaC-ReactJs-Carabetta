import { createContext }  from "react";
import { useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Creamos el provider
export const CartProvider = ({children}) => { // Pasamos como parámetro a children, 
                                              // que va a ser todo lo que esté dentro de provider.
    const [cart, setCart] = useState([]);
    const dontRepeat = () => {
        return (
        <span>Este ítem ya está en el carrito</span>
        )
    }

    const addItem = (product) => {

        const duplicate = cart.find(x => x.id === product.id)
        if (duplicate){
            setCart(cart.map(x => x.id === duplicate.id
                ? (product) : x))
        }else {
            setCart([...cart , product] )
        }        
    }

    const deleteItem = (product) => {
        setCart(cart.filter(x => x.id !== product.id))
        console.log(cart)
    }

    const clearCart = () => {
        setCart([])
    }
    
    return <CartContext.Provider value={{cart, addItem, deleteItem, clearCart}}>
        {children}
    </CartContext.Provider>
}