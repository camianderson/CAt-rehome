import React from 'react';
import Card from '../Card/Card';
import './List.css';

const List = ({cats, selectCat}) => {
  const allCats = cats.map(cat => {
    return (
        <Card 
          name={cat.name}
          picture={cat.picture}
          id={cat.id}
          key={cat.id}
          selectCat={selectCat}
        />
    )
  })
  return (
    <section className='all-cats'>{allCats}</section>
  )
}

export default List;