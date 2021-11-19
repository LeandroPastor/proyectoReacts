import React, {useEffect, useState} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'





export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState ([])
    
    useEffect( () => {

        setLoading(true)

        pedirDatos(true)
        .then( (response) => {
            setProductos(response.filter(response => response.id === 1))
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
                <h2>...</h2>
                : <>
                    <ItemDetail producto={productos} />
                </>
            }  
        </>
    )
}
