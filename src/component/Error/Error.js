import React from 'react';
import {Link} from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className='error-message'>
      <h2>Oops something went wrong, please try again!</h2>
      <Link to='/'>
        <button className='error-back-button'>Go back to Home!</button>
      </Link>
    </div>
  )
}

export default Error;