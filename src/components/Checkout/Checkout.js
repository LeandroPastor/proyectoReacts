import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'
import { Formik } from 'formik'
import * as Yup from 'yup'
import './Checkout.css';

const esquemaValidacion = Yup.object().shape({
    nombre: Yup.string()
                .required("Campo Obligatorio")
                .min(3, "El nombre es muy corto")
                .max(20, "Demasiados caracteres"),
    apellido: Yup.string()
                .required("Campo Obligatorio")
                .min(3, "El nombre es muy corto")
                .max(20, "Demasiados caracteres"),
    email: Yup.string()
                .required("El email es obligatorio")
                .email("Formato inválido")
                .oneOf([Yup.ref("emailConfirm")], "Los emails no coinciden"),
    emailConfirm: Yup.string()
                .required("El email es obligatorio")
                .email("Formato inválido")
                .oneOf([Yup.ref("email")], "Los emails no coinciden"),                        
})

export const Checkout = () => {

    const {cart, totalCompra, deleteCart} = useContext(CartContext)

    const initialValues = {
        nombre:'',
        apellido:'',
        email:'',
        emailConfirm:'',
    }

    return (
        <>
            {cart.length === 0 
                ?   
                    <Navigate to="/" />
                :
                    <div className='container my-5' >
                        <h2>Ingresar datos para finalizar Compra</h2>
                        <hr/>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={esquemaValidacion}
                            onSubmit={(values)=>{
                                generarOrden(values, cart, totalCompra, deleteCart)
                            }}>
                            {(formik) => (
                                <form className='formStyle' onSubmit={formik.handleSubmit}>
                                    <input
                                        onChange={formik.handleChange}
                                        name="nombre"
                                        value={formik.values.nombre}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="nombre"
                                    />
                                    {formik.errors.nombre && <small>{formik.errors.nombre}</small>}
        
                                    <input
                                        onChange={formik.handleChange}
                                        name="apellido"
                                        value={formik.values.apellido}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="apellido"
                                    />
                                    {formik.errors.apellido && <small>{formik.errors.apellido}</small>}
        
                                    <input
                                        onChange={formik.handleChange}
                                        name="email"
                                        value={formik.values.email}
                                        className="form-control my-2"
                                        type="email"
                                        placeholder="email"
                                    />
                                    {formik.errors.email && <small>{formik.errors.email}</small>}
        
                                    <input
                                        onChange={formik.handleChange}
                                        name="emailConfirm"
                                        value={formik.values.emailConfirm}
                                        className="form-control my-2"
                                        type="email"
                                        placeholder="Repetir email"
                                    />
                                    {formik.errors.emailConfirm && <small>{formik.errors.emailConfirm}</small>}
        
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                            )}
                        </Formik>                        
                    </div>
            }        
        </>
    )
}

