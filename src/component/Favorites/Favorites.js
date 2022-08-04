import React from 'react';
import PropTypes from 'prop-types';

const Favorites = () => {
  return (
    <h3>Favorites</h3>
  )
}

export default Favorites;

Favorites.propTypes = {
  favoriteCats: PropTypes.array.isRequired,
  selectCat: PropTypes.func.isRequired
};