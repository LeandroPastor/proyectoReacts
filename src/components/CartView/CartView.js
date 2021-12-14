import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import "./CartView.css"
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';


export const CartView = () => {

    const {cart, deleteCart, totalCompra} = useContext(CartContext)
    


    return (    

        <div className="container mt-5">
            {
                cart.length > 0
                ?
                    <>
                    <h2>Mi Carrito</h2>
                    <section>
                        {
                            cart.map((prod) => <CartItem key={prod.id} {...prod}/> )
                        }
                    </section>
                    <hr/>
                    <div>
                        <h3 className='sumaTotal'>Total: ${totalCompra()}</h3>
                        <button className="btn btn-danger" onClick={deleteCart}>Vaciar Carro</button>
                        <Link to="/checkout" className="btn btn-success mx-2" >Terminar Compra</Link>
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
