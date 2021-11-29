import React from 'react'
import { Container } from 'react-bootstrap'
import "./ItemDetail.css"
import { useNavigate } from 'react-router'





export const ItemDetail = ({id, price, name, desc, img, marks, category}) => {
    
    const navigate = useNavigate()

    const handleAtras = () => {
        navigate(-1)
    }

    return (
        <Container className="contItemDetail">



            
                <img src={img} alt={name} className="img"/>
                <div className="inf">
                    <h1>"{name}"</h1>
                    <h2>$ {price}</h2>
                    <p>{desc}</p>
                    <h3>{marks}</h3>
                    <hr/>
                    <button className="btn btn-secondary" onClick={handleAtras}> Atrás </button>
                </div>

                   
                
            
            
        </Container>
        
    )
}
