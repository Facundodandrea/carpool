import React from 'react'
import './cards.css'

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { MdSmokingRooms } from "react-icons/md";
import { IoLogoNoSmoking } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Offer = [
    {
      id:1,
      orinTitle:'Buenos Aires',
      destTitel: 'Bariloche',
      horaLlegada: '12:00',
      horaSalida: '16:00',
      price: 14000
    },
    {
      id:2,
      orinTitle: 'Tucumán',
      destTitel: 'Buenos Aires',
      horaLlegada: '12:00',
      horaSalida: '16:00',
      price: 1600
    },
    {
      id:3,
      orinTitle: 'Santa Fe',
      destTitel: 'Córdoba',
      horaLlegada: '12:00',
      horaSalida: '16:00',
      price: 1500
    },
    {
      id:4,
      orinTitle: 'Misiones',
      destTitel: 'Mendoza',
      horaLlegada: '12:00',
      horaSalida: '16:00',
      price: 1300
    },
    {
      id:5,
      orinTitle: 'Salta',
      destTitel: 'Tucumán',
      horaLlegada: '12:00',
      horaSalida: '16:00',
      price: 1200
    },
  ]

const Cards = () => {
  return (
    <section className="offer container section">

    <div className="secContainer">
    
      <div className="mainContent grid">
        {
        Offer.map(({id,orinTitle,destTitel,price,horaSalida,horaLlegada})=>{
          return(
            <Link to='/'>
            <div className="singleOffer">
    
              <div className="offerBody">
              <div className="location flex">
                <div>
                  <IoLocationSharp className='icon'/>
                  <small>{orinTitle}</small>
                <div className='time'>
                    <FaRegClock className='icon'/>
                    <small>{horaSalida}</small>
                </div>
                </div>
                <div>
                  <IoLocationSharp className='icon'/>
                  <small>{destTitel}</small>
                <div className='time'>
                    <FaRegClock className='icon'/>
                    <small>{horaLlegada}</small>
                </div>
                </div>
                </div>

                <div className="price flex">
                  <h4>
                    ${price}
                  </h4>
                </div>
    
                <div className="amenities flex">
                <div className="singleAmenity flex">
                    <MdAirlineSeatReclineNormal className='icon'/>
                    <small>4 Asientos</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdPets className='icon'/>
                    <small>Puede llevar mascotas</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdSmokingRooms className='icon'/>
                    <small>Se puede Fumar</small>
                  </div>
                </div>

                <button className="btn flex">
                  Ver viaje
                  <IoArrowForwardOutline className='icon'/>
                </button>
              </div>
            </div>
            </Link>
          )
        })          
        }
      </div>
    </div>
        </section>
  )
}

export default Cards