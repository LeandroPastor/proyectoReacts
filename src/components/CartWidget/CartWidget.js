import React, { useContext } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {

    const {totalCart, cart} = useContext(CartContext)

    return (
        <div className={cart.length === 0 ? "ocultar" : " "}>
            <Link to="/carrito"><MdOutlineShoppingCart className="icons"/></Link>
            <span className="total">{totalCart()}</span>
        </div>
    )
}
