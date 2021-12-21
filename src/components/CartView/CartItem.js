import React, { useContext } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';


export const CartItem = ({id,name, price, img, clicks}) => {

    const {removeCart} = useContext(CartContext)

    return (        
        <div className="contCartView mt-2">
            <img src={img} alt={name} className="imgCart"/>
            <h4>{name}</h4>
            <h5>Precio: ${price}</h5>
            <h4>Cantidad: {clicks}</h4>
            <span onClick={()=>{removeCart(id)}}>< FaRegTrashAlt className="removeBot" /></span> 
        </div>
    )
}
