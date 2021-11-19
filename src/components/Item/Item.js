import React from 'react'
import { Card, Button, CardGroup} from 'react-bootstrap'
import './Item.css'




export const Item = ({id, img, name, desc, price}) => {
   
   
    return (
        <article key={id}>
            <CardGroup>
            <Card className="centradoXs" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{desc}</p>
                        <p>Precio $:{price}</p>
                    </Card.Text>
                    <Button variant="secondary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
            </CardGroup>
        </article>
    )
}
