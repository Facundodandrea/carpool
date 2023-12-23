import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

import { IoCarSportSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [active,setActive] = useState('navBar')
  
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }

  const removeNav = () =>{
    setActive('navBar')
  }

  const [transparent,setTransparent] = useState('header');
  const addBg = () =>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className="navBarSection">
      <div className={transparent}>

        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1 className='flex'><IoCarSportSharp  className='icon'/>
            Carpool
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            
          <li className="navItem">
              <Link to="/" className="navLink">Home</Link>
            </li>
            
            <li className="navItem">
              <Link to="/travels" className="navLink">Buscar viajes</Link>
            </li>
            
            <li className="navItem">
              <Link to="/offerseats" className="navLink">Ofrecer viajes</Link>
            </li>

            <div className="headersBtns flex">
              <button className="btn loginBtn">
                <Link to="/login">Ingresar</Link>
              </button>
            </div>

          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <IoClose className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <IoMenu className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default Navbar