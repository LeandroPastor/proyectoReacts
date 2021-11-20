import React from 'react'
import { Container, Row} from 'react-bootstrap'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({productos, greeting}) => {
    
    


    return (

        <Container className="contenedor">
            <h2>{greeting}</h2>
            <hr/>


            <Row xs={1} md="auto" className="g-4 centrado">
                {productos.map ((prod) => <Item {...prod}/> )}
            </Row> 
            
            <hr/>

        </Container>
        
    )
}
