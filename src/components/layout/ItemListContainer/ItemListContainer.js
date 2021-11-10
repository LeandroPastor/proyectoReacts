import React from 'react'
import { Container } from 'react-bootstrap'
import './ItemListContainer.css'

export const ItemListContainer = ( {greeting} ) => {
   
   
    return (
        <Container className="contenedor">
            <h2>{greeting[0]}</h2>
            <hr/>
            <p>{greeting[1]}</p>
        </Container>
    )
}
