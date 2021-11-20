import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState ([])

    const { categoryId } = useParams()
    
    useEffect( () => {

        setLoading(true)

        pedirDatos(true)
        .then( (response) => {

            if(!categoryId){
                setProductos(response)
            } else {
                setProductos(response.filter ( producto => producto.category === categoryId))
            }
        }) 
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])



    return (
        <>
            {
            loading ? 
                <h2>Cargando...</h2>
                : <>
                    <ItemList productos={productos} greeting="Bienvenida a tu tienda online!!!" />
                </>
            }
            
            
            
        </>
    )
}
