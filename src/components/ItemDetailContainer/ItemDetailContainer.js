import React, {useEffect, useState} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'





export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState ()
    
    const { productoId } = useParams()

    
    
    useEffect( () => {

        setLoading(true)

        pedirDatos(true)
            .then( response => {
                setProductos( response.find(prod => prod.id === Number(productoId)))
            })
            
            .finally(() => {
                setLoading(false)
            })
    }, [productoId])



    return (
        <>
           {
            loading
            ? <h2>...</h2>
            : <ItemDetail {...productos} />
           }  
        </>
    )
}
