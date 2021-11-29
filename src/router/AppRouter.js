import React from 'react'
import { useRoutes, Navigate } from 'react-router'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'

export const AppRouter = () => {
   
    const routes = useRoutes([
        {path: "/", element: <ItemListContainer />},
        {path: "/productos", element: <ItemListContainer />},
        {path: "/productos/categorias/:categoryId", element: <ItemListContainer />},
        {path: "/detalle/:productoId", element: <ItemDetailContainer />},
        {path: "*", element: <Navigate to="/" />},
    ])

    return routes  



}
