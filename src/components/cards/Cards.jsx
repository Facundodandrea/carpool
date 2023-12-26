// Cards.js
import React from 'react';
import './cards.css';
import { IoLocationSharp, IoArrowForwardOutline } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa6';
import { MdAirlineSeatReclineNormal, MdPets, MdSmokingRooms } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cards = ({ offers, filters }) => {
  const filteredOffers = offers.filter((offer) => {
    const { time, canBringPets, canSmoke } = filters;
    const offerTime = parseInt(offer.horaSalida.replace(':', ''), 10); // Convertir la hora a un número

    return (
      (!time ||
        (time === 'before6' && offerTime < 600) ||
        (time === 'from6to12' && offerTime >= 600 && offerTime <= 1200) ||
        (time === 'from12to18' && offerTime > 1200 && offerTime <= 1800) ||
        (time === 'after18' && offerTime > 1800)) &&
      (!canBringPets || (canBringPets && offer.pets === 'si')) &&
      (!canSmoke || (canSmoke && offer.smoking === 'si'))
    );
  });

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="mainContent grid">
          {filteredOffers.length > 0 ? (
            filteredOffers.map(({ id, orinTitle, destTitel, price, horaSalida, horaLlegada, pets, smoking }) => (
              <Link to="/" key={id}>
                <div className="singleOffer">
                  <div className="offerBody">
                    <div className="location flex">
                      <div>
                        <IoLocationSharp className="icon" />
                        <small>{orinTitle}</small>
                        <div className="time">
                          <FaRegClock className="icon" />
                          <small>{horaSalida}</small>
                        </div>
                      </div>
                      <div>
                        <IoLocationSharp className="icon" />
                        <small>{destTitel}</small>
                        <div className="time">
                          <FaRegClock className="icon" />
                          <small>{horaLlegada}</small>
                        </div>
                      </div>
                    </div>
                    <div className="price flex">
                      <h4>${price}</h4>
                    </div>
                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdAirlineSeatReclineNormal className="icon" />
                        <small>4 Asientos</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdPets className="icon" />
                        <small>{pets === 'si' ? 'Puede llevar mascotas' : 'No puede llevar mascotas'}</small>
                      </div>
                      <div className="singleAmenity flex">
                        {smoking === 'si' ? (
                          <MdSmokingRooms className="icon" />
                        ) : (
                          <MdSmokingRooms className="icon" />
                        )}
                        <small>{smoking === 'si' ? 'Se puede Fumar' : 'No puede fumar'}</small>
                      </div>
                    </div>
                    <button className="btn flex">
                      Ver viaje
                      <IoArrowForwardOutline className="icon" />
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No hay ofertas disponibles con los filtros seleccionados.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cards;
