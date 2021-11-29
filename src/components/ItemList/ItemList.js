import React from 'react'
import { Container, Row} from 'react-bootstrap'
import { Item } from '../Item/Item'
import { MensajeStock } from '../MensajeStock/MensajeStock'
import './ItemList.css'

export const ItemList = ({productos, greeting}) => {
    
    if (productos.length === 0){
        productos= false
    }  

    

    return (

        <Container className="contenedor">
            
            
            <h2>{greeting}</h2>
            
            
            
            <hr/>       
                {
                    
                    productos ?
                    <Row xs={1} md="auto" className="g-4 centrado">
                        {productos.map ((prod) => <Item {...prod}/> )}
                    </Row> 
                    :
                    <MensajeStock />
                    
                }        
            <hr/>

            


        </Container>
        
    )
}
