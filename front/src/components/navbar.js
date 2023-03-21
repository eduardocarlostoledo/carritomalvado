import React from "react";
import { getTotalProductsInCart } from '../reducer';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import barrita from '../../src/images/mpbarra.png';
import './navbar.css'
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import CartSummry from "./cartSummary";

export function Nav(){
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <div className="contenedor_nav">
        <Link to={'/'} className="contenedor_logo">
          <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/161E/production/_113026650_1-1.jpg" alt="Logo" className="logo" />
        </Link>
        <div className="buscador">
          <input type="text" placeholder="Buscar productos" className="input_busqueda" />
          <button type="button" className="boton_buscar">
            <FaSearch />
          </button>
        </div>
        <div className="contenedor_nav_items">
          <Link to="#" className="nav_item">
             Categorías
          </Link>
          <Link to="#" className="nav_item">
             Ofertas
          </Link>
          <Link to="#" className="nav_item">
             Historial
          </Link>
        </div>
        <div className="contenedor_nav_icons">
          <Link to="#" className="nav_icon">
            <FaUser />
          </Link>
          <CartSummry cart={cart} />
        </div>
        <img src={barrita} className="barrita" alt="barrita" />
      
      </div>
    </nav>
  );
}