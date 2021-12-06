import React from 'react'
import './ItemCount.css'
import {MdRemoveCircle} from "react-icons/md";
import {MdAddCircle} from "react-icons/md";
import { btnConfig } from './btnConfig';


export const ItemCount = ({cant, clicks, setClicks, agregar}) => {

    

    const addClicks = () => {
        clicks >= cant ? alert("No hay más stock") : setClicks (clicks + 1)
    }

    const subtractClicks = () => {
        clicks > 0 ? setClicks (clicks - 1) : alert("no se puede elegir una cantidad negativa")
    }

    const config = btnConfig(cant, clicks, subtractClicks, addClicks, agregar)



    return (
        
        <>
        <div className="count">
            <MdRemoveCircle {...config.resta}/>
                <span className="mx-3">
                    {clicks}                    
                </span >
            <MdAddCircle {...config.suma}/>
        </div>
        <button {...config.agregar} >
            Agregar al Carrito
        </button>
        </>
    )
}
