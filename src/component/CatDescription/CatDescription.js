import React from 'react';
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
      </div>
    </section>
  )
}

export default CatDescription;