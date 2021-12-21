import { addDoc, getDocs, query, collection, writeBatch, where, Timestamp, documentId } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'
import { db } from './config'

export const generarOrden = async (values, cart, totalCompra, deleteCart) => {

    const orden = {
        buyer: {...values},
        items: cart,
        total: totalCompra(),
        date: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)
    const ordersRef = collection(db, "orders")
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))
    const outOfStock = []
    const productos = await getDocs(q)

    productos.docs.forEach((doc) => {
        const prodToUpdate = cart.find((prod) => prod.id === doc.id)

        if(doc.data().stock >= prodToUpdate.clicks){
            batch.update(doc.ref, {
                stock: doc.data().stock - prodToUpdate.clicks
            })
        } else {
            outOfStock.push(prodToUpdate)
        }
    })

    if(outOfStock.length === 0) {
        addDoc(ordersRef, orden)
            .then((res) => {
                batch.commit()
                Swal.fire({
                    icon: "success",
                    title: "Orden registrada",
                    text: `El número de su orden es: ${res.id} `
                })
                deleteCart() 
            }) 
    } else {
        Swal.fire({
            icon: "error",
            title: "Los siguientes artículos no tienen stock:",
            text: outOfStock.map(el => el.name).join(', ')
        })
    }
}