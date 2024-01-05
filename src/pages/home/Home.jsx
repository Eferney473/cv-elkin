import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Soy Elkin Cobos.</span> Programador junior
          </h1>

          <p className="home__description">
            Soy un programador junior radicado en Bogotá enfocado en 
            crear experiencias fáciles de usar. Me apasiona crear software 
            excelente que mejore las vidas de quienes me rodean.
          </p>

          <Link to='/about' className='button'>
            Sobre mí {''} 
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  )
}

export default Home