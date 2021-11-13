import React, { useState } from 'react'
import './ItemCount.css'
import {MdRemoveCircle} from "react-icons/md";
import {MdAddCircle} from "react-icons/md";

export const ItemCount = () => {

    const [clicks, setClicks] = useState(0)

    const addClicks = () => {
        clicks >= 10 ? alert("No hay más stock") : setClicks (clicks + 1)
    }

    const subtractClicks = () => {
        clicks > 0 ? setClicks (clicks - 1) : alert("no se puede elegir una cantidad negativa")
    }



    return (
        <>
        <div className="count">
            <MdRemoveCircle onClick={subtractClicks}/>
            <div>
                {clicks}                    
            </div>
            <MdAddCircle onClick={addClicks}/>
        </div>
        </>
    )
}
