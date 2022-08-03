import React from 'react';
import Card from '../Card/Card';

const List = ({cats}) => {
  const allCats = cats.map(cat => {
    return (
      <div className='single-cat'>
        <Card 
          name={cat.name}
          type={cat.type}
          picture={cat.picture}
          sex={cat.sex}
          size={cat.size}
          health={cat.health}
          adopt={cat.adopt}
          about={cat.about}
          key={cat.id}
        />
      </div>
    )
  })
  return (
    <section className='all-cats'>{allCats}</section>
  )
}

export default List;