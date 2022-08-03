import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className='nav-buttons'>
        <button className='home-button'>Home</button>
        <button className='about-button'>About</button>
      </div>
      <h1>CAt Rehome</h1>
      <button className='fav-button'>Favorites</button>
    </nav>
  )
}

export default NavBar;