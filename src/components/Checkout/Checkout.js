import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { validarDatos } from '../../helpers/validarDatos'
import { db } from '../../firebase/config'
import { collection, Timestamp, writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'


export const Checkout = () => {

    const {cart, totalCompra, deleteCart} = useContext(CartContext)

    const [values, setValues] = useState ({
        nombre:'',
        apellido:'',
        email:'',
        emailConfirm:'',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validarDatos(values)) { return }

        const orden = {
            buyer: {...values},
            items: cart,
            total: totalCompra(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))

        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const prodToUpdate = cart.find((prod) => prod.id === doc.id)

            if(doc.data().stock >= prodToUpdate.clicks){
                batch.update(doc.ref, {
                    stock: doc.data().stock - prodToUpdate.clicks
                })
            } else {
                outOfStock.push(prodToUpdate)
            }
        })

        if(outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((res) => {
                    batch.commit()
                    Swal.fire({
                        icon: "success",
                        title: "Orden registrada",
                        text: `El número de su orden es: ${res.id} `
                    })
                    deleteCart() 
                }) 
        } else {
            Swal.fire({
                icon: "error",
                title: "Los siguientes artículos no tienen stock:",
                text: outOfStock.map(el => el.name).join(', ')
            })
        }    
    }




    return (

        <>
            {cart.length === 0 && <Navigate to="/" />}
            <div className='container my-5' >
                <h2>Resumen de tu compra</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleInputChange}
                        name="nombre"
                        value={values.nombre}
                        className="form-control my-2"
                        type="text"
                        placeholder="nombre"
                    />
                    {values.nombre.length < 4 && <small>Nombre Inválido</small>}

                    <input
                        onChange={handleInputChange}
                        name="apellido"
                        value={values.apellido}
                        className="form-control my-2"
                        type="text"
                        placeholder="apellido"
                    />
                    {values.apellido.length < 4 && <small>Apellido Inválido</small>}

                    <input
                        onChange={handleInputChange}
                        name="email"
                        value={values.email}
                        className="form-control my-2"
                        type="email"
                        placeholder="email"
                    />
                    {values.email.length < 4 && <small>Email Inválido</small>}

                    <input
                        onChange={handleInputChange}
                        name="emailConfirm"
                        value={values.emailConfirm}
                        className="form-control my-2"
                        type="email"
                        placeholder="Repetir email"
                    />
                    {values.emailConfirm !== values.email && <small>No coincide el email</small>}

                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </>
    )
}

