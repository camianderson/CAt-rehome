import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Favorites.css';

const Favorites = ({favCats, selectCat}) => {
  const allFavorites = favCats.map(cat => {
    return (
      <Link to={`/cat-description/${cat.id}`} style={{ textDecoration: "none" }} key={cat.id}>
        <div className='fav-cat-info' onClick={() => selectCat(cat.id)}>
          <div className='border-fav-img'>
            <img className='fav-img' src={cat.picture}/>
          </div>
          <div className='name-fav'>
            <h3>{cat.name}</h3>
            <p>{cat.sex} | {cat.type} | {cat.size}</p> 
          </div>
        </div>
      </Link>
    )
  })
  return (
    <section className='fav-page'>
      <div className='all-favorites'>{allFavorites}</div>
      <Link to='/list'>
        <button className='back-button'>Back</button>
      </Link>
    </section>
  )
}

export default Favorites;

Favorites.propTypes = {
  favoriteCats: PropTypes.array,
  selectCat: PropTypes.func
};