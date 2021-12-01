import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    

    const addCart = (item) => {
        setCart( [...cart, item] )
    }

    const removeCart = (id) => {
        setCart( cart.filter(prod => prod.id !== id) )
    }

    const deleteCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const totalCart = () => {
        return cart.reduce((acc,prod) => acc + prod.clicks, 0)
    }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.clicks, 0)
    }



    return(
        <CartContext.Provider value={{
            cart,
            addCart,
            removeCart,
            deleteCart,
            isInCart,
            totalCart,
            totalCompra
          }}>
              {children}
        </CartContext.Provider>
    )
}