import { products } from "../data/products";



export const pedirDatos = (valor) => {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            valor === true ? resolve (products) : reject ("Promesa rechazada")
        }, 1200);
        
    })
}