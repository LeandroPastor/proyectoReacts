import React from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import './ItemListContainer.css'
import { useProds } from './useProds'


export const ItemListContainer = () => {

    const { categoryId } = useParams()
    const { loading, productos, greeting} = useProds(categoryId)    

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

