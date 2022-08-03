import React from 'react';
import Card from '../Card/Card';
import './List.css';

const List = ({cats}) => {
  const allCats = cats.map(cat => {
    return (
        <Card 
          name={cat.name}
          picture={cat.picture}
          id={cat.id}
          key={cat.id}
        />
    )
  })
  return (
    <section className='all-cats'>{allCats}</section>
  )
}

export default List;