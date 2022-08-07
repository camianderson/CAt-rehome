import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Form.css';

const NewCatForm = ({addCat}) => {
  const initialValue = {
    name: undefined,
    type: undefined,
    picture: undefined,
    sex: undefined,
    size: undefined,
    health: undefined,
    about: undefined,
    adopt: undefined
  }
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInformation(formValues));
    const newCat = {
      id: Date.now(),
      ...formValues
    }
    if(Object.keys(formErrors).length === 0){
      addCat(newCat);
      setIsSubmit(true);
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const validateInformation = (values) => {
    const errors = {};
    if (values.name | values.type | values.picture | values.sex | values.size | values.health | values.about | values.adopt === undefined | ''){
      errors.empty = 'Please fill out all fields!';
    }
    return errors;
  }

  return (
    <section className='new-cat-form'>
      <h2 className='form-title'>Need to rehome a cat?</h2>
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='message-success'> Success! Thank you for doing your part to prevent cat homelessness. 😺  </div>) : (<div className='message-start'> Fill out the form with as much as details as possible! </div>)}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>
          <p className='message-list'> Click on the button below to see our newest member in our list</p>
          <Link to='/list'>
            <button className='form-list' onClick={() => setIsSubmit(false)}>See All Cats!</button>
          </Link>
        </div>) : (
                    <form onSubmit={handleSubmit}>
                      <div className='name'>
                        <label>Name</label>
                        <input
                        name='name'
                        placeholder='Ex: Tom'
                        type='text' 
                        className='form-name'
                        value={initialValue.name}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='type'>
                        <label>Life Stage</label>
                        <input
                        name='type'
                        placeholder='Ex: Kitten'
                        type='text' 
                        className='form-type'
                        value={initialValue.type}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='size'>
                        <label>Size</label>
                        <input
                        name='size'
                        placeholder='Ex: Medium'
                        type='text' 
                        className='form-size'
                        value={initialValue.size}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='sex'>
                        <label>Sex</label>
                        <input
                        name='sex'
                        placeholder='Ex: Male'
                        type='text' 
                        className='form-sex'
                        value={initialValue.sex}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='health'>
                        <label>Health</label>
                        <textarea
                        name='health'
                        placeholder='List any health related issues'
                        className='form-health'
                        value={initialValue.health}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='picture'>
                        <label>Picture</label>
                        <input
                        name='picture'
                        placeholder='Paste image URL here'
                        type='text' 
                        className='form-picture'
                        value={initialValue.picture}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='about'>
                        <label>About</label>
                        <textarea
                        name='about'
                        placeholder='Give us a few sentences about this cat'
                        type='text' 
                        className='form-about'
                        value={initialValue.about}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='adopt'>
                        <label>Contact Info</label>
                        <input
                        name='adopt'
                        placeholder='email or/and phone #'
                        type='text' 
                        className='form-adopt'
                        value={initialValue.adopt}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <p className='error'>{formErrors.empty}</p>
                      <input
                      type='submit'
                      value='add cat'
                      className='form-submit'
                      />
                    </form>
                 )}
    </section>
  )
}

export default NewCatForm;

NewCatForm.propTypes = {
  addCat: PropTypes.func.isRequired
};