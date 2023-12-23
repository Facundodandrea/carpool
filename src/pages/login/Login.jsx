import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

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
                <h1>Login</h1>
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
                <Link to='/register'>¿No tienes una cuenta?</Link>
            </div>

            </div>

          </div>

    </section>
  )
}

export default Login