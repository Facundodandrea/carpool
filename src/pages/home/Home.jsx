import {useState} from 'react'
import './home.css'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import bgHero from '../../assets/images/home-globe.png'
import selectImg from '../../assets/images/Order ride-pana.svg'
import reserveImg from '../../assets/images/Carpool-rafiki.svg'
import enjoyImg from '../../assets/images/Car driving-pana.svg'
import Cards from '../../components/cards/Cards'

const Home = () => {

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
            <img src={bgHero} alt="" className='bgImage'/>
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

    <section className="about section">
        <div className="secContainer">


        <div className="mainContent container grid">
        <div className="singleItem">
            <img src={selectImg} alt="selectImg" className='itemImg'/>
            
            <h3>Selecciona</h3>

            <p>
              Elije el destino, la fecha de salida y únete a los cientos de viajes. Te pondremos en contacto con un conductor que vaya a tu mismo destino.
            </p>

          </div>
          <div className="singleItem">
            <img src={reserveImg} alt="reserveImg" className='itemImg'/>
            
            <h3>Reserva tu lugar</h3>

            <p>
              Envia una solicitud para unirte al viaje. El conductor sera el encargado de brindarte el punto de encuentro de la salida y el horario.
            </p>

          </div>
          <div className="singleItem">
            <img src={enjoyImg} alt="enjoyImg" className='itemImg'/>
            
            <h3>Disfruta</h3>

            <p>
              Una vez unido al viaje solo queda disfrutar del camino, conociendo nuevos lugares y personas que viajan contigo. Al finalizar los gastos se veran divididos entre los viajantes.
            </p>

          </div>
        </div>
        
      </div>
    </section>

    <section className="travels section">
    <div className="secIntro">
        <h2 className="secTitle">
          Viajes rápidos
        </h2>
        <Cards {...travelProps}/>
      </div>
    </section>

    <Footer />

    </>
  )
}

export default Home