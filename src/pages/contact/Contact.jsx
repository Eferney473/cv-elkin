import React from 'react';
import { 
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaDribbble
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Ponte en  <span>Contacto</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Arriesgate!</h3>

          <p className="contact__description">
            No dudes en ponerte en contacto conmigo. Me interesa conocer tus ideas y ayudarte a hacerlas realidad.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Escríbeme </span>
                <h4 className="info__desc"> elkincobos@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Llámame </span>
                <h4 className="info__desc"> +573209652025</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>

            <a href="https://dribbble.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Tu Nombre' 
                className='form__control' 
              />
            </div>

            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Tu Correo' 
                className='form__control' 
              />
            </div>

            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Tu Asunto' 
                className='form__control' 
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea placeholder='Tu Mensaje' className='form__control textarea'
            ></textarea>
          </div>

          <button className='button'>
            Enviar Mensaje
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact