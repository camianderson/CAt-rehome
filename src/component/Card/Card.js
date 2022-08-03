import React from 'react';
import './Card.css'

const Card = ({name, picture}) => {
  return (
    <section className='cat-info'>
      <img src={picture}/>
      <h3>{name}</h3>  
    </section>
  )
}

export default Card;