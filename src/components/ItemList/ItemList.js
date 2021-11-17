import React from 'react'
import { Container, Row} from 'react-bootstrap'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({productos, greeting}) => {
    
    const [a] = greeting


    return (

        <Container className="contenedor">
            <h2>{a}</h2>
            
            <hr/>
            <Row xs={1} md={4} className="g-4 centrado">
                {productos.map ((prod) => <Item {...prod}/> )}
            </Row> 
            
        </Container>
        
    )
}
