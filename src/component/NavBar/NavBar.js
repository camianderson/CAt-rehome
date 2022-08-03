import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className='nav-buttons'>
        <Link to='/'>
          <button className='home-button'>Home</button>
        </Link>
        <Link to='/about'>
          <button className='about-button'>About</button>
        </Link>
      </div>
      <Link to='/' style={{ textDecoration: "none" }}>
        <h1>CAt Rehome</h1>
      </Link>
      <Link to='/favorites'>
        <button className='fav-button'>Favorites</button>
      </Link>
    </nav>
  )
}

export default NavBar;