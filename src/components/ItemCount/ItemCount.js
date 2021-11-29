import React from 'react'
import './ItemCount.css'
import {MdRemoveCircle} from "react-icons/md";
import {MdAddCircle} from "react-icons/md";


export const ItemCount = ({cant, clicks, setClicks, agregar}) => {

    

    const addClicks = () => {
        clicks >= cant ? alert("No hay más stock") : setClicks (clicks + 1)
    }

    const subtractClicks = () => {
        clicks > 0 ? setClicks (clicks - 1) : alert("no se puede elegir una cantidad negativa")
    }



    return (
        <>
        <div className="count">
            <MdRemoveCircle onClick={subtractClicks}/>
            <span className="mx-3">
                {clicks}                    
            </span >
            <MdAddCircle onClick={addClicks}/>
        </div>
        <button className="btn btn-success" onClick={agregar} >
            Agregar al Carrito
        </button>
        </>
    )
}
