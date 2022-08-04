import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Favorites.css';

const Favorites = ({favCats, selectCat}) => {
  const allFavorites = favCats.map(cat => {
    return (
      <Link to={`/cat-description/${cat.id}`} style={{ textDecoration: "none" }}>
        <div className='fav-cat-info' onClick={() => selectCat(cat.id)} key={cat.id}>
          <img src={cat.picture}/>
          <h3>{cat.name}</h3>
          <p>{cat.sex} | {cat.type} | {cat.size}</p> 
        </div>
      </Link>
    )
  })
  return (
    <div className='all-favorites'>{allFavorites}</div>
  )
}

export default Favorites;

Favorites.propTypes = {
  favoriteCats: PropTypes.array,
  selectCat: PropTypes.func
};