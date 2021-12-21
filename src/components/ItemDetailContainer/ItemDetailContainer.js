import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { doc, getDoc} from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState ()
    const { productoId } = useParams()

    useEffect( () => {
        setLoading(true)

        const docRef = doc(db, 'productos', productoId)
        
        getDoc(docRef)
            .then((doc) =>{
                setProductos({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })    

    }, [productoId])

    return (
        <>
           {
            loading
            ? <Loader/>
            : <ItemDetail {...productos} />
           }  
        </>
    )
}
