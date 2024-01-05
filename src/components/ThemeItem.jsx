import React from 'react'

const ThemeItem = ({ color, img, changeColor }) => {
  return (
    <img 
        src={img} 
        alt='' 
        className='theme__img' 
        onClick={() => {
            changeColor(color);
        }} 
    />      /*imagene de los colores*/
  );
};

export default ThemeItem