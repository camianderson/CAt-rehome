import React from 'react';
import './Card.css'

const Card = ({name, picture, id, selectCat}) => {
  return (
    <section className='cat-info' onClick={() => selectCat(id)}>
      <img src={picture}/>
      <h3>{name}</h3>  
    </section>
  )
}

export default Card;