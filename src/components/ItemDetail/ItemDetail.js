import React from 'react'
import { CardGroup, Card, Container, Row} from 'react-bootstrap'
import "./ItemDetail.css"





export const ItemDetail = ({id, price, name, desc, img, marks, category}) => {
    
    
    
    return (
        <Container className="contenedor">
            <Row xs={1} md="auto" className="g-4 centrado">
                
                    <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} alt={name} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p>{desc}</p>
                                <p>Precio: $ {price}</p>
                                <p>Marca: {marks}</p>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </CardGroup>
                
            </Row>
        </Container>
        
    )
}
