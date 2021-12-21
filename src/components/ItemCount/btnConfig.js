
export const btnConfig = (cant, clicks, subtractClicks, addClicks, agregar) => {
    
    return {
        resta: {
            className: clicks === 0 ? "botRestaM" : "botRestaMa", 
            onClick: subtractClicks, 
        },
        suma: {
            className: clicks >= cant ? "botRestaM" : "botRestaMa",
            onClick: addClicks
        },
        agregar: {
            className: "btn btnColor", 
            onClick: agregar,
            disabled: clicks === 0
        }
    }
}
