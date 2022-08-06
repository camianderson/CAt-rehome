import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className='nav-buttons nav-element'>
        <Link to='/'>
          <button className='home-button'>Home</button>
        </Link>
        <Link to='/about'>
          <button className='about-button'>About</button>
        </Link>
      </div>
      <Link to='/' style={{ textDecoration: "none" }}>
        <h1 className='logo nav-element'>CAt Rehome</h1>
      </Link>
      <Link to='/favorites'>
        <button className='fav-button nav-element'>Favorites</button>
      </Link>
    </nav>
  )
}

export default NavBar;