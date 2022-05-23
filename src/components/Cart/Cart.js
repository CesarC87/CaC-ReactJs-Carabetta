import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";


const Cart = () => {
  const {cart , deleteItem, clearCart} = useContext(CartContext)  

  if(cart.length === 0) {
    return (
      <div>
        <h2 className="h2Vacio">Carrito vacío</h2>
        <Link to="/">
          <button className="btnVolver">Volver</button>
        </Link>
      </div>
    ) 
    }else {
      return (
        <>
        <div className="cartTitle">
          <h3>Tu carrito:</h3>
        </div>
        <div className="cartIzq">
          <div className="cartIzq__List">
            {
              cart.map((product) => (
                <div key={product.id} className="checkOut">
                  <span>Tu compra: {product.title}</span>
                  <span>Cantidad: {product.counter}</span>
                  <span>Precio Final: ${product.counter * product.price}</span>
                  <button onClick={() => deleteItem(product)} className="btnEliminar">Eliminar Item</button>
                </div>
              ))
            }
          </div>
          <div className="cartDer">            
            <Link to="/CartCheckout" className="btnContinuar">
              Continuar compra
            </Link>
            <button onClick={clearCart} className="btnClear">Limpiar Carrito</button>
          </div>
        </div>
        </>
      )  
};
}

export default Cart
