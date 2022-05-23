import "./NavBar.css";
import React from "react"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { loginWithGoogle } from "../../firebase/index";
import { ReactComponent as Logo } from '../../images/SVG/Logo/Logo3.svg';
import { Icon } from '@iconify/react';
import Authentication from "../Authentication/Authentication";


const NavBar = () => {

    const {cart} = useContext(CartContext)
    let total = 0
    cart.forEach(x => {
        total += x.counter
    })
    
    return (        
            <nav className="nav">
                <div className="navContainer1">
                <Link to="/">
                    <Logo />
                </Link>
                <Authentication />                    
                </div>
                <div className="navContainer2">                
                <Link to="/category/paquetes">
                    <div className="navContainer2__item">
                        <Icon className="navContainer2__item--icono" icon="fluent:luggage-20-regular" />
                        <label>Paquetes</label>
                    </div>
                </Link>
                <Link to="/category/vuelos">
                    <div className="navContainer2__item">
                        <Icon className="navContainer2__item--icono" icon="iconoir:airplane" />
                        <label>Vuelos</label>
                    </div>
                </Link>
                <Link to="/category/alojamientos">
                    <div className="navContainer2__item">
                        <Icon className="navContainer2__item--icono" icon="bx:bx-hotel" />
                        <label>Alojamientos</label>
                    </div>
                </Link>
                <Link to="/category/actividades">
                    <div className="navContainer2__item">
                    <Icon className="navContainer2__item--icono" icon="ic:outline-local-activity" />
                        <label>Actividades</label>
                    </div>
                </Link>
                <Link to="/">
                <div className="navContainer2__item">
                    <Icon className="navContainer2__item--icono" icon="clarity:car-line" />
                        <label>Autos</label>
                    </div>
                </Link>
                <Link to="/Cart" className="toCart">
                    <Icon className="navContainer2__item--icono" icon="ant-design:shopping-cart-outlined" />
                    {
                        cart.length !== 0 && <span className="h5 mx-1">{total}</span>
                    }
                </Link>
                {/* <button onClick={loginWithGoogle} className="logIn">Ingresar</button> */}
                
                </div>
            </nav>
        
    )
}

export default NavBar
