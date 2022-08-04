import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
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

Card.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selectCat: PropTypes.func.isRequired
};