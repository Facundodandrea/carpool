import {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Cards from '../../components/cards/Cards'
import Filter from '../../components/filter/Filter';

const Travels = () => {

  const [filters, setFilters] = useState({
    time: '',
    canBringPets: false,
    canSmoke: false,
  });

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const travelProps = {
    offers: [
      {
        id:1,
        orinTitle:'Buenos Aires',
        destTitel: 'Bariloche',
        horaLlegada: '12:00',
        horaSalida: '00:00',
        price: 14000,
        pets: 'si',
        smoking: 'si'
      },
      {
        id:2,
        orinTitle: 'Tucumán',
        destTitel: 'Buenos Aires',
        horaLlegada: '12:00',
        horaSalida: '6:00',
        price: 1600,
        pets: 'si',
        smoking: 'si'
      },
      {
        id:3,
        orinTitle: 'Santa Fe',
        destTitel: 'Córdoba',
        horaLlegada: '12:00',
        horaSalida: '18:30',
        price: 1500,
        pets: 'no',
        smoking: 'no'
      },
      {
        id:4,
        orinTitle: 'Misiones',
        destTitel: 'Mendoza',
        horaLlegada: '12:00',
        horaSalida: '14:00',
        price: 1300,
        pets: 'si',
        smoking: 'no'
      },
      {
        id:5,
        orinTitle: 'Salta',
        destTitel: 'Tucumán',
        horaLlegada: '12:00',
        horaSalida: '16:00',
        price: 1200,
        pets: 'no',
        smoking: 'si'
      },
    ],
    filters,
    onFilterChange: handleFilterChange,
  }
  return (
    <>
    <Navbar />
    <section className="home">
      
          <div className="secContainer container">
          <div className="bgContainer">
            <img src={""} alt="" className='bgImage'/>
          </div>

            <div className="homeText">

              <h1 className="title">
              Conectandote con nuevos destinos 
              </h1>

            </div>

            <div className="homeCard grid">

              <div className="originnDiv">
                <label htmlFor="location">Origen</label>
                <input type="text" placeholder='Buenos Aires' />
              </div>

              <div className="destinationDiv">
                <label htmlFor="location">Destino</label>
                <input type="text" placeholder='Bariloche' />
              </div>

              <div className="dateDiv">
                <label htmlFor="location">Fecha</label>
                <input type="text" placeholder='16/03/2024' />
              </div>

              <div className="passengerDiv">
                <label htmlFor="location">Pasajeros</label>
                <input type="text" placeholder='4' />
              </div>

              <button className='btn btnForm'>
                Buscar
              </button>

            </div>

          </div>

    </section>
    <section className="travels section">
    <div className="secIntro">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        <Cards  {...travelProps}/>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Travels