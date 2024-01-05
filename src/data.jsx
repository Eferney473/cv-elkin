import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    /*title: 'First Name : ',*/
    title: 'Nombre : ',
    /*description: 'Steve',*/
    description: 'Elkin',
  },

  {
    id: 2,
    /*title: 'Last Name : ',*/
    title: 'Apellido : ',
    /*description: 'Milner',*/
    description: 'Cobos',
  },

  {
    id: 3,
    /*title: 'Nationality : ',*/
    title: 'Nacionalidad : ',
    /*description: 'Tunisian',*/
    description: 'Colombiano',
  },

  {
    id: 4,
    /*title: 'Age : ',*/
    title: 'Edad : ',
    /*description: '27 Years',*/
    /*description: '47 Years',*/
    description: '47 Años',
  },

  {
    id: 5,
    title: 'Freelancer : ',
    /*description: 'Available',*/
    description: 'Disponiible',
  },

  {
    id: 6,
    /*title: 'Address : ',*/
    title: 'Dirección : ',
    /*description: 'Tunis',*/
    description: 'Bogotá',
  },

  {
    id: 7,
    title: 'Phone : ',
    /*description: '+21621184010',*/
    description: '+573209652025',
  },

  {
    id: 8,
    /*title: 'Languages : ',*/
    title: 'Idiomas : ',
    /*description: 'French, English',*/
    description: 'Español',
  },

  {
    id: 9,
    /*title: 'Email : ',*/
    title: 'Correo Electrónico : ',
    /*description: 'you@mail.com',*/
    description: 'elkincobos@gmail.com',
  },

  /*{
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  },*/

  /*{
    id: 10,
    title: 'Languages : ',
    /*description: 'French, English',*/
    /*description: 'Español',
  },*/
];

export const stats = [
  {
    id: 1,
    no: '1+',
    /*no: '12+',
    title: 'Years of <br /> Experience',*/
    title: 'Años de <br /> Experiencia',
  },

  {
    id: 2,
    no: '4',
    /*no: '97+',
    title: 'Completed <br /> Projects',*/
    title: 'Proyectos <br /> Completados',
  },

  {
    id: 3,
    no: '4',
    /*no: '81+',
    title: 'Happy <br /> Customers',*/
    title: 'Clientes <br /> Satisfechos',
  },

  {
    id: 4,
    no: '1',
    /*no: '53+',
    title: ' Awards <br /> Won',*/
    title: ' Reconocimientos <br /> Recibidos',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    /*year: '2018 - PRESENT',*/
    year: '2021 - 2022',
    /*title: 'Web Developer <span> Envato </span>',*/
    title: 'Programador Junior <span> Ininde SAS </span>',
    desc: 'Desarrollé landing page, configuración de PLC y Gateways, también aprendí a realizar componentes en React, tema que me gusto mucho en la parte del front.'
  },

  /*{
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer. <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },*/

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    /*year: '2015',*/
    year: '2020',
    /*title: 'Engineering Degree <span> Oxford University </span>',*/
    title: 'Curso de HTML y CSS    <span> Platzi </span>',
    desc: 'Hice el curso de HTML y CSS básico en Platzi de manera remota en el que aprendí mucho, razón por la cual estoy bastante enfocado en seguir aprendiendo. ',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    /*year: '2012',*/
    year: '2021',
    /*title: 'Master Degree <span> KIEV University </span>',*/
    title: 'Curso de Desarrollo Web <span> Udemy </span>',
    desc: 'Inicié éste curso para entender las bases de JavaScript y reforzar conocimientos de HTML y CSS, también vi React y React Native.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    /*year: '2009',*/
    year: '2022',
    /*title: 'Bachelor Degree <span> Tunis High School </span>',*/
    title: 'Diplomado Programación Básica <span> Programa MinTic 2022 </span>',
    desc: 'inicié éste proyecto del gobierno que duro 9 meses de forma virtual en el que diferentes temas .Iniciamos con programación Básica.',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    /*year: '2009',*/
    year: '2022',
    /*title: 'Bachelor Degree <span> Tunis High School </span>',*/
    title: 'Diplomado Fundamentos de  Programación <span> Programa MinTic 2022 </span>',
    desc: 'Aquí aprendí los fundamentos de la programación, con el lenguaje de python.',
  },

  {
    id: 8,
    category: 'education',
    icon: <FaGraduationCap />,
    /*year: '2009',*/
    year: '2022',
    /*title: 'Bachelor Degree <span> Tunis High School </span>',*/
    title: 'Diplomado Desarrollo de Software <span> Programa MinTic 2022 </span>',
    desc: 'En éste módulo aprendí a realizar páginas web dinámicas y algo básico de bases de datos',
  },

  {
    id: 9,
    category: 'education',
    icon: <FaGraduationCap />,
    /*year: '2009',*/
    year: '2022',
    /*title: 'Bachelor Degree <span> Tunis High School </span>',*/
    title: 'Diplomado Desarrollo de Aplicaciones Móviles <span> Programa MinTic 2022 </span>',
    desc: 'En el último módulo aprendÍ a realizar una parte de las aplicaciones móviles en Android',
  },

  {
    id: 10,
    category: 'education',
    icon: <FaGraduationCap />,
    /*year: '2009',*/
    year: '2022',
    /*title: 'Bachelor Degree <span> Tunis High School </span>',*/
    title: 'Curso básico de React Native <span> Platzi </span>',
    desc: 'Curso realizado de manera remota en el cual reforcé bastantes temas ya vistos en un curso anterior',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    /*percentage: '25',*/
    percentage: '80',
  },

  {
    id: 2,
    /*title: 'Javascript',*/
    title: 'Css',
    /*percentage: '89',*/
    percentage: '70',
  },

  {
    id: 3,
    /*title: 'Css',*/
    title: 'JavaScript',
    percentage: '50',
    /*percentage: '70',*/
  },

  {
    id: 4,
    /*title: 'Php',*/
    title: 'React',
    percentage: '66',
  },

  {
    id: 5,
    /*title: 'Wordpress',*/
    title: 'React Native',
    percentage: '70',
  },

  {
    id: 6,
    /*title: 'Jquery',*/
    title: 'Next-JS',
    /*percentage: '50',*/
    percentage: '30',
  },

  {
    id: 7,
    /*title: 'Angular',*/
    title: 'Astro',
    /*percentage: '65',*/
    percentage: '15',
  },

  /*{
    id: 8,
    title: 'React',
    percentage: '45',
  },*/
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    /*title: 'Photo Editing',*/
    title: 'Las Motos',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Catálogo de Motos',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Ray',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'HTML y CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Página : ',
        desc: 'https://motorcycleec.netlify.app',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    /*title: 'Website Design',*/
    title: 'Los Postres',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Blog de Postres',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Alison',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML y CSS, modulos BEM',
      },
      {
        icon: <FiExternalLink />,
        title: 'Página : ',
        desc: 'https://blogdepostresec.netlify.app',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    /*title: 'Video Editing',*/
    title: 'Curriculum',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Curriculum Vitae',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Ferney',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'HTML y CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Página : ',
        desc: 'https://curriculumferney.netlify.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Naturaleza',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Rincón Mágico',
    details: [
      {
        title: 'Proyecto : ',
        desc: 'Landing Page',
      },
      {
        title: 'Cliente : ',
        desc: 'Rocio',
      },
      {
        title: 'Lenguaje : ',
        desc: 'HTML y CSS',
      },
      {
        title: 'Página: ',
        desc: 'https://elrinconmagicodevicky.netlify.app',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Foto I.A',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
