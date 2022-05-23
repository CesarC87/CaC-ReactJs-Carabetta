import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartCheckout.css";
import { getFirestore } from "../../firebase";
import Input from "../Input/Input";

const CartCheckout = () => {
    const { cart, clearCart } = useContext(CartContext)    
    const [fieldsComplete, setFieldsComplete] = useState(false);
    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const [datos, setDatos] = useState({
      nombre: '',
      apellido: '',
      phone: '',
      email: '',
      dni: '',
      itemId: '',
      items : cart.map( x=> x.title ),
      precioUnitario : cart.map( y => y.price )            
    });    

    const newOrder = {
        buyer: {
          nombre: datos.nombre,
          apellido: datos.apellido,
          phone: datos.phone,
          email: datos.email,
          dni: datos.dni,
          itemId: datos.itemId,
          items: datos.items,
          precioUnitario: datos.precioUnitario          
        }        
      };
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos, 
            [event.target.name] : event.target.value
        }) 
        if((datos.nombre !== "") && 
          (datos.apellido !== "") && 
          (datos.phone !== "") &&
          (datos.email !== "") &&
          (datos.dni !== "")){
            setFieldsComplete(true);
          } else {
            setFieldsComplete(false);
          }         
    }    
  
    const checkOut = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");    
        orders
        .add(newOrder)
        .then((docRef) => setDatos({
          ...datos, 
          itemId : docRef.id,                   
      }))
        .then(console.log(datos))  
        .then(setCompraFinalizada(true))
        .then(clearCart)                 
        .catch((error) => console.log(error))    

      }
    return (
        <>
        { !compraFinalizada ?  
            <form className="userData" onSubmit={checkOut}>              
                <Input label="Nombre" idFor="userName" name="nombre" type="text" handleInputChange={handleInputChange}/>
                <Input label="Apellido" idFor="userApellido" name="apellido" type="text" handleInputChange={handleInputChange}/>
                <Input label="Email" idFor="userMail" name="email" type="email" placeholder="juan@viajando.com" handleInputChange={handleInputChange}/>
                <Input label="Documento" idFor="userId" name="dni" type="number" handleInputChange={handleInputChange}/>
                <Input label="Teléfono" idFor="userPhone" name="phone" type="number" handleInputChange={handleInputChange}/>
                {
                  fieldsComplete ?                  
                   <button className="btnFinalizar" type="submit">Finalizar compra</button> : <div></div>                
                  }
            </form>
            : 
            <div className="compraFinalizada">
              <h1>Gracias por tu compra!</h1>
              <span>El id de tu compra es: <b>{datos.itemId}</b></span>
              <span>Compraste: {datos.items}</span>
              <span>Los vouchers de compra serán enviados a: <b>{datos.email}</b></span>
            </div>
            }
        </>
    )
}

export default CartCheckout

