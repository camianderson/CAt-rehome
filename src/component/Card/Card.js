import React from 'react';
import {Link} from "react-router-dom";
import './Card.css'

const Card = ({name, picture, id, selectCat}) => {
  return (
    <Link to={`/cat-description/${id}`} style={{ textDecoration: "none" }}>
      <section className='cat-info' onClick={() => selectCat(id)}>
        <img src={picture}/>
        <h3>{name}</h3>  
      </section>
    </Link>
  )
}

export default Card;