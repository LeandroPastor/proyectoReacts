import React from 'react'
import { Item } from '../Item/Item'
import { Container, Row} from 'react-bootstrap'





export const ItemDetail = ({producto}) => {
    return (
        <Container>
            <Row xs={1} md="auto" className="g-4 centrado">
                {producto.map ((prod) => <Item {...prod}/> )}
            </Row> 
        </Container>
    )
}
