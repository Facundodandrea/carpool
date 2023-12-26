import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Offerseat = () => {
  const [canSmoke, setCanSmoke] = useState('si');
  const [canBringPets, setCanBringPets] = useState('si');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const handleCanSmokeChange = (value) => {
    setCanSmoke(value);
  };

  const handleCanBringPetsChange = (value) => {
    setCanBringPets(value);
  };

  const handleVehicleChange = (value) => {
    setSelectedVehicle(value);
  };

  return (
    <>
      <Navbar />
      <section className="home">
        <div className="secContainer container">
          <div className="bgContainer">
            <img src={""} alt="" className='bgImage'/>
          </div>

          <div className="homeCard grid">
            <div className="originnDiv">
              <label htmlFor="location">Origen</label>
              <input type="text" placeholder='Buenos Aires' />
            </div>

            <div className="originnDiv">
              <label htmlFor="location">Dirección de salida</label>
              <input type="text" placeholder='Buenos Aires' />
            </div>

            <div className="destinationDiv">
              <label htmlFor="location">Destino</label>
              <input type="text" placeholder='Bariloche' />
            </div>

            <div className="originnDiv">
              <label htmlFor="location">Dirección de llegada</label>
              <input type="text" placeholder='Buenos Aires' />
            </div>

            <div className="dateDiv">
              <label htmlFor="location">Fecha</label>
              <input type="text" placeholder='16/03/2024' />
            </div>

            <div className="passengerDiv">
              <label htmlFor="location">Pasajeros</label>
              <input type="text" placeholder='4' />
            </div>

            <div className="originnDiv">
              <label>¿Se puede fumar?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="si"
                    checked={canSmoke === 'si'}
                    onChange={() => handleCanSmokeChange('si')}
                  />
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    value="no"
                    checked={canSmoke === 'no'}
                    onChange={() => handleCanSmokeChange('no')}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="originnDiv">
              <label>¿Puede llevar mascotas?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="si"
                    checked={canBringPets === 'si'}
                    onChange={() => handleCanBringPetsChange('si')}
                  />
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    value="no"
                    checked={canBringPets === 'no'}
                    onChange={() => handleCanBringPetsChange('no')}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="originnDiv">
              <label htmlFor="vehicle">Vehículo</label>
              <select
                id="vehicle"
                value={selectedVehicle}
                onChange={(e) => handleVehicleChange(e.target.value)}
              >
                <option value="" disabled>Select an option</option>
              </select>
            </div>

            <div className="passengerDiv">
              <label htmlFor="location">Precio</label>
              <input type="text" placeholder='$14000' />
            </div>

            <button className='btn btnForm' disabled={!selectedVehicle}>
              Publicar
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Offerseat;
