import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'

import { IoCarSportSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <Link to="/" className='logo flex'>
              <h1 className='flex'><IoCarSportSharp className='icon'/>Carpool</h1>
            </Link >
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Links útiles
          </span>
            <li>
              <Link to="/" >Home</Link >
            </li>
            <li>
              <Link to="/travels" >Buscar viajes</Link >
            </li>
            <li>
              <Link to="/offerseats" >Ofrecer viaje</Link >
            </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Acerca de
          </span>
            <li>
              <Link to="" >Sobre Nosotros</Link >
            </li>
            <li>
              <Link to="" >Como compartir un auto</Link >
            </li>
            <li>
              <Link to="" >Centro de ayuda</Link >
            </li>
            <li>
              <Link to="" >Términos y Condiciones</Link >
            </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Contáctanos
          </span>
          <span className="phone">+54 9 381 405 7662</span>
          <span className="email">contact@carpool.com</span>
        </div>

      </div>
    </div>
  )
}

export default Footer