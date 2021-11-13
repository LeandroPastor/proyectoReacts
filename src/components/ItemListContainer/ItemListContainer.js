import React from 'react'
import { Container } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemListContainer.css'

export const ItemListContainer = ( {greeting} ) => {

    const [a,b] = greeting
   
    return (
        <Container className="contenedor">
            <h2>{a}</h2>
            <hr/>
            <p>{b}</p>
            <ItemCount />
        </Container>
    )
}
