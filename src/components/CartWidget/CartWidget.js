import React, { useContext } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {

    const {totalCart} = useContext(CartContext)

    return (
        <div>
            <Link to="/carrito"><MdOutlineShoppingCart className="icons"/></Link>
            <span className="total">{totalCart()}</span>
        </div>
    )
}
