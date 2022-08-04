import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './CatDescription.css'

const CatDescription = ({cat, favCat}) => {
  return(
    <section className='cat-info'>
      <img className='cat-img' src={cat.picture}/>
      <div className='cat-description'>
        <h3 className='cat-name'>{cat.name}</h3>
        <p className='cat-sts'>{cat.sex} | {cat.type} | {cat.size}</p>
        <p className='cat-health-title'>Health:</p>
        <p className='cat-health-info'>{cat.health}</p>
        <p className='cat-meet'>Meet {cat.name}</p>
        <p className='cat-about'>{cat.about}</p>
        <p className='cat-adopt'>{cat.adopt}</p>
        <Link to='/list'>
          <button className='back-button'>Back</button>
        </Link>
      </div>
      <button className='favorite-button' onClick={() => favCat(cat.id)}>Favorite</button>
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
  }).isRequired,
  favCat: PropTypes.func.isRequired
};