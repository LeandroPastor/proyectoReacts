import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import './ItemListContainer.css'
import { collection, getDocs, query, where} from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState ([])
    const { categoryId } = useParams()
    const [greeting, setGreeting] = useState()
    
    
    useEffect( () => {
        setLoading(true)

        const productosRef = collection(db, 'productos')

        const q = categoryId ? query(productosRef, where("category", "==", categoryId) ) : productosRef

        getDocs(q)
            .then((collection)=>{
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                if (categoryId) {
                    setProductos(items)
                    setGreeting(`Bienvenida a la sección de ${categoryId}!!!`)
                } else {
                    setProductos(items)
                    setGreeting("Bienvenida a tu tienda online!!!")
                }
                
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [categoryId])


   


    return (
        
        
        <>
            {
            loading 
                ? <Loader/> 
                : <ItemList productos={productos} greeting={greeting} />
            }
        </>
    )
}

