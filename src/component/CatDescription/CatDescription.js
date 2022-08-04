import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './CatDescription.css'

const CatDescription = ({cat}) => {
  return(
    <section className='cat-info'>
      <img src={cat.picture}/>
      <div className='cat-description'>
        <h3>{cat.name}</h3>
        <p>{cat.sex} | {cat.type} | {cat.size}</p>
        <p>Heath:</p>
        <p>{cat.health}</p>
        <p>Meet {cat.name}</p>
        <p>{cat.about}</p>
        <p>{cat.adopt}</p>
        <Link to='/list'>
          <button className='back-button'>Back</button>
        </Link>
      </div>
    </section>
  )
}

export default CatDescription;

CatDescription.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    health: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    adopt: PropTypes.string.isRequired
  }).isRequired
};