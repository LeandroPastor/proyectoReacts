import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import "./CartView.css"
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';


export const CartView = () => {

    const {cart, deleteCart} = useContext(CartContext)
    


    return (    

        <div className="container mt-5">
            {
                cart.length > 0
                ?
                    <>
                    <h2>Mi Carrito</h2>
                    <section>
                        {
                            cart.map((prod) => <CartItem {...prod}/> )
                        }
                    </section>
                    <hr/>
                    <div>
                        <button className="btn btn-danger" onClick={deleteCart}>Vaciar Carro</button>
                        <button className="btn btn-success mx-2" >Terminar Compra</button>
                    </div>
                    </>
                :
                <>
                <h3>Carrito sin productos</h3>
                <hr/>
                <Link to="/productos" className="btn btn-success">Ir al Shop</Link>
                </>    
            }








        </div>
    )
}
