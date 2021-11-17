import React, {useEffect, useState} from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState ([])
    
    useEffect( () => {

        setLoading(true)

        pedirDatos(true)
        .then( (response) => {
            setProductos(response)
        }) 
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])



    return (
        <>
            {
            loading ? 
                <h2>Cargando...</h2>
                : <>
                    <ItemList productos={productos} greeting={ ["Bienvenida a tu tienda online!!!"] } />
                </>
            }
            
            <ItemCount />
        </>
    )
}
