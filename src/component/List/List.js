import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './List.css';

const List = ({cats, selectCat}) => {
  const allCats = cats.map(cat => {
    return (
      <Link to={`/cat-description/${cat.id}`} style={{ textDecoration: "none" }} key={cat.id}>
        <section className='cat-info' onClick={() => selectCat(cat.id)}>
          <div className='name-list'>
            <h3>{cat.name}</h3>  
          </div>
          <div className='border-list-img'>
            <img className='list-img' src={cat.picture}/>
          </div>
        </section>
      </Link>
    )
  })
  return (
    <section className='all-cats'>{allCats}</section>
  )
}

export default List;

List.propTypes = {
  cats: PropTypes.array.isRequired,
  selectCat: PropTypes.func.isRequired
};