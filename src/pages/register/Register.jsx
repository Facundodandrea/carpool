import React from 'react'
import { Link } from 'react-router-dom'
import '../login/login.css'

import bgHero from '../../assets/images/home-globe.png'

const Login = () => {
  return (
    <section className="login">
      
          <div className="secContainer container">
          <div className="bgContainer">
            <img src={bgHero} alt="" className='bgImage'/>
          </div>

          <div className="loginCard grid">
            <div className="title">
                <h1>Registro</h1>
            </div>

            <div>
                <div className="inputDiv">
                    <label htmlFor="location">Nombre</label>
                    <input type="text" placeholder='John' />
                </div>
                <div className="inputDiv">
                    <label htmlFor="location">Apellido</label>
                    <input type="text" placeholder='Doe' />
                </div>
            </div>

            <div className="inputDiv">
            <label htmlFor="location">Correo</label>
            <input type="text" placeholder='usuario@mail.com' />
            </div>

            <div className="inputDiv">
            <label htmlFor="location">Contraseña</label>
            <input type="password" placeholder='***********' />
            </div>

            <div className="restorePassword">
                <Link to='/'>Olvide mi Contraseña</Link>
            </div>

            <button className='btn btnForm'>
            Ingresar
            </button>

            <div className="restorePassword">
                <Link to='/login'>¿Ya tienes una cuenta?</Link>
            </div>

            </div>

          </div>

    </section>
  )
}

export default Login