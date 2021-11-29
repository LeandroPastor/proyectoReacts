import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import "./ItemDetail.css"
import { useNavigate } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'





export const ItemDetail = ({id, price, name, desc, img, marks, category, stock}) => {
    
    const [clicks, setClicks] = useState(0)
    const [agregado, setAgregado] = useState (false)

    const navigate = useNavigate()

    const handleAtras = () => {
        navigate(-1)
    }

    const handleAgregar = () => {

        if(clicks > 0){
            console.log('Artículo agregado:', {
                id, 
                name, 
                price,
                category,
                clicks
            })
    
            setAgregado(true)
        } else {
            alert ("Seleccione una cantidad del artículo para finalizar la compra")
        }

       
    }



    return (
        <Container className="contItemDetail" >    
                
                <div className="itemDetail">
                    <img src={img} alt={name} className="img"/>
                    <div className="inf">
                        <h1>"{name}"</h1>
                        <h2>$ {price}</h2>
                        <p>{desc}</p>
                        <h3>{marks}</h3>
                        <hr/>

                        {
                            agregado 
                            ? <Link to="/carrito" className="btn btn-warning">Terminar compra</Link>
                            :
                            <ItemCount 
                            cant={ stock }
                            clicks={clicks}
                            setClicks={setClicks}
                            agregar = { handleAgregar }
                            />
                        }
                                            
                    </div>
                </div>
                
                <button className="btn btn-secondary btnAtras" onClick={handleAtras}> Atrás </button>        
            
        </Container>
        
    )
}
