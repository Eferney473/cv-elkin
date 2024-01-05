import React from 'react';
import Stats from '../../components/Stats';
import Info from '../../components/Info';
import { FaDownload } from "react-icons/fa";
import CV from '../../assets/elkin-Cv.pdf'
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
import "./about.css";



const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          Sobre <span>Mí</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="secion__subtitle">
              Información Personal
            </h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={CV} DOWNLOAD='' className="button">
              Download CV
              <span className='button__icon'>
                <FaDownload />
              </span> 
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>

        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">Mis Habilidades</h3>

        <div className='skills__container grid'>
          <Skills />  
        </div> 
      </section>

      <div className="separator"></div>

      <section className='resume'>
        <h3 className='section__subtitle subtitle__center'>
          Experiencia & Educación
        </h3>

        <div className='resume__container grid'>
          <div className='resume__data'>
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className='resume__data'>
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
        </div>
      </section>

    </main>
  )
}

export default About