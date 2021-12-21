import React from 'react'
import { Card, CardGroup} from 'react-bootstrap'
import { Link } from "react-router-dom"
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
                        <p>Precio: $ {price}</p>
                    </Card.Text>
                    <Link to={`/detalle/${id}`} className="btn btn-secondary">Ver detalle</Link> 
                </Card.Body>
            </Card>
            </CardGroup>
        </article>
    )
}
