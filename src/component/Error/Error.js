import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div className='error-message'>
      <h2>Oops something went wrong, please try again!</h2>
      <Link to='/'>
        <button>Go back Home!</button>
      </Link>
    </div>
  )
}

export default Error;